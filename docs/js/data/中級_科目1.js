window.QUIZ_DATA["L2_S1"] = [
  {
    id: "L2S1-001",
    source: "範例題",
    type: "single",
    question: "在 AI 專案規劃中，CRISP-DM 流程的第一個階段為何？",
    options: ["資料理解 (Data Understanding)", "業務理解 (Business Understanding)", "模型建立 (Modeling)", "部署 (Deployment)"],
    answer: [1],
    explanation: "CRISP-DM 六階段順序：Business → Data → Data Prep → Modeling → Evaluation → Deployment。",
    tags: ["AI 專案管理", "CRISP-DM"]
  },
  {
    id: "L2S1-002",
    source: "範例題",
    type: "multiple",
    question: "下列何者屬於 AI 治理 (AI Governance) 的核心面向？（複選）",
    options: ["可解釋性 (Explainability)", "公平性 (Fairness)", "極大化模型參數量", "可問責性 (Accountability)"],
    answer: [0, 1, 3],
    explanation: "AI 治理關注可信賴 AI 的各面向：透明、公平、安全、可問責；模型參數量本身非治理面向。",
    tags: ["AI 治理"]
  },
  {
    id: "L2S1-003",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "下列關於 BERT 與 GPT 預訓練方式的差異，何者正確？",
    options: [
      "BERT 為單向、GPT 為雙向",
      "BERT 為雙向 (MLM)、GPT 為單向 (自回歸語言建模)",
      "兩者均為雙向，僅參數量不同",
      "兩者均使用 RNN 架構"
    ],
    answer: [1],
    explanation: "BERT 用遮罩語言模型雙向預訓練；GPT 採自回歸方式由左至右預測下一 token。",
    tags: ["LLM", "預訓練"]
  },
  {
    id: "L2S1-004",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "PCA 的「第一主成分」代表什麼？",
    options: ["資料中變異數最大的方向", "資料分佈最平均的方向", "與目標變數相關性最強的方向", "離群點所在的方向"],
    answer: [0],
    explanation: "PCA 將資料投影到使保留變異量最大的正交方向，第一主成分即為最大變異方向。",
    tags: ["降維", "PCA"]
  },
  {
    id: "L2S1-005",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "LoRA (Low-Rank Adaptation) 的核心技巧為何？",
    options: [
      "凍結原模型權重，僅訓練插入的低秩矩陣分解",
      "對整個模型重新預訓練",
      "壓縮模型權重至 int8",
      "丟棄部分神經元以降低參數量"
    ],
    answer: [0],
    explanation: "LoRA 在凍結的權重上注入兩個小型低秩矩陣 (W ≈ W₀ + BA)，只訓練 A、B 大幅降低成本。",
    tags: ["LLM 微調", "LoRA"]
  },
  {
    id: "L2S1-006",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "K-means 與 DBSCAN 的主要差異為何？",
    options: [
      "K-means 基於距離分群，DBSCAN 基於密度",
      "兩者皆需事先指定 K",
      "K-means 可自動處理任意形狀群集",
      "DBSCAN 必須指定群數"
    ],
    answer: [0],
    explanation: "K-means 假設球狀群集且需先給 K；DBSCAN 以密度連通定義群集，可自動找出群數並識別雜訊。",
    tags: ["分群"]
  },
  {
    id: "L2S1-007",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "下列關於「知識蒸餾 (Knowledge Distillation)」的描述，何者正確？",
    options: [
      "將大型教師模型的知識遷移到小型學生模型",
      "增加模型層數以提升準確率",
      "將模型權重從 FP32 壓縮成 INT8",
      "用 RAG 補充外部知識"
    ],
    answer: [0],
    explanation: "知識蒸餾以教師模型的軟標籤指導學生模型訓練，常用於模型輕量化部署。",
    tags: ["模型壓縮"]
  }
];
