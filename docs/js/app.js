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
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject("載入失敗：" + src);
    document.head.appendChild(s);
  });
}

async function loadPack(packId) {
  if (window.QUIZ_DATA[packId] && window.QUIZ_DATA[packId].__loaded) {
    return window.QUIZ_DATA[packId];
  }
  const pack = QUIZ_PACKS.find(p => p.id === packId);
  if (!pack) throw new Error("找不到題庫");
  // 載入主檔
  await loadScript(`js/data/${pack.file}`);
  // 載入額外題庫
  if (pack.extras && pack.extras.length) {
    await Promise.all(pack.extras.map(f => loadScript(`js/data/${f}`)));
  }
  const arr = window.QUIZ_DATA[packId] || [];
  arr.__loaded = true;
  return arr;
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
let currentStudyDay = 1;

function renderHome() {
  // 五日備考計畫
  const dayGrid = document.getElementById("day-grid");
  if (dayGrid && window.STUDY_PLAN) {
    dayGrid.innerHTML = "";
    const dayColors = ["#2563eb", "#7c3aed", "#db2777", "#ea580c", "#16a34a"];
    window.STUDY_PLAN.forEach((d, i) => {
      const card = document.createElement("div");
      card.className = "pack-card";
      card.style.borderLeft = `4px solid ${dayColors[i % dayColors.length]}`;
      card.innerHTML = `
        <div class="pack-level" style="background:${dayColors[i % dayColors.length]};">Day ${d.day}</div>
        <div class="pack-subject" style="font-size:.92rem;">${d.title}</div>
        <div style="font-size:.72rem;color:var(--muted);margin-top:.3rem;">${d.content.length} 字</div>
      `;
      card.onclick = () => openStudy(d.day);
      dayGrid.appendChild(card);
    });
  }

  const grid = document.getElementById("pack-grid");
  grid.innerHTML = "";
  QUIZ_PACKS.filter(p => !p.hidden).forEach(p => {
    const card = document.createElement("div");
    card.className = "pack-card";
    const filesCount = 1 + (p.extras?.length || 0);
    card.innerHTML = `
      <div class="pack-level">${p.level}</div>
      <div style="font-size:.7rem;color:var(--muted);margin-bottom:.3rem;">${filesCount} 個題庫檔</div>
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

  // 使用者指定每次題數（留空＝該科全部）
  const qcountRaw = document.getElementById("qcount-input").value.trim();
  const qcount = qcountRaw ? Math.max(1, parseInt(qcountRaw)) : null;

  let questions;
  if (mode === "review") {
    // 錯題複習：從所有 pack 拉錯題
    questions = await collectMistakes();
    if (questions.length === 0) { alert("目前沒有錯題"); return; }
    if (qcount) questions = shuffle([...questions]).slice(0, Math.min(qcount, questions.length));
  } else {
    questions = await loadPack(packId);
    if (mode === "random") {
      const n = qcount || questions.length;
      questions = shuffle([...questions]).slice(0, Math.min(n, questions.length));
    } else if (mode === "exam") {
      // 模擬考可選擇抽指定題數做為一份試卷
      if (qcount) questions = shuffle([...questions]).slice(0, Math.min(qcount, questions.length));
    } else if (mode === "practice" && qcount) {
      questions = questions.slice(0, Math.min(qcount, questions.length));
    }
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

// ===== 五日備考計畫 =====
function openStudy(day) {
  const plan = window.STUDY_PLAN || [];
  const item = plan.find(d => d.day === day);
  if (!item) return;
  currentStudyDay = day;
  document.getElementById("study-day-label").textContent = `Day ${item.day} / ${plan.length}`;
  document.getElementById("study-title").textContent = `Day ${item.day} — ${item.title}`;
  document.getElementById("study-content").textContent = item.content;
  document.getElementById("study-prev").disabled = day <= 1;
  document.getElementById("study-next").disabled = day >= plan.length;
  showView("study-view");
  window.scrollTo(0, 0);
}

// ===== Leaderboard =====
let lbTab = "users";

async function openLeaderboard() {
  showView("leaderboard-view");
  document.getElementById("lb-loading").style.display = "block";
  document.getElementById("lb-content").innerHTML = "";
  try {
    const res = await fetch(APPS_SCRIPT_URL + "?details=1");
    const data = await res.json();
    document.getElementById("lb-meta").textContent = `共 ${data.count} 筆作答`;
    window._lbRows = data.rows || [];
    renderLbTab();
  } catch (e) {
    document.getElementById("lb-content").innerHTML = `<p style="color:var(--ng);">載入失敗：${e.message}</p>`;
  } finally {
    document.getElementById("lb-loading").style.display = "none";
  }
}

function renderLbTab() {
  const rows = window._lbRows || [];
  document.getElementById("tab-users").classList.toggle("btn-primary", lbTab === "users");
  document.getElementById("tab-questions").classList.toggle("btn-primary", lbTab === "questions");
  if (lbTab === "users") renderUserBoard(rows);
  else renderQuestionBoard(rows);
}

function renderUserBoard(rows) {
  // 依使用者聚合
  const agg = {};
  rows.forEach(r => {
    const u = r.user || "(空)";
    if (!agg[u]) agg[u] = { user: u, sessions: 0, total: 0, correct: 0, lastTs: "" };
    agg[u].sessions++;
    agg[u].total += Number(r.total) || 0;
    agg[u].correct += Number(r.correct) || 0;
    if (!agg[u].lastTs || r.timestamp > agg[u].lastTs) agg[u].lastTs = r.timestamp;
  });
  const list = Object.values(agg)
    .filter(a => a.total > 0)
    .map(a => ({ ...a, acc: a.correct / a.total }))
    .sort((a, b) => b.acc - a.acc || b.correct - a.correct);

  if (!list.length) {
    document.getElementById("lb-content").innerHTML = `<p style="color:var(--muted);text-align:center;padding:2rem;">尚無資料</p>`;
    return;
  }
  const html = `
    <table class="lb">
      <thead><tr>
        <th>#</th><th>使用者</th><th>場次</th><th>累積答題</th><th>累積答對</th><th>正確率</th><th>最後作答</th>
      </tr></thead>
      <tbody>
        ${list.map((a, i) => {
          const accPct = Math.round(a.acc * 100);
          const cls = accPct >= 80 ? "acc-high" : accPct >= 60 ? "acc-mid" : "acc-low";
          const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "";
          return `<tr>
            <td class="rank rank-${i + 1}">${medal || (i + 1)}</td>
            <td><b>${escapeHtml(a.user)}</b></td>
            <td>${a.sessions}</td>
            <td>${a.total}</td>
            <td>${a.correct}</td>
            <td>
              <span class="acc-bar"><span class="acc-fill ${cls}" style="width:${accPct}%;display:block;"></span></span>
              ${accPct}%
            </td>
            <td style="color:var(--muted);font-size:.8rem;">${fmtTime(a.lastTs)}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>
  `;
  document.getElementById("lb-content").innerHTML = html;
}

function renderQuestionBoard(rows) {
  // 從 detail 聚合每題正確率
  const qa = {};
  rows.forEach(r => {
    if (!Array.isArray(r.detail)) return;
    r.detail.forEach(d => {
      const qid = d.qid;
      if (!qid) return;
      if (!qa[qid]) qa[qid] = { qid, attempts: 0, correct: 0, packId: r.packId };
      qa[qid].attempts++;
      if (d.correct) qa[qid].correct++;
    });
  });
  const list = Object.values(qa).map(q => ({ ...q, acc: q.attempts ? q.correct / q.attempts : 0 }));
  if (!list.length) {
    document.getElementById("lb-content").innerHTML =
      `<p style="color:var(--muted);text-align:center;padding:2rem;">尚無題目作答資料（需要至少一筆完成記錄含 detail）</p>`;
    return;
  }
  // 兩段：最難（acc 最低）與最易（acc 最高），各取 top 20
  const sortedLow = [...list].filter(q => q.attempts >= 1).sort((a, b) => a.acc - b.acc).slice(0, 20);
  const sortedHigh = [...list].filter(q => q.attempts >= 1).sort((a, b) => b.acc - a.acc).slice(0, 20);

  const packLabel = (pid) => {
    const p = QUIZ_PACKS.find(x => x.id === pid);
    return p ? `${p.level}・${p.subject.replace(/^科目\d+：/, '')}` : (pid || "");
  };

  const renderRow = (q, i) => {
    const accPct = Math.round(q.acc * 100);
    const cls = accPct >= 80 ? "acc-high" : accPct >= 60 ? "acc-mid" : "acc-low";
    return `<tr class="clickable" data-qid="${escapeHtml(q.qid)}" data-pack="${escapeHtml(q.packId || '')}">
      <td class="rank">${i + 1}</td>
      <td style="font-family:monospace;font-size:.78rem;">${escapeHtml(q.qid)}</td>
      <td style="font-size:.8rem;">${escapeHtml(packLabel(q.packId))}</td>
      <td>${q.attempts}</td>
      <td>${q.correct}</td>
      <td>
        <span class="acc-bar"><span class="acc-fill ${cls}" style="width:${accPct}%;display:block;"></span></span>
        ${accPct}%
      </td>
    </tr>`;
  };

  document.getElementById("lb-content").innerHTML = `
    <p style="font-size:.8rem;color:var(--muted);margin-bottom:.6rem;">💡 點任一列可查看題目內容與解答</p>
    <h3 style="font-size:.95rem;margin:.6rem 0 .5rem;color:var(--ng);">😈 最難 Top 20（正確率最低）</h3>
    <table class="lb"><thead><tr><th>#</th><th>題目 ID</th><th>分類</th><th>嘗試</th><th>答對</th><th>正確率</th></tr></thead>
      <tbody>${sortedLow.map(renderRow).join("")}</tbody></table>
    <h3 style="font-size:.95rem;margin:1.2rem 0 .5rem;color:var(--ok);">✨ 最易 Top 20（正確率最高）</h3>
    <table class="lb"><thead><tr><th>#</th><th>題目 ID</th><th>分類</th><th>嘗試</th><th>答對</th><th>正確率</th></tr></thead>
      <tbody>${sortedHigh.map(renderRow).join("")}</tbody></table>
  `;

  // 綁定 row click → modal
  document.querySelectorAll("#lb-content tr.clickable").forEach(tr => {
    tr.onclick = () => openQuestionModal(tr.dataset.qid, tr.dataset.pack);
  });
}

async function openQuestionModal(qid, packId) {
  const modal = document.getElementById("question-modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `<p style="color:var(--muted);">載入中…</p>`;
  modal.classList.add("show");

  let q = null;
  try {
    const arr = await loadPack(packId);
    q = arr.find(x => x.id === qid);
  } catch (e) { /* ignore */ }

  if (!q) {
    body.innerHTML = `
      <h3>${escapeHtml(qid)}</h3>
      <p style="color:var(--ng);">在題庫中找不到此題（可能已被移除或科目不符）</p>
    `;
    return;
  }

  const typeLabel = q.type === "multiple" ? "複選題" : q.type === "true_false" ? "是非題" : "單選題";
  const tagsHtml = (q.tags || []).map(t => `<span class="modal-tag">${escapeHtml(t)}</span>`).join("");
  const optsHtml = q.options.map((opt, i) => {
    const correct = q.answer.includes(i);
    const letter = String.fromCharCode(65 + i);
    return `<div class="modal-opt ${correct ? "correct" : ""}">
      <b>${letter}.</b> ${escapeHtml(opt)} ${correct ? "✓" : ""}
    </div>`;
  }).join("");

  body.innerHTML = `
    <div class="modal-meta">
      <span class="modal-tag">${escapeHtml(q.id)}</span>
      <span class="modal-tag">${escapeHtml(q.source || "")}</span>
      <span class="modal-tag">${typeLabel}</span>
      ${tagsHtml}
    </div>
    <h3 style="font-size:1.05rem;line-height:1.5;margin-bottom:1rem;">${escapeHtml(q.question)}</h3>
    ${optsHtml}
    ${q.explanation ? `<div style="margin-top:1rem;padding:.8rem;background:var(--accent-light);border-radius:6px;font-size:.9rem;line-height:1.5;">
      <b style="color:var(--accent);">解析：</b>${escapeHtml(q.explanation)}
    </div>` : `<p style="margin-top:.8rem;color:var(--muted);font-size:.8rem;">（無解析）</p>`}
  `;
}

function closeQuestionModal() {
  document.getElementById("question-modal").classList.remove("show");
}

function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function fmtTime(s) { if (!s) return ""; try { return new Date(s).toLocaleString("zh-TW", { hour12: false }); } catch { return s; } }

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
  document.getElementById("open-leaderboard").onclick = openLeaderboard;
  document.getElementById("back-home-4").onclick = () => { renderHome(); showView("home-view"); };
  document.getElementById("tab-users").onclick = () => { lbTab = "users"; renderLbTab(); };
  document.getElementById("tab-questions").onclick = () => { lbTab = "questions"; renderLbTab(); };
  document.getElementById("refresh-lb").onclick = openLeaderboard;
  document.getElementById("back-home-5").onclick = () => { renderHome(); showView("home-view"); };
  document.getElementById("study-prev").onclick = () => openStudy(currentStudyDay - 1);
  document.getElementById("study-next").onclick = () => openStudy(currentStudyDay + 1);
  document.getElementById("modal-close").onclick = closeQuestionModal;
  document.getElementById("question-modal").onclick = (e) => {
    if (e.target.id === "question-modal") closeQuestionModal();
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
    if (e.key === "Escape" && document.getElementById("question-modal").classList.contains("show")) {
      closeQuestionModal();
    }
  });
});
