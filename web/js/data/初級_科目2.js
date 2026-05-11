window.QUIZ_DATA["L1_S2"] = [
  {
    id: "L1S2-001",
    source: "範例題",
    type: "single",
    question: "下列何者最能描述 Transformer 架構中的「自注意力機制 (Self-Attention)」？",
    options: [
      "讓模型在處理每個 token 時都能參考序列中所有 token",
      "讓模型只能逐字依序處理輸入",
      "用於圖像卷積運算",
      "用於梯度反向傳播"
    ],
    answer: [0],
    explanation: "Self-Attention 透過 Q、K、V 計算每個 token 對其他所有 token 的關聯權重。",
    tags: ["LLM", "Transformer"]
  },
  {
    id: "L1S2-002",
    source: "範例題",
    type: "single",
    question: "Prompt Engineering 中的「Few-shot Prompting」是指？",
    options: [
      "不給任何範例直接讓模型回答",
      "在 prompt 中提供少量範例後再問問題",
      "對模型進行微調 (fine-tuning)",
      "使用最少的 token 數"
    ],
    answer: [1],
    explanation: "Few-shot 在 prompt 內示範幾個輸入-輸出範例，引導模型仿照格式回答。",
    tags: ["Prompt Engineering"]
  },
  {
    id: "L1S2-003",
    source: "範例題",
    type: "true_false",
    question: "RAG (Retrieval-Augmented Generation) 是透過檢索外部知識庫來補強 LLM 回答的技術。",
    options: ["正確", "錯誤"],
    answer: [0],
    explanation: "RAG 在生成前先檢索相關文件作為 context，可減少幻覺並支援即時資料。",
    tags: ["RAG", "生成式AI"]
  }
];
