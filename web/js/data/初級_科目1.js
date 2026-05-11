window.QUIZ_DATA["L1_S1"] = [
  {
    id: "L1S1-001",
    source: "範例題",
    type: "single",
    question: "下列何者最能描述「監督式學習 (Supervised Learning)」？",
    options: [
      "從未標記的資料中發現隱藏結構",
      "從帶有標記 (label) 的資料中學習輸入到輸出的映射",
      "透過與環境互動的獎勵訊號優化策略",
      "對高維資料進行降維壓縮"
    ],
    answer: [1],
    explanation: "監督式學習需要 (x, y) 配對資料，模型學習函數 f: x → y。常見任務為分類與迴歸。",
    tags: ["機器學習基礎", "學習範式"]
  },
  {
    id: "L1S1-002",
    source: "範例題",
    type: "single",
    question: "AI、機器學習 (ML)、深度學習 (DL) 三者的關係，下列何者正確？",
    options: [
      "三者互不相關",
      "DL ⊂ ML ⊂ AI",
      "AI ⊂ ML ⊂ DL",
      "ML ⊂ DL ⊂ AI"
    ],
    answer: [1],
    explanation: "AI 是最廣的概念，ML 是 AI 的一個子集，DL 又是 ML 中以多層神經網路為核心的子集。",
    tags: ["AI 基礎"]
  },
  {
    id: "L1S1-003",
    source: "範例題",
    type: "multiple",
    question: "下列何者屬於「非監督式學習 (Unsupervised Learning)」的任務？（複選）",
    options: [
      "K-Means 分群",
      "PCA 主成分分析",
      "圖片分類 (Image Classification)",
      "異常偵測 (Anomaly Detection)"
    ],
    answer: [0, 1, 3],
    explanation: "圖片分類屬於監督式學習；其餘三者皆可在無標籤資料下進行。",
    tags: ["學習範式"]
  }
];
