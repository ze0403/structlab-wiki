# AGENTS.md — StructLab 結構力學與數值計算筆記庫開發規範

## 1. 專案目的
本專案為「StructLab 結構力學與數值計算筆記庫」，旨在將結構動力學實驗與工程數值方法整理為可持續擴充的靜態網頁知識庫。AI 協作開發時，必須嚴格遵守本文件之視覺風格、符號規範與檔案結構。

## 2. 技術棧與部署規範
- **前端架構**：純靜態 HTML5、CSS3、原生 JavaScript（ES6+），**禁止使用 React、Vue 或任何需要編譯（build）的框架**，確保可直接於 GitHub Pages 運行。
- **數學公式**：統一透過 CDN 載入 **KaTeX**（支援 `$inline$` 與 `$$display$$`）。
- **程式區塊**：統一透過 CDN 載入 **Prism.js**（支援 Python 與 MATLAB 語法高亮）。

## 3. 視覺風格（Engineering Blueprint Theme）
所有頁面統一引用 `assets/style.css`（位於 `notes/` 內的頁面使用 `../assets/style.css`）：
- **背景主色**：`#0f172a`（深藍灰工程藍圖底色）
- **卡片底色**：`#1e293b`，邊框色 `#334155`
- **強調主色**：`#38bdf8`（亮青色標題與按鈕）、警示色 `#fbbf24`（琥珀黃提醒框）
- **文字色彩**：主文字 `#f1f5f9`，次要說明文字 `#94a3b8`
- **字體規範**：內文使用無襯線字體，程式碼與矩陣代號使用等寬字體（`monospace`）。

## 4. 工程符號強制規範
撰寫任何數學推導與說明時，必須統一符號：
1. 系統勁度矩陣統一寫作 $K_S$（不使用 $K_G$）。
2. 未知位移向量寫作 $U_u$，已知邊界位移向量寫作 $U_k$。
3. 物理量一律採用 SI 國際單位制（$\text{m}, \text{kg}, \text{s}, \text{Hz}$）。

## 5. 檔案命名與目錄結構
專案目錄結構固定如下：
- `AGENTS.md`：本開發規範文件
- `index.html`：網站首頁（讀取 `assets/notes-registry.js` 自動生成筆記卡片與分類篩選按鈕）
- `assets/style.css`：全站統一樣式表
- `assets/notes-registry.js`：定義全域陣列 `const NOTES_DATA = [ ... ]` 儲存所有筆記的索引資料
- `notes/`：存放所有單篇筆記 HTML，檔名格式為 `兩位數編號-英文小寫主題.html`（如 `01-cantilever-vibration.html`）

## 6. 單篇筆記頁面固定結構
每篇位於 `notes/` 的頁面，`<main>` 內必須包含以下 5 個區塊與導覽列：
1. **頁首區**：分類標籤、文章標題、更新日期、核心摘要。
2. **一、物理問題與控制方程式**：力學背景與 KaTeX 公式。
3. **二、符號定義表**：HTML `<table>` 列出變數符號（遵守第 4 節規範）與物理意義。
4. **三、數值求解步驟**：有序清單 `<ol>` 條列演算法流程。
5. **四、MATLAB / Python 實作**：程式碼區塊（附「複製程式碼」按鈕）。
6. **五、常見數值陷阱與除錯筆記**：黃色警示框（`.callout-warning`）提醒收斂或邊界條件問題。
7. **頁尾導覽**：提供「返回首頁（`../index.html`）」按鈕。

## 7. 新增內容標準作業流程（SOP）
當使用者要求「新增一篇關於 [某主題] 的筆記」時，AI 必須依序完成：
1. 檢查 `assets/notes-registry.js` 目前最大編號並自動遞增（例如 `01` → `02`）。
2. 在 `notes/` 下建立符合第 5、6 節規範的 HTML 檔案，確認相對路徑 `../assets/style.css` 正確。
3. 在 `assets/notes-registry.js` 的 `NOTES_DATA` 陣列新增該篇筆記的物件（包含 `id`、`title`、`category`、`date`、`summary`、`url`），讓首頁卡片自動更新。
