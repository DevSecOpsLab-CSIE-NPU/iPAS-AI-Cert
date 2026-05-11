# 部署指南 — iPAS AI 答題練習網站

## 架構

```
使用者瀏覽器
    │
    │  (GitHub Pages 靜態頁面)
    ├─► index.html + js/app.js + js/data/*.js
    │       │ localStorage（本地進度與錯題本）
    │       │ fetch() POST（非阻塞，斷網不影響）
    │       ▼
    │  Google Apps Script Web App
    │       │ doPost() 寫入
    │       ▼
    └─► Google Spreadsheet（集中回收作答資料）
```

---

## Step 1：本地測試

題庫資料用 `<script>` 標籤載入（避免 `file://` 的 CORS 限制），請用簡易 HTTP server：

```bash
cd web/
python3 -m http.server 8000
# 開 http://localhost:8000
```

> 若直接雙擊 `index.html` 開啟，動態載入題庫的 `script.src` 可能失敗。固定用 HTTP server 測試。

---

## Step 2：建立 Google Sheet + Apps Script

1. 開 [Google Sheets](https://sheets.google.com) 新增一個試算表
2. 從 URL 抓 Spreadsheet ID：
   ```
   https://docs.google.com/spreadsheets/d/【這段就是 ID】/edit
   ```
3. **Extensions → Apps Script**，把 `google_apps_script/Code.gs` 內容貼進去
4. 改第 17 行 `SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE"` 為你的 ID
5. **Deploy → New deployment**
   - Type: **Web App**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. 複製產生的 Web App URL（格式：`https://script.google.com/macros/s/.../exec`）

---

## Step 3：設定前端

打開 `web/js/app.js`，把第 7 行改成 Step 2 的 URL：

```javascript
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
```

---

## Step 4：部署到 GitHub Pages

在 GitHub repo Settings → Pages：
- **Source**: Deploy from a branch
- **Branch**: `main` / 資料夾選 `/web` 或 `/(root)`

若選 `/(root)`，須把 `web/` 內容移到 repo 根目錄，或建立軟連結。
推薦做法：用 GitHub Actions 把 `web/` 內容部署到 `gh-pages` 分支。

部署完成後 URL：
```
https://devsecopslab-csie-npu.github.io/iPAS-AI-Cert/
```

---

## Step 5：發給使用者

可用 URL 參數預填暱稱：

```
https://.../iPAS-AI-Cert/?user=alice
https://.../iPAS-AI-Cert/?user=bob
```

---

## 題庫格式

每個 pack 一個 JS 檔，格式：

```js
window.QUIZ_DATA["L1_S1"] = [
  {
    id: "L1S1-001",
    source: "114年第四次",          // 來源
    type: "single",                  // single | multiple | true_false
    question: "題目文字",
    options: ["A", "B", "C", "D"],
    answer: [1],                      // 正解 index（陣列；複選可多個）
    explanation: "解析文字",
    tags: ["標籤"],
  },
  // ...
];
```

新增題庫：
1. 在 `web/js/data/` 加新檔案
2. 在 `web/js/data/manifest.js` 註冊

---

## 資料流

| 儲存位置 | 時機 | 用途 |
|---------|------|------|
| `localStorage` | 每次完成立刻寫入 | 進度、錯題本、歷史正確率 |
| Google Spreadsheet | 每次完成後非同步推送 | 多人作答資料集中分析 |

斷網時 localStorage 仍保留；不會中斷流程。

---

## 查看作答資料

直接看 Google Sheet 的 `responses` 分頁。或用 GET 查詢：

```
https://script.google.com/macros/s/.../exec?user=alice
```

回傳 JSON。
