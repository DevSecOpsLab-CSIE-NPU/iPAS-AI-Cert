// 題庫清單 — 每個 pack 可有 主檔(file) + 額外題庫(extras) + 重點卡片(cards)
window.QUIZ_PACKS = [
  { id: "L1_S1", level: "初級", subject: "科目1：人工智慧基礎概論",
    file: "初級_科目1.js",
    extras: ["初級_科目1_官方114-4.js"],
    cards: "初級_科目1_重點.js" },
  { id: "L1_S2", level: "初級", subject: "科目2：生成式AI應用與規劃",
    file: "初級_科目2.js",
    extras: ["初級_科目2_官方114-4.js"],
    cards: "初級_科目2_重點.js" },
  { id: "L2_S1", level: "中級", subject: "科目1：人工智慧技術應用與規劃",
    file: "中級_科目1.js",
    extras: ["中級_科目1_官方114-2.js"],
    cards: "中級_科目1_重點.js", hidden: true },
  { id: "L2_S2", level: "中級", subject: "科目2：大數據處理分析與應用",
    file: "中級_科目2.js",
    extras: ["中級_科目2_官方114-2.js"],
    cards: "中級_科目2_重點.js", hidden: true },
  { id: "L2_S3", level: "中級", subject: "科目3：機器學習技術與應用",
    file: "中級_科目3.js",
    extras: ["中級_科目3_官方114-2.js"],
    cards: "中級_科目3_重點.js", hidden: true },
];
window.QUIZ_DATA = {};
window.REVIEW_CARDS = {};
