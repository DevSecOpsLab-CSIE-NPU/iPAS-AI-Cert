window.QUIZ_DATA["L2_S3"] = (window.QUIZ_DATA["L2_S3"]||[]).concat(
[
  {
    "id": "115-1_中級_科目3-001",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某量化投資團隊需估算某投資組合未來30日的風險值。由於衍生性金融商品的定價模型過於複雜，無法以解析解直接求得，工程師因此採用隨機模擬方式，產生大量市場情境模擬並估計損失分布。此方法屬於下列哪一種技術框架？",
    "options": [
      "馬可夫鏈（Markov Chain）：以狀態轉移機率描述系統演變的隨機過程；",
      "梯度下降最佳化（Gradient Descent）：透過迭代更新參數以最小化損失函數；",
      "蒙地卡羅方法（Monte Carlo Method）：透過大量隨機抽樣近似機率分布或數值結果；",
      "貝氏推論（Bayesian Inference）：結合先驗分布與資料更新後驗機率"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-002",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師在建立房價預測模型時，訓練資料中存在少數豪宅（成交價超過一般物件10倍以上）。若工程師希望模型對這些極端高價物件的預測誤差更敏感，並在訓練時產生較大的梯度更新影響，應優先選擇下列哪種損失函數？",
    "options": [
      "平均絕對誤差（MAE）：對誤差進行線性懲罰，對離群值較不敏感，梯度近似固定；",
      "Huber損失（Huber Loss）：小誤差採平方懲罰，大誤差轉為線性懲罰，以降低離群值影響；",
      "均方誤差（MSE）：對誤差進行平方處理，使大誤差產生更大的懲罰與梯度；",
      "交叉熵損失（Cross-Entropy Loss）：用於分類問題的機率分布差異衡量"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-003",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師在撰寫Transformer的Attention層時，需手動驗證矩陣維度是否相容。輸入矩陣Q已攤平成形狀為(1,10)，Query投影權重矩陣W形狀為(10,64)。執Q行Q x W後輸出的形狀為何？Q",
    "options": [
      "(1,64)；",
      "(10,10)；",
      "(64,1)；",
      "維度不相容，無法相乘"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-004",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某AI團隊同時開發多個影像辨識系統，並在訓練流程中統一加入資料擴增策略（包含隨機水平翻轉）以提升模型泛化能力。實驗後發現，部分任務的測試表現明顯下降。下列哪一項任務最可能因該資料擴增策略引入語意錯誤（SemanticInconsistency），使同一樣本在翻轉後對應不同類別標籤，進而影響模型學習？",
    "options": [
      "寵物監控中的貓狗分類；",
      "車輛辨識中的車型分類；",
      "手寫數字辨識；",
      "道路場景中的行人偵測"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-005",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師完成多元線性迴歸模型後，繪製殘差圖（Residual Plot），發現殘差隨預測值增大而呈現擴散現象（右側明顯比左側分散）。此現象最可能代表什麼問題？",
    "options": [
      "殘差之間存在關聯；",
      "特徵之間高度相關；",
      "殘差變異數不一致；",
      "殘差不符合常態分布"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-006",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某資料科學家欲對512維詞嵌入向量（共10萬筆）進行視覺化以探索群集結構，同時另一工程師需將200個製程特徵降維後作為XGBoost的輸入特徵。關於t-SNE與PCA選型，下列敘述何者最正確？",
    "options": [
      "t-SNE保留全局線性結構，適合作為XGBoost的降維前處理；",
      "t-SNE保留局部鄰域結構，適合視覺化；但不保留全局結構，不適合作為模型輸入特徵；",
      "PCA為非線性降維方法，能保留複雜流形結構；",
      "t-SNE與PCA皆可直接對新資料進行線性外推"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-007",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某金融團隊建立信貸風險模型，特徵工程後共產生200個變數，其中「月收入」、「年收入」、「季收入」三者高度相關。模型上線後業務單位反映：每次重新訓練後，模型輸出的重要特徵清單在這些高度相關特徵間反覆變動，難以向審查單位解釋。請問下列何者為造成此現象最可能的原因？",
    "options": [
      "模型使用L2正則化，導致所有特徵係數被壓縮至接近零，重要性難以區分；",
      "模型使用L1正則化，面對高度相關特徵時隨機保留其中之一，導致每次訓練保留的特徵不穩定；",
      "模型未使用任何正則化，過擬合導致係數每次收斂至不同極值；",
      "特徵數量過多導致梯度消失，應優先進行PCA降維再套用正則化"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-008",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某深度學習工程師訓練ResNet時，發現模型在前幾個Epoch驗證損失快速下降，但從第15個Epoch起驗證損失開始上升，而訓練損失持續下降。工程師將學習率調高後，訓練損失反而開始明顯震盪。學習率過大最直接導致下列哪種現象？",
    "options": [
      "梯度消失（Gradient Vanishing）：梯度在反向傳播中逐層縮小趨近於零，底層無法學習；",
      "損失函數震盪或發散（Oscillation/Divergence）：每次更新步伐過大，參數在最優點兩側反覆跳越，無法穩定收斂；",
      "過擬合（Overfitting）：模型記憶訓練資料的雜訊，泛化能力下降；",
      "死亡ReLU（Dying ReLU）：大量神經元輸出永久為零，停止參與梯度更新"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-009",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師訓練深度神經網路時發現損失函數震盪嚴重且收斂速度慢，改用Adam優化器後訓練變得穩定且收斂更快。下列何者為Adam能改善此問題的主要原因？",
    "options": [
      "同時結合一階動量（Momentum）與自適應學習率（Adaptive Learning Rate），為每個參數調整更新步長；",
      "強制所有參數使用相同學習率（Learning Rate），避免梯度差異造成不穩定；",
      "透過批次正規化（Batch Normalization）重新分布輸入資料；",
      "將梯度裁剪為固定範圍以避免梯度爆炸（Gradient Explosion）"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-010",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師同時開發兩個模型：一個預測使用者「隔日App使用時長（分鐘）」，另一個預測使用者「隔日是否流失（是/否）」。關於上述兩個任務，他應分別選擇哪種適當的損失函數？",
    "options": [
      "使用時長預測：均方誤差（MSE）；流失預測：二元交叉熵（Binary Cross-Entropy）；",
      "使用時長預測：交叉熵損失（Cross-Entropy）；流失預測：均方誤差（MSE）；",
      "使用時長預測：Hinge損失（Hinge Loss）；流失預測：MAE（平均絕對誤差）；",
      "兩個任務均使用交叉熵損失，因為兩者的輸出都有不確定性"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-011",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師在A100 GPU叢集上訓練大型語言模型，觀察到以下現象：全批次梯度下降時GPU利用率達100%，但每次更新耗時45秒；隨機梯度下降（SGD）每次更新僅需0.01秒，但梯度極不穩定、訓練曲線震盪劇烈。為兼顧梯度穩定性與GPU吞吐量（Throughput），應採用下列哪種策略？",
    "options": [
      "全批次梯度下降（Full-batch GD）：使用完整資料集計算梯度，更新穩定但每次更新耗時長；",
      "隨機梯度下降（SGD）：每次只用一個樣本，速度快但梯度雜訊大，收斂不穩定；",
      "第二階梯度法（Newton's Method）：利用Hessian矩陣精確估計曲率，大幅減少更新次數；",
      "小批次梯度下降（Mini-batch GD）：以適當批次大小（如256-2048）平衡梯度估計穩定性與GPU平行效率，是深度學習的業界標準"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-012",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某醫院導入肺癌篩檢模型，資料集中正常病例佔99%、肺癌陽性僅佔1%。模型上線後，系統報告整體準確率（Accuracy）為99.1%。醫師對此數字感到疑慮，認為不足以評估臨床價值，在漏診風險上可能存在重大問題。請問在此情境下，僅以Accuracy作為評估指標最嚴重的缺陷為何？",
    "options": [
      "Accuracy對類別不平衡不敏感，可能無法反映模型對肺癌陽性的偵測能力；",
      "Accuracy的計算不包含模型對邊界樣本的分類結果，容易遺漏困難樣本；",
      "Accuracy無法處理多分類問題，在二元分類下需改用AUC；",
      "Accuracy無法揭示模型的收斂速度，因此不適合用來選擇最終模型"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-013",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師訓練文本情感分類模型，訓練集F1=0.96、驗證集F1=0.71，落差明顯，顯示模型出現過擬合。下列哪一種策略能最直接從降低模型複雜度的角度緩解過擬合？",
    "options": [
      "增加訓練Epoch數至200，讓模型充分學習訓練資料的所有細節；",
      "引入更多原始文本特徵（包括原始URL、HTML標籤），增加特徵多樣性；",
      "對Embedding層與全連結層加入L2權重衰減（Weight Decay），懲罰參數值；",
      "移除驗證集並將其併入訓練集，以增加模型可見的訓練樣本數"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-014",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某電商平台使用樸素貝氏分類器（Naive Bayes Classifier）建立垃圾郵件過濾模型。訓練集準確率（Accuracy）達92%，但上線後發現，包含「限時優惠、立即下單享折扣」等關鍵字的正常促銷郵件，常被誤判為垃圾信。經分析發現，這些詞彙在訓練資料中多出現在垃圾郵件中，導致其類別條件機率偏高。請問造成此現象的最主要原因與較適當的改善方式為何？",
    "options": [
      "應禁用Naive Bayes，改用其他更先進演算法；",
      "模型過擬合於訓練資料，應增加Epoch數以提升泛化能力；",
      "類別條件機率受訓練資料分布影響，導致促銷關鍵字被視為垃圾信特徵，應重新平衡資料或調整先驗機率；",
      "模型未進行特徵標準化（Feature Scaling），導致分類邊界偏移，應先進行正規化處理"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-015",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某資料科學家將客戶資料進行分群，使用K-means（K=5）後發現部分群集呈現半月形（非凸）結構，且資料中存在少數離群值（Outliers）。他同時觀察到每次執行結果略有不同。下列敘述何者最完整且準確地反映K-means在此情境中的已知限制？",
    "options": [
      "K-means無法處理維度超過10的資料，在高維空間中距離計算失效；",
      "K-means假設群集為高斯分佈，無法處理任何非球形群集；",
      "K-means對K值敏感，但初始化不影響最終結果（演算法保證全局最優）；",
      "K-means需預先指定K；以歐氏距離為基礎，難以處理非凸群集；對初始化與離群值敏感"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-016",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某資料科學家在信用評分任務中使用XGBoost建立模型，發現模型在訓練集表現良好但驗證集出現過擬合跡象。他檢視其模型設計，發現XGBoost在目標函數（Objective Function）中引入額外的正則化機制以控制模型複雜度。相較於傳統梯度提升決策樹（GBDT），XGBoost在其核心目標函數中加入了下列哪一種關鍵設計，使其具備更強的防過擬合能力？",
    "options": [
      "加入樹的複雜度懲罰項（包含深度、葉節點數量與葉節點權重的L2正則化）；",
      "加入動態學習率（Dynamic Learning Rate）的強制衰減機制；",
      "加入卷積運算（Convolution）以萃取特徵間的空間關係；",
      "強制所有決策樹深度為1（Decision Stumps）"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-017",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某醫療新創團隊將原有3層CNN升級為16層架構以提升CT影像腫瘤偵測率，但發現訓練損失反而高於3層版本且收斂困難。工程師懷疑是網路深度造成的訓練問題，下列診斷與對策何者最正確？",
    "options": [
      "網路層數增加導致參數量過多，應減少每層卷積濾波器（Filters）數量以降低模型複雜度；",
      "深層網路可能出現梯度消失問題，導致淺層權重難以更新；應採用ResNet的殘差連接（Skip Connection）以改善梯度傳遞；",
      "16層模型對CT影像而言仍過淺，應進一步增加網路深度以學習更高階特徵；",
      "問題可能來自激活函數（Activation Function），將ReLU改為Sigmoid可改善梯度傳遞問題"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-018",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師設計用於醫療X光影像分類的CNN，發現卷積層後直接接全連結層導致參數量高達5,000萬，訓練速度極慢。為降低模型參數量與計算成本，他在卷積層後加入池化層（Pooling Layer）。下列何者為池化層在此設計中最主要解決的問題？",
    "options": [
      "降低特徵圖空間維度，減少參數與計算量；",
      "提供非線性表達能力，以提升模型學習複雜度；",
      "改善梯度消失問題，以強化反向傳播穩定性；",
      "提升模型泛化能力而不影響特徵維度"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-019",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某團隊開發合約文件審查系統，需比對合約首頁的定義條款與第20頁的責任條款是否一致。工程師初版採用雙向長短期記憶（Bidirectional LSTM），但發現長文件的跨段落語義關聯捕捉效果不佳，且訓練時間隨文件長度明顯增加。改用Transformer架構後問題獲得改善，下列何者為最主要的原因？",
    "options": [
      "Transformer參數量比LSTM少，因此訓練速度更快、不易過擬合；",
      "Transformer內建位置編碼，使模型天生理解文件的章節結構與段落順序；",
      "LSTM無法處理超過512個token的輸入，Transformer無此硬性限制；",
      "Transformer的Self-Attention可讓任意token直接建立關聯，不受距離限制，且運算可平行化"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-020",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "工程師在PyTorch中建構貓、狗、鳥三分類CNN，並使用交叉熵損失函數（CrossEntropyLoss）作為訓練目標。由於此損失函數在內部已包含Softmax計算，輸出層的設計需特別注意。請問輸出層的激活函數（Activation Function）與輸出維度應如何設定？",
    "options": [
      "使用ReLU作為激活函數，輸出維度設為1，直接輸出單一數值作為預測結果；",
      "使用Sigmoid作為激活函數，輸出維度設為3，使每個類別獨立輸出0到1的機率；",
      "不使用任何激活函數，直接輸出未經正規化的logits，輸出維度設為3對應三個類別；",
      "使用Softmax作為激活函數，輸出維度設為3，輸出為已正規化的機率分布"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-021",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師將一個大型預訓練模型部署至資源受限的行動裝置，發現模型體積過大且推論效率不足。為降低模型大小並提升推論速度，他將原本32-bit浮點數權重轉換為8-bit整數。在不重新訓練模型的前提下，請問此過程稱為何？",
    "options": [
      "知識蒸餾（Knowledge Distillation）；",
      "權重剪枝（Pruning）；",
      "張量分解（Tensor Decomposition）；",
      "模型量化（Quantization）"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-022",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師建置企業內部知識問答的RAG系統，上線後發現部分問題檢索結果與查詢語意不符。分析後確認問題出在向量搜尋的語意匹配不準確。於檢索階段，採取下列哪種方法最能直接改善此問題？",
    "options": [
      "將切片大小（Chunk Size）由512tokens縮小至128tokens，以提升檢索精細度；",
      "調整向量相似度閾值（Similarity Threshold），以過濾低相關檢索結果；",
      "採用混合搜尋（Hybrid Search）：結合語意向量搜尋與關鍵字搜尋（BM25），並以RRF（Reciprocal Rank Fusion）融合排序；",
      "將檢索結果隨機洗牌（Shuffle）後回傳給LLM，避免位置偏誤（Position Bias）"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-023",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某團隊開發法律文件生成系統，需根據合約前半段內容自動生成後半段條款。工程師分別使用BERT與GPT-2進行微調，但發現BERT的生成效果明顯較差，且即使增加訓練資料也無法改善。下列何者為最主要原因？",
    "options": [
      "BERT缺乏法律領域知識，因此生成能力較差；",
      "BERT的分詞方式影響語意理解，導致生成效果不佳；",
      "BERT模型規模較小，因此生成能力不足；",
      "BERT無法根據前文逐步生成後續文字，較不適合此類任務"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-024",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某推薦系統工程師處理商品類別特徵，該特徵包含約3,000個不同商品項目，每一種商品或其規格皆視為一個獨立類別。請問在高基數（High Cardinality）的情境下，下列哪一種編碼方式最容易造成維度爆炸問題？",
    "options": [
      "目標編碼（Target Encoding）；",
      "標籤編碼（Label Encoding）；",
      "Embedding層（Categorical Embedding）；",
      "One-Hot編碼（One-Hot Encoding）"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-025",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師建立房價預測模型，輸入特徵包含屋齡與距捷運站距離（公尺）。他發現距捷運站距離分布嚴重右偏，經對數（Log）轉換後模型表現明顯改善；但將同樣轉換套用於屋齡後，模型表現反而下降。下列何者為最可能的原因？",
    "options": [
      "屋齡與房價若呈線性關係，Log轉換反而破壞此結構；",
      "Log轉換會壓縮所有特徵的變異數，導致模型失去鑑別能力；",
      "Log轉換不適用於有單位的連續變數，應改用Box-Cox；",
      "兩特徵須套用相同轉換，否則尺度不一致導致梯度不穩定"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-026",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "在時間序列資料的特徵工程中，工程師常使用滑動窗口（Sliding Window）方法，將過去多個時間點的觀測值組合為模型輸入。下列何者為此方法的主要目的？",
    "options": [
      "資料增強；",
      "去除資料雜訊；",
      "降低特徵維度；",
      "建立滯後特徵"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-027",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師建立零售商品銷量預測模型，初期以第1至52週資料作為訓練集、第53週作為測試集（固定時間切分）。半年後重新評估，發現模型對最新資料（如第80週）的預測明顯衰退，推測為時間演進導致行為模式改變。若重新設計驗證策略，應採用下列哪種方法，使每次訓練皆基於最新時間區間資料？",
    "options": [
      "K-fold交叉驗證（K-fold Cross-Validation）；",
      "分層K-fold（Stratified K-fold）；",
      "滾動窗口驗證（Rolling Window Validation/Time Series Split）；",
      "留一驗證法（Leave-One-Out Cross-Validation）"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-028",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某房仲平台要預測物件成交價，資料集含50個特徵，其中部分特徵與房價呈非線性關係，且業務單位要求模型須能提供整體特徵重要性以供稽核。下列哪一種模型選擇策略最符合需求？",
    "options": [
      "使用羅吉斯迴歸（Logistic Regression），透過線性係數解釋特徵影響，但無法有效建模非線性關係；",
      "使用隨機森林迴歸（Random Forest Regression），可處理非線性關係，並提供整體特徵重要性（Feature Importance）作為解釋依據；",
      "用K-means分群（K-means Clustering）後分別建立迴歸模型，以提升預測準確度並間接提升可解釋性；",
      "使用支持向量迴歸（Support Vector Regression,SVR），透過核函數（KernelFunction）捕捉非線性關係，並以支持向量解釋模型決策"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-029",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工廠設備監測系統需偵測馬達軸承的異常振動，但過去僅記錄了大量正常運作的振動時序資料，缺乏任何已確認故障的標註樣本。請問下列何種任務範疇最符合此情境下的異常偵測需求？",
    "options": [
      "監督式二元分類（Supervised Binary Classification）；",
      "非監督或半監督異常偵測（Unsupervised/Semi-supervised Anomaly Detection）；",
      "強化學習（Reinforcement Learning）；",
      "自監督學習（Self-supervised Learning）"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-030",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某信用風險模型：訓練AUC=0.97、驗證AUC=0.72、少數違約樣本預測波動極大及不同K-fold切分結果差異明顯。下列何者為最可能的問題？",
    "options": [
      "高偏差；",
      "高變異；",
      "過擬合；",
      "資料漂移"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-031",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某倉儲自動化公司以強化學習（Reinforcement Learning,RL）訓練機器手臂進行揀貨，獎勵函數設計為「每成功抓取一個貨品得+1分」。部署後發現機器手臂學會反覆放開再抓取同一物品，以累積分數，但實際完成任務的效率極低。請問此現象的核心問題為何？應如何修正獎勵設計？",
    "options": [
      "獎勵塑形（Reward Shaping）：將獎勵改為「成功完成一次揀貨任務」而非單次抓取行為；",
      "策略退化（Policy Degradation）：降低學習率以穩定訓練；",
      "信用分配問題（Credit Assignment Problem）：引入優勢函數（AdvantageFunction）；",
      "災難性遺忘（Catastrophic Forgetting）：加入經驗回放（Replay Buffer）"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-032",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某詐欺偵測模型需同時具備高精確率（Precision），以避免誤凍結正常帳號，並維持高召回率（Recall）表現，以確保不放過任何詐欺行為。然而工程師發現兩者之間存在取捨關係（Precision-Recall Tradeoff）。在此情境下，F1-score最能反映何種特性？",
    "options": [
      "F1-score=(Precision+Recall)/2，為算術平均；",
      "F1-score為Precision的加權平均；",
      "F1-score僅適用於類別平衡資料；",
      "F1-score=2×(Precision×Recall)/(Precision+Recall)，為調和平均，對較小值敏感"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-033",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師的多元線性迴歸模型包含150個特徵，其中許多特徵高度相關（如「建坪」與「總面積」）。他同時希望控制過擬合且保留所有特徵的解釋能力，不讓任何特徵係數歸零，下列哪一項正則化方案最適當？",
    "options": [
      "Lasso迴歸（L1正則化）：透過絕對值懲罰使部分係數歸零，具有特徵選擇效果；",
      "Ridge迴歸（L2正則化）：透過平方懲罰縮小所有係數，在共線性下穩定估計且不歸零；",
      "Elastic Net（L1+L2）：結合稀疏性與穩定性，但部分係數仍可能被壓為0；",
      "無正則化的OLS迴歸：不控制過擬合，在共線性下係數估計不穩定"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-034",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某工程師使用XGBoost模型進行調參，需對以下超參數進行網格搜尋（GridSearch）：learning_rate（3個候選值）、max_depth（4個）、n_estimators（5個）、subsample（3個）、colsample_bytree（3個）。每組參數組合皆需完整進行5-Fold交叉驗證。請問總共需要訓練幾個模型？",
    "options": [
      "3+4+5+3+3=18個；",
      "5×5=25個；",
      "max(3,4,5,3,3)×5=25個；",
      "3×4×5×3×3×5=2,700個"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-035",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某團隊使用LoRA微調大型語言模型進行法律摘要任務，發現模型在複雜條款的摘要上常出現內容遺漏，但GPU顯存已接近上限。下列哪種調整方式最能在不明顯增加記憶體使用的前提下改善模型表現？",
    "options": [
      "提高LoRA rank以增強模型表達能力；",
      "改用完整微調（Full Fine-tuning）以學習更多細節；",
      "降低LoRA rank以釋放記憶體並增加Batch Size；",
      "降低LoRA rank但套用到更多層，保持trainable總參數不變"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-036",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某金融機構的AI信用評分模型需上傳至第三方雲端服務商進行推論。法務部門要求：在不解密資料的前提下，由單一雲端服務商直接對加密資料進行模型運算。下列哪種隱私保護技術最符合此需求？",
    "options": [
      "聯邦學習（Federated Learning）；",
      "同態加密（Homomorphic Encryption）；",
      "差分隱私（Differential Privacy）；",
      "安全多方計算（Secure Multi-Party Computation,MPC）"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-037",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某銀行導入AI貸款審核系統，監管要求每筆被拒絕的申請須提供可理解的拒絕原因。技術主管評估以下方案，哪一種最能實現個別預測的局部可解釋性（LocalExplainability）？",
    "options": [
      "SHAP（SHapley Additive exPlanations）值：計算每個特徵對單筆預測的貢獻；",
      "全域特徵重要性（Global Feature Importance）：說明整體特徵影響，無法解釋單一個案；",
      "Grad-CAM（Gradient-weighted Class Activation Mapping）：以熱力圖解釋影像模型；",
      "混淆矩陣（Confusion Matrix）：呈現整體分類表現"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-038",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某公司導入AI履歷篩選系統，用於自動決定是否進入面試。模型對男性應徵者的面試通過率為55%，對女性應徵者為30%。在其他條件不變的情況下，工程師需評估模型是否符合統計均等（Statistical Parity）的公平性定義。下列何者最正確？",
    "options": [
      "符合統計均等，因為模型未使用性別作為輸入特徵；",
      "符合統計均等，因為兩個族群皆有部分應徵者被錄取；",
      "不符合統計均等，因為不同群體的正向決策比例（通過率）存在明顯差異；",
      "不符合統計均等，因為女性族群的預測準確率較低"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-039",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "某銀行信貸模型上線後稽核發現，女性申請者中「實際具有還款能力卻被模型拒絕」的比例顯著高於男性，但法務限制不允許在推論階段使用性別欄位調整輸出。下列去偏策略何者在此限制下仍可執行？",
    "options": [
      "訓練中（In-processing）：在損失函數加入公平性懲罰項，降低不同群體的錯誤拒絕比例差異；",
      "前處理（Pre-processing）：僅於訓練資料進行重新採樣，無法直接修正既有模型在推論階段的偏誤；",
      "後處理（Post-processing）：依性別分組調整決策門檻，使不同群體的錯誤拒絕比例一致；",
      "改用人口統計均等指標（Demographic Parity），錯誤拒絕比例差異將自動消失答案"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-040",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "分析師準備建立一個能將手寫數字圖片（28x28像素展平為784維度）分為0~9共10個類別的多層感知機（MLP），且標籤已轉為One-Hot編碼（One-Hot Encoding）。為符合10個類別的單標籤分類需求，下圖中的程式碼中(A)與(B)的函數應填入何者？",
    "options": [
      "sigmoid，mean_squared_error；",
      "softmax，categorical_crossentropy；",
      "relu，binary_crossentropy；",
      "tanh，sparse_categorical_crossentropy"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-041",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "工程師使用PyTorch建立OCR訓練pipeline，並對手寫字母資料集套用下圖程式進行資料增強（Transform）。模型在訓練過程中顯示驗證損失（Validation Loss）持續下降，但實際部署後，系統在辨識「b/d/p/q」類字母錯誤率異常偏高。下列何者為最可能的根本原因？答案",
    "options": [
      "RandomRotation(15)角度過大導致特徵變形，應降至5度以內；",
      "RandomHorizontalFlip破壞字母方向語義，使模型以50%機率學到鏡像錯誤標籤；",
      "ColorJitter改變筆畫灰階，導致邊緣偵測特徵失真；",
      "ToTensor()應放在所有幾何變換之前才能保持座標對應正確下圖為使用ResNet進行遷移學習（Transfer Learning）的Python程式片段。請回答第42~43題。"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-042",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "觀察程式中行(A)將所有既有權重的梯度計算關閉，這在遷移學習中屬於哪一種標準策略？",
    "options": [
      "全面微調（Full Fine-Tuning）；",
      "零樣本學習（Zero-shot Learning）；",
      "特徵萃取（Feature Extraction）；",
      "知識蒸餾（Knowledge Distillation）"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-043",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "在進行遷移學習微調（Fine-Tuning）時，通常會將優化器的學習率（Learning Rate）設得非常小（如1e-4），下列何者為主要的原因？",
    "options": [
      "為了避免記憶體耗盡（OOM）；",
      "為了加速模型整體的收斂時間；",
      "為了讓損失函數強制歸零；",
      "為了避免更新步伐過大，破壞預訓練模型原本已學好的良好特徵表示答案請依據下方資訊回答第44~45題。Iris是UCI Dataset上的一組經典資料集，常被用來教學與測試分類模型。這份資料包含三種類型的鳶尾花（Iris setosa、Iris versicolor、Iris virginica），每個類別各有50筆資料。每筆資料包含四個特徵：花萼長度、花萼寬度、花瓣長度、花瓣寬度。研究人員希望透過機器學習模型，根據花朵的形態特徵，自動判斷該花屬於哪一種類型。在本次任務中，研究人員希望比較不同分類模型的表現。他們首先嘗試用線性判別分析（LDA）進行降維，接著使用K最近鄰（KNN）分類器來做分類預測，並使用交叉驗證（Cross Validation）評估模型的準確率。"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-044",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "研究人員撰寫的程式中（下圖），先用整體資料進行LDA（Linear DiscriminantAnalysis）降維，接著再用KNN（K-Nearest Neighbors）進行分類，並用交叉驗證來評估準確率。請問下列敘述何者正確？答案",
    "options": [
      "此寫法完全正確，因為先以整體資料進行LDA降維，再以交叉驗證測試KNN，是標準流程；",
      "此寫法存在資料洩漏（Data Leakage）問題，應將LDA納入交叉驗證流程中一併進行；",
      "雖然流程不夠嚴謹，但結果仍然能夠代表模型真實的泛化能力；",
      "如果只想驗證KNN的分類效果，可以直接跳過LDA步驟，以簡化流程"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-045",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "研究人員在程式（下圖）中使用cross_val_score進行交叉驗證，但目前尚未設定cv參數。他們希望確保在每次資料分割時，訓練集與測試集的類別比例與原始資料一致，以免影響模型的準確率估計。目前有以下幾段候選程式碼可供選擇。請問為了確保在交叉驗證時每個分割中的類別比例與原始資料一致，上面哪幾段程式碼插入在原始程式中[#填入程式碼]的部分比較合適？",
    "options": [
      "程式碼B、程式碼C、程式碼D；",
      "程式碼A、程式碼C；",
      "程式碼A、程式碼B、程式碼D；",
      "程式碼C、程式碼D答案請依據下方資訊回答第46~48題。使用CIFAR-10資料集以建立卷積神經網路（CNN），進行彩色影像之分類與辨識分析。CIFAR-10為一常用之影像分類基準資料集，內容包含10個類別，共計60000張彩色影像，其中訓練集含50000張影像，測試集則含10000張影像。每張影像解析度為32×32像素，並具有三個通道（channel），分別對應紅、綠、藍三原色。以下程式碼片段示範資料載入與處理流程。下圖顯示資料集的第1筆部分資料。"
    ],
    "answer": [
      0
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-046",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "參考下圖資料處理，下列哪一項描述組合正確？答案",
    "options": [
      "描述A、描述C、描述F；",
      "描述B、描述D、描述E、描述F；",
      "描述B、描述C、描述E、描述F；",
      "描述A、描述B、描述D、描述E、描述F"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-047",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "參考下圖建立模型結果，下列哪一項描述組合正確？",
    "options": [
      "描述A、描述C；",
      "描述C、描述E、描述F；",
      "描述A、描述D、描述E；",
      "描述D、描述E、描述F"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-048",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "參考下圖繪圖結果，當Epochs=6時，訓練曲線值(0.81)明顯大於驗證曲線值(0.72)，答案下列何者為最可能的原因？",
    "options": [
      "學習率（Learning Rate）太低；",
      "批次大小（Batch Size）設定太大；",
      "模型低度擬合（Underfitting）；",
      "模型過擬合（Overfitting）某人工智慧團隊正在開發一套自動光學檢測（Automated Optical Inspection,AOI）系統，目標是透過機械手臂上的相機，自動辨識晶圓表面是否存在「劃傷（Scratch）」或「污點（Spot）」等瑕疵。目前系統開發面臨以下挑戰：●資料極度不平衡，正常晶圓影像約佔99%，有瑕疵影像僅佔1%。●輸入影像品質不一致，包含不同解析度，且部分影像因機械手臂震動而出現模糊。●在使用深層卷積神經網路（CNN）訓練時，Loss曲線震盪劇烈，甚至偶爾出現數值溢出（NaN）情形。請根據上述情境，回答第49~50題。"
    ],
    "answer": [
      3
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-049",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "若團隊需要建立一個超過50層的深層神經網路，以捕捉晶圓表面細微的劃傷特徵，但又擔心傳統深層網路常見的梯度消失（Vanishing Gradient）問題，則下列哪一種經典架構最適合優先考慮？",
    "options": [
      "VGG（Visual Geometry Group）：透過重複堆疊3×3卷積層與池化層來維持梯度穩定；答案",
      "GoogLeNet：透過Inception模塊並行使用不同大小的卷積核，以避免深層網路的梯度問題；",
      "ResNet（Residual Network）：透過殘差連接（Residual Connection/SkipConnection），使梯度能跨層傳遞並降低深層訓練困難；",
      "Vision Transformer（ViT）：完全捨棄卷積，因此不會出現任何深層模型的訓練問題"
    ],
    "answer": [
      2
    ],
    "explanation": "",
    "tags": []
  },
  {
    "id": "115-1_中級_科目3-050",
    "source": "115-1 中級 科目3",
    "type": "single",
    "question": "為了修復訓練過程中Loss突然變成NaN的問題，工程師考慮在PyTorch訓練迴圈中加入梯度裁剪（Gradient Clipping）機制，例如torch.nn.utils.clip_grad_norm_。若要正確加入梯度裁剪，最適合插入於哪個位置？其主要作用為何？",
    "options": [
      "插入於位置3與位置4之間；用以限制Loss數值大小，避免梯度消失；",
      "插入於位置4與位置5之間；用以限制梯度範數過大，避免更新步幅失控導致數值不穩；",
      "插入於位置5之後；用以將更新後的權重強制壓縮回正常範圍；",
      "插入於位置1與位置2之間；用以對輸入影像進行批次標準化"
    ],
    "answer": [
      1
    ],
    "explanation": "",
    "tags": []
  }
]
);
