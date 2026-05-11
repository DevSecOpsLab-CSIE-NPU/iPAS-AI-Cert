/**
 * iPAS Quiz — Google Apps Script
 * 將前端 POST 過來的作答結果寫入 Google Sheet。
 *
 * 部署步驟：
 *  1. 建立 Google Sheet，記下 Spreadsheet ID（URL 中 /d/ 與 /edit 之間的字串）
 *  2. Extensions → Apps Script，貼上本檔內容
 *  3. 將下方 SPREADSHEET_ID 換成你的 ID
 *  4. Deploy → New deployment → Web App
 *     - Execute as: Me
 *     - Who has access: Anyone
 *  5. 複製產生的 Web App URL，貼回 docs/js/app.js 的 APPS_SCRIPT_URL
 */

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
const SHEET_NAME = "responses";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["timestamp", "user", "packId", "mode", "total", "correct", "durationSec", "detail_json"]);
    }
    sheet.appendRow([
      data.ts || new Date().toISOString(),
      data.user || "",
      data.packId || "",
      data.mode || "",
      data.total || 0,
      data.correct || 0,
      data.durationSec || 0,
      JSON.stringify(data.detail || []),
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // 簡易進度查詢：?user=XXX
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) return ContentService.createTextOutput(JSON.stringify({ count: 0, rows: [] }))
    .setMimeType(ContentService.MimeType.JSON);
  const rows = sheet.getDataRange().getValues();
  const user = e.parameter.user;
  const filtered = user ? rows.slice(1).filter(r => r[1] === user) : rows.slice(1);
  return ContentService.createTextOutput(JSON.stringify({
    user: user || "ALL",
    count: filtered.length,
    rows: filtered.map(r => ({
      timestamp: r[0], user: r[1], packId: r[2], mode: r[3],
      total: r[4], correct: r[5], durationSec: r[6],
    })),
  })).setMimeType(ContentService.MimeType.JSON);
}
