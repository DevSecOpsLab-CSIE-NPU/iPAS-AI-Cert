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
  },
  {
    id: "L2S3-004",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "下列關於 CNN 池化層 (Pooling) 主要目的的描述，何者正確？",
    options: [
      "增加模型參數量以提升表現",
      "降低空間解析度與計算量、增加平移不變性",
      "進行非線性激活",
      "做梯度反向傳播"
    ],
    answer: [1],
    explanation: "Pooling 透過 max/average 縮小特徵圖尺寸，降低計算量並讓特徵對小幅位移更穩健。",
    tags: ["CNN"]
  },
  {
    id: "L2S3-005",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "決策樹進行「剪枝 (Pruning)」的主要目的為何？",
    options: [
      "降低樹的複雜度以減少過擬合並提升泛化能力",
      "讓樹的深度更深以記住所有訓練資料",
      "替換成隨機森林",
      "加快訓練時的特徵選擇"
    ],
    answer: [0],
    explanation: "決策樹若不剪枝容易過擬合；前/後剪枝皆透過限制深度或合併節點來提升泛化。",
    tags: ["決策樹"]
  },
  {
    id: "L2S3-006",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "VAE (Variational Autoencoder) 損失函式中 KL 散度項的角色為何？",
    options: [
      "衡量重建誤差",
      "衡量潛在分布與標準常態分布的差異，作為正則項",
      "衡量分類錯誤率",
      "與生成無關，僅為加速訓練"
    ],
    answer: [1],
    explanation: "VAE 損失 = 重建損失 + KL(q(z|x) ‖ N(0, I))；KL 拉近潛在分布到先驗，避免後驗坍縮。",
    tags: ["生成模型", "VAE"]
  },
  {
    id: "L2S3-007",
    source: "社群回憶版改編 (114-1 中級)",
    type: "single",
    question: "下列關於「遷移學習 (Transfer Learning)」的描述，何者正確？",
    options: [
      "從零訓練全新模型",
      "將在來源任務學到的知識（多為預訓練模型）遷移到目標任務以節省資料與訓練成本",
      "把資料集從 A 公司搬到 B 公司",
      "只能用於圖像分類"
    ],
    answer: [1],
    explanation: "Transfer Learning 利用預訓練模型作為初始化，再以少量目標任務資料 fine-tune。",
    tags: ["遷移學習"]
  }
];
