window.QUIZ_DATA["L2_S2"] = [
  {
    id: "L2S2-001",
    source: "範例題",
    type: "single",
    question: "大數據 5V 特性中，「Veracity」指的是？",
    options: ["資料量大", "資料變化速度快", "資料的真實性與品質", "資料的價值"],
    answer: [2],
    explanation: "5V：Volume（量）、Velocity（速度）、Variety（多樣性）、Veracity（真實性）、Value（價值）。",
    tags: ["大數據"]
  },
  {
    id: "L2S2-002",
    source: "範例題",
    type: "single",
    question: "下列何者最適合用於批次處理大量歷史日誌資料？",
    options: ["Apache Kafka", "Apache Spark / Hadoop MapReduce", "Redis", "WebSocket"],
    answer: [1],
    explanation: "Spark / Hadoop 為批次大數據處理框架；Kafka 為串流訊息平台、Redis 為快取。",
    tags: ["大數據平台"]
  },
  {
    id: "L2S2-003",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "下列關於「資料倉儲 (Data Warehouse)」與「資料湖 (Data Lake)」的描述，何者正確？",
    options: [
      "兩者皆只能儲存結構化資料",
      "資料倉儲以結構化資料為主、需 schema-on-write；資料湖可存多型態原始資料、schema-on-read",
      "資料湖只能儲存影像資料",
      "資料倉儲不支援 SQL 查詢"
    ],
    answer: [1],
    explanation: "Warehouse 重視已建模的結構化分析；Data Lake 容納原始多型態資料，分析時才套用結構。",
    tags: ["資料架構"]
  },
  {
    id: "L2S2-004",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "卡方檢定 (Chi-square test) 與 t 檢定的主要適用場景差異為何？",
    options: [
      "卡方用於檢驗類別變數間關聯；t 檢定用於檢驗連續變數的母體均值差異",
      "兩者完全等價",
      "卡方用於迴歸；t 檢定用於分類",
      "卡方僅能用於常態分布資料"
    ],
    answer: [0],
    explanation: "卡方適合列聯表的類別變數獨立性檢定；t 檢定比較樣本平均數，需大致常態或大樣本。",
    tags: ["統計檢定"]
  },
  {
    id: "L2S2-005",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "以四分位距 (IQR) 規則偵測異常值時，下列哪個區間外的值通常被視為離群？",
    options: [
      "[Q1 − 1.5·IQR, Q3 + 1.5·IQR]",
      "[平均值 ± 1 個標準差]",
      "[最小值, 中位數]",
      "[Q1, Q3]"
    ],
    answer: [0],
    explanation: "Tukey 法則：低於 Q1 − 1.5·IQR 或高於 Q3 + 1.5·IQR 視為離群值。",
    tags: ["資料前處理", "離群值"]
  }
];
