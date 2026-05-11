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
  },
  {
    id: "L1S2-004",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "下列何者「無法」用於生成圖片？",
    options: ["Midjourney", "Stable Diffusion", "Suno AI", "DALL·E"],
    answer: [2],
    explanation: "Suno AI 是音樂生成工具；其餘皆為圖像生成模型。",
    tags: ["生成式AI 工具"]
  },
  {
    id: "L1S2-005",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "RLHF (人類回饋強化學習) 在 LLM 對齊流程中的典型步驟順序為何？",
    options: [
      "提示示範微調 → 訓練獎勵模型 → 以 PPO 強化學習對齊",
      "獎勵模型 → 提示示範 → 部署",
      "PPO → 監督式微調 → 獎勵模型",
      "獎勵模型 → PPO → 提示示範"
    ],
    answer: [0],
    explanation: "RLHF 標準三階段：(1) SFT 監督式微調；(2) 訓練 Reward Model；(3) PPO 強化學習對齊。",
    tags: ["LLM 對齊", "RLHF"]
  },
  {
    id: "L1S2-006",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "ChatGPT 等對話式 LLM 早期典型採用的 Transformer 變體屬於下列何者？",
    options: ["僅編碼器 (Encoder-only)", "僅解碼器 (Decoder-only)", "編碼器-解碼器 (Encoder-Decoder)", "卷積網路"],
    answer: [1],
    explanation: "GPT 系列為 Decoder-only Transformer；BERT 為 Encoder-only；T5 / 原始 Transformer 為 Encoder-Decoder。",
    tags: ["LLM", "Transformer"]
  },
  {
    id: "L1S2-007",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "處理個人可識別資訊 (PII) 時，下列何者屬於「去識別化」技術？",
    options: ["差分隱私 (Differential Privacy)", "提高模型推論吞吐量", "增加 GPU 數量", "加長 context window"],
    answer: [0],
    explanation: "差分隱私在資料中加入受控雜訊以保護個體；其他三項與隱私保護無關。",
    tags: ["AI 治理", "隱私保護"]
  },
  {
    id: "L1S2-008",
    source: "社群回憶版改編 (114-2 初級)",
    type: "single",
    question: "下列關於 RAG 與微調 (Fine-tuning) 的比較，何者正確？",
    options: [
      "RAG 適合需即時引入外部最新知識；微調適合讓模型內化特定風格或專業領域行為",
      "RAG 一定比微調效果好",
      "兩者完全互斥，不可同時使用",
      "微調無需任何訓練資料"
    ],
    answer: [0],
    explanation: "兩者可互補：RAG 處理動態知識，微調塑造行為/風格；實務常見「微調 + RAG」組合。",
    tags: ["RAG", "微調"]
  }
];
