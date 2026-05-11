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
  },
  {
    id: "L1S1-004",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "依歐盟《AI Act》，「使用 AI 聊天機器人與人互動時，業者必須告知使用者正在與 AI 系統溝通」屬於下列哪個風險等級？",
    options: ["不可接受風險", "高風險", "受限風險（有限度風險）", "最小風險"],
    answer: [2],
    explanation: "AI Act 將需要透明度義務（如告知對話對象為 AI、深偽標示）的應用列為「受限/有限度風險」。",
    tags: ["AI 治理", "歐盟 AI Act"]
  },
  {
    id: "L1S1-005",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "下列何者最常被用來評估二元分類模型在不同閾值下的整體表現？",
    options: ["MSE", "ROC 曲線與 AUC", "R²", "Silhouette 分數"],
    answer: [1],
    explanation: "ROC/AUC 描述 TPR-FPR 在所有閾值下的權衡；MSE、R² 用於迴歸；Silhouette 用於分群。",
    tags: ["模型評估"]
  },
  {
    id: "L1S1-006",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "Transformer 架構中作為核心的關鍵機制為何？",
    options: ["卷積運算", "注意力機制 (Attention)", "遞迴連線 (Recurrence)", "池化運算"],
    answer: [1],
    explanation: "Transformer 以 Self-Attention 取代 RNN 的遞迴，能平行處理序列並捕捉長距依賴。",
    tags: ["Transformer", "深度學習"]
  },
  {
    id: "L1S1-007",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "下列何者「不屬於」深度學習模型？",
    options: ["GAN", "VAE", "SVM", "CNN"],
    answer: [2],
    explanation: "SVM 為傳統機器學習方法（最大間隔分類器）；GAN、VAE、CNN 皆屬深度學習。",
    tags: ["AI 基礎"]
  },
  {
    id: "L1S1-008",
    source: "社群回憶版改編 (114-2 初級)",
    type: "single",
    question: "KNN (K-Nearest Neighbors) 屬於下列哪一種學習方法？",
    options: ["非監督式分群", "基於距離計算的監督式學習", "強化學習", "生成式模型"],
    answer: [1],
    explanation: "KNN 依輸入點與訓練集樣本的距離，由最近 K 個鄰居以多數決決定類別，屬監督式分類。",
    tags: ["機器學習基礎"]
  },
  {
    id: "L1S1-009",
    source: "社群回憶版改編 (114-2 初級)",
    type: "single",
    question: "下列哪個統計量「無法」反映資料的變異性（離散程度）？",
    options: ["標準差", "變異數", "中位數", "四分位距 IQR"],
    answer: [2],
    explanation: "中位數為集中趨勢指標而非離散程度；標準差、變異數、IQR 都衡量資料分散情形。",
    tags: ["統計基礎"]
  },
  {
    id: "L1S1-010",
    source: "社群回憶版改編 (114-1 初級)",
    type: "single",
    question: "下列何者最不適合用於「處理異常值 (outliers)」？",
    options: ["以四分位距 IQR 規則偵測", "Z-score 標準化偵測", "以眾數取代", "Winsorization 截尾"],
    answer: [2],
    explanation: "眾數適合處理類別變數的缺失值，不適合連續變數的異常值處理。",
    tags: ["資料前處理"]
  }
];
