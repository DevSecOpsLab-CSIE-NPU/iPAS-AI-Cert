window.QUIZ_DATA["L2_S3"] = [
  {
    id: "L2S3-001",
    source: "範例題",
    type: "single",
    question: "下列哪一個評估指標最適合「類別極度不平衡」的二元分類問題？",
    options: ["Accuracy", "F1-Score / AUC-PR", "MSE", "R²"],
    answer: [1],
    explanation: "資料極度不平衡時 Accuracy 會誤導；F1 與 PR 曲線下面積 (AUC-PR) 較能反映少數類別表現。",
    tags: ["模型評估"]
  },
  {
    id: "L2S3-002",
    source: "範例題",
    type: "single",
    question: "下列何種技術可用來緩解模型「過擬合 (Overfitting)」？",
    options: [
      "增加模型參數量",
      "使用 L2 正則化、Dropout、Early Stopping",
      "減少訓練資料",
      "拿掉驗證集"
    ],
    answer: [1],
    explanation: "正則化、Dropout、Early Stopping 都是限制模型複雜度或避免過度擬合訓練集的方法。",
    tags: ["模型訓練"]
  },
  {
    id: "L2S3-003",
    source: "範例題",
    type: "multiple",
    question: "下列哪些屬於集成式學習 (Ensemble Learning)？（複選）",
    options: ["Random Forest", "XGBoost", "K-Means", "Bagging"],
    answer: [0, 1, 3],
    explanation: "K-Means 為分群法不屬於集成；其餘皆為集成方法 (Bagging / Boosting)。",
    tags: ["集成學習"]
  }
];
