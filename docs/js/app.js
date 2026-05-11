/* iPAS AI 答題練習 — 前端主邏輯
 * 設計：純前端 SPA，localStorage 存進度，非同步 POST 到 Google Apps Script
 */

// ===== 設定 =====
// 部署後請改成你的 Apps Script Web App URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypCFxvTv-vDU6bgfg8w_RPhe7E0WQUyNfuLYqieVSVRItXAJ9ES7EVOlZ0jm2jpkLMHg/exec";
const LS_KEY = "ipas_quiz_state_v1";

// ===== 狀態 =====
let state = {
  user: "",
  packId: "",
  mode: "practice",       // practice | exam | review | random
  questions: [],          // 當前題目陣列
  index: 0,
  answers: {},            // {qid: [selectedIdx, ...]}
  startedAt: null,
};

let history = loadHistory();  // 所有歷史紀錄
let cardState = { user: "", packId: "", cards: [], index: 0 };

function renderCard() {
  const c = cardState.cards[cardState.index];
  if (!c) return;
  document.getElementById("card-progress").textContent = `${cardState.index + 1} / ${cardState.cards.length}`;
  document.getElementById("card-progress-fill").style.width = `${(cardState.index + 1) / cardState.cards.length * 100}%`;
  document.getElementById("card-title").textContent = c.title;
  document.getElementById("card-content").textContent = c.content;
  document.getElementById("card-source").textContent = c.source || "";
}
function cardNext() { if (cardState.index < cardState.cards.length - 1) { cardState.index++; renderCard(); } }
function cardPrev() { if (cardState.index > 0) { cardState.index--; renderCard(); } }

// ===== localStorage =====
function loadHistory() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || { records: [], mistakes: {} }; }
  catch { return { records: [], mistakes: {} }; }
}
function saveHistory() { localStorage.setItem(LS_KEY, JSON.stringify(history)); }

// ===== 載入題庫 =====
function loadPack(packId) {
  return new Promise((resolve, reject) => {
    if (window.QUIZ_DATA[packId]) return resolve(window.QUIZ_DATA[packId]);
    const pack = QUIZ_PACKS.find(p => p.id === packId);
    if (!pack) return reject("找不到題庫");
    const s = document.createElement("script");
    s.src = `js/data/${pack.file}`;
    s.onload = () => resolve(window.QUIZ_DATA[packId] || []);
    s.onerror = () => reject("載入失敗：" + pack.file);
    document.head.appendChild(s);
  });
}

function loadCards(packId) {
  return new Promise((resolve, reject) => {
    if (window.REVIEW_CARDS[packId]) return resolve(window.REVIEW_CARDS[packId]);
    const pack = QUIZ_PACKS.find(p => p.id === packId);
    if (!pack || !pack.cards) return resolve([]);
    const s = document.createElement("script");
    s.src = `js/data/${pack.cards}`;
    s.onload = () => resolve(window.REVIEW_CARDS[packId] || []);
    s.onerror = () => resolve([]);
    document.head.appendChild(s);
  });
}

// ===== UI 切換 =====
function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// ===== 首頁 =====
function renderHome() {
  const grid = document.getElementById("pack-grid");
  grid.innerHTML = "";
  QUIZ_PACKS.forEach(p => {
    const card = document.createElement("div");
    card.className = "pack-card";
    card.innerHTML = `
      <div class="pack-level">${p.level}</div>
      <div class="pack-subject">${p.subject}</div>
    `;
    card.onclick = () => startQuiz(p.id, document.getElementById("mode-select").value);
    grid.appendChild(card);
  });
  // 統計
  const stats = computeStats();
  document.getElementById("stats-summary").innerHTML =
    `累積作答 <b>${stats.total}</b> 題　正確率 <b>${stats.acc}%</b>　錯題本 <b>${Object.keys(history.mistakes).length}</b> 題`;
}

function computeStats() {
  let total = 0, correct = 0;
  history.records.forEach(r => { total += r.total; correct += r.correct; });
  return { total, correct, acc: total ? Math.round(correct / total * 100) : 0 };
}

// ===== 開始答題 =====
async function startQuiz(packId, mode) {
  const user = document.getElementById("user-input").value.trim();
  if (!user) { alert("請先輸入暱稱/編號"); return; }

  // 重點瀏覽模式：載入 review cards 後切換到卡片視圖
  if (mode === "cards") {
    const cards = await loadCards(packId);
    if (!cards.length) { alert("該科目沒有重點卡片"); return; }
    cardState = { user, packId, cards, index: 0 };
    showView("card-view");
    renderCard();
    return;
  }

  let questions;
  if (mode === "review") {
    // 錯題複習：從所有 pack 拉錯題
    questions = await collectMistakes();
    if (questions.length === 0) { alert("目前沒有錯題"); return; }
  } else {
    questions = await loadPack(packId);
    if (mode === "random") questions = shuffle([...questions]).slice(0, Math.min(10, questions.length));
  }

  state = {
    user, packId, mode,
    questions, index: 0, answers: {},
    startedAt: Date.now(),
  };
  showView("quiz-view");
  renderQuestion();
}

async function collectMistakes() {
  const result = [];
  for (const packId of Object.keys(history.mistakes)) {
    if (!history.mistakes[packId]?.length) continue;
    const all = await loadPack(packId);
    const set = new Set(history.mistakes[packId]);
    all.forEach(q => { if (set.has(q.id)) result.push(q); });
  }
  return result;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== 答題介面 =====
function renderQuestion() {
  const q = state.questions[state.index];
  if (!q) return finishQuiz();

  document.getElementById("progress").textContent = `${state.index + 1} / ${state.questions.length}`;
  document.getElementById("progress-fill").style.width = `${(state.index) / state.questions.length * 100}%`;
  document.getElementById("q-id").textContent = `${q.id} · ${q.source || ""}`;
  document.getElementById("q-text").textContent = q.question;
  document.getElementById("q-tags").innerHTML = (q.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
  document.getElementById("q-type-hint").textContent =
    q.type === "multiple" ? "（複選題）" : q.type === "true_false" ? "（是非題）" : "（單選題）";

  const optsEl = document.getElementById("options");
  optsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const isMulti = q.type === "multiple";
    const id = `opt-${i}`;
    const div = document.createElement("label");
    div.className = "opt";
    div.innerHTML = `
      <input type="${isMulti ? 'checkbox' : 'radio'}" name="opt" id="${id}" value="${i}">
      <span>${opt}</span>
    `;
    optsEl.appendChild(div);
  });

  document.getElementById("feedback").style.display = "none";
  document.getElementById("submit-btn").style.display = "inline-block";
  document.getElementById("next-btn").style.display = "none";
}

function submitAnswer() {
  const q = state.questions[state.index];
  const selected = [...document.querySelectorAll('input[name="opt"]:checked')].map(i => parseInt(i.value));
  if (selected.length === 0) { alert("請選擇答案"); return; }

  state.answers[q.id] = selected;
  const correct = arraysEqual([...selected].sort(), [...q.answer].sort());

  // 練習模式顯示解析；考試模式不立刻顯示
  if (state.mode !== "exam") {
    const fb = document.getElementById("feedback");
    fb.className = "feedback " + (correct ? "ok" : "ng");
    fb.innerHTML = `
      <div class="fb-title">${correct ? "✓ 答對" : "✗ 答錯"}</div>
      <div class="fb-ans">正解：${q.answer.map(i => q.options[i]).join("、")}</div>
      <div class="fb-exp">${q.explanation || ""}</div>
    `;
    fb.style.display = "block";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  state.index++;
  if (state.index >= state.questions.length) finishQuiz();
  else renderQuestion();
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

// ===== 完成 =====
function finishQuiz() {
  let correct = 0;
  const detail = [];
  state.questions.forEach(q => {
    const sel = state.answers[q.id] || [];
    const ok = arraysEqual([...sel].sort(), [...q.answer].sort());
    if (ok) correct++;
    else {
      // 加入錯題本
      history.mistakes[state.packId] = history.mistakes[state.packId] || [];
      if (!history.mistakes[state.packId].includes(q.id)) history.mistakes[state.packId].push(q.id);
    }
    detail.push({ qid: q.id, selected: sel, correct: ok });
  });
  const record = {
    ts: new Date().toISOString(),
    user: state.user,
    packId: state.packId,
    mode: state.mode,
    total: state.questions.length,
    correct,
    durationSec: Math.round((Date.now() - state.startedAt) / 1000),
    detail,
  };
  history.records.push(record);
  saveHistory();
  postToSheet(record);  // 非阻塞

  // 顯示結果
  document.getElementById("result-score").textContent =
    `${correct} / ${state.questions.length}（${Math.round(correct / state.questions.length * 100)}%）`;
  document.getElementById("result-time").textContent = `用時 ${record.durationSec} 秒`;
  showView("result-view");
}

// ===== Apps Script POST =====
function postToSheet(record) {
  if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) return;
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(record),
  }).catch(e => console.warn("Sync failed:", e));
}

// ===== 初始化 =====
window.addEventListener("DOMContentLoaded", () => {
  // URL 參數可預填使用者
  const params = new URLSearchParams(location.search);
  if (params.get("user")) document.getElementById("user-input").value = params.get("user");

  renderHome();
  showView("home-view");

  document.getElementById("submit-btn").onclick = submitAnswer;
  document.getElementById("next-btn").onclick = nextQuestion;
  document.getElementById("back-home").onclick = () => { renderHome(); showView("home-view"); };
  document.getElementById("back-home-2").onclick = () => { renderHome(); showView("home-view"); };
  document.getElementById("back-home-3").onclick = () => { renderHome(); showView("home-view"); };
  document.getElementById("card-next").onclick = cardNext;
  document.getElementById("card-prev").onclick = cardPrev;
  document.getElementById("clear-mistakes").onclick = () => {
    if (confirm("確定清空錯題本？")) { history.mistakes = {}; saveHistory(); renderHome(); }
  };

  // 鍵盤快捷鍵
  document.addEventListener("keydown", (e) => {
    const inQuiz = document.getElementById("quiz-view").style.display === "block";
    const inCard = document.getElementById("card-view").style.display === "block";
    if (inQuiz) {
      const submitVisible = document.getElementById("submit-btn").style.display !== "none";
      if (/^[1-9]$/.test(e.key)) {
        const idx = parseInt(e.key) - 1;
        const inp = document.querySelector(`input[name="opt"][value="${idx}"]`);
        if (inp) { inp.checked = inp.type === "radio" ? true : !inp.checked; }
      } else if (e.key === "Enter") {
        if (submitVisible) submitAnswer(); else nextQuestion();
      }
    } else if (inCard) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") { e.preventDefault(); cardNext(); }
      else if (e.key === "ArrowLeft") { cardPrev(); }
    }
  });
});
