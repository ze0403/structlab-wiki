/**
 * StructLab 筆記庫索引註冊表 (依據 AGENTS.md 第 5 節與第 7 節規範)
 * 新增筆記時，請依序遞增 id 並將 metadata 物件加入 NOTES_DATA 陣列。
 */
const NOTES_DATA = [
  {
    id: "01",
    title: "垂直懸臂梁自由振動實驗與模態分析",
    category: "結構動力學實驗",
    date: "2026-11-15",
    summary: "結合 Tracker 影像追蹤與自由衰減振動理論，識別懸臂梁自然頻率與阻尼比，並透過系統勁度矩陣進行特徵值模態驗證。",
    url: "notes/01-cantilever-vibration.html"
  },
  {
    id: "02",
    title: "無網格邊界積分法（BIQM）與 Motz 奇異點問題",
    category: "無網格與邊界元素法",
    date: "2026-11-15",
    summary: "針對二維穩態熱傳導與拉普拉斯方程式之 Motz 邊界奇異點問題，採用無網格邊界積分法（BIQM）結合奇異點分離技術，避開退化尺度並精確求解邊界通量。",
    url: "notes/02-biqm-motz-singularity.html"
  }
];
