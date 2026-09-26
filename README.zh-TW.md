# Neo：精心打磨的介面，靈動自由的思維
- Neo 是專為思源筆記設計的第三方主題，以 Apple（macOS/iOS）設計語言為靈感，營造統一、精緻且賞心悅目的筆記空間
- Neo 主題大量參考了 [Asri 主題](https://github.com/mustakshif/Asri) 的設計和創意，非常感謝 [mustakshif](https://github.com/mustakshif)，沒有你超強的審美、技術力和令人驚嘆的創意，就不會有 Neo 的出現
## 更新日誌
完整更新紀錄可於 [CHANGELOG](https://github.com/QYLexpired/Neo/blob/main/CHANGELOG.md) 查看
- 支援心智圖（僅支援思源 3.8.6）
- 支援在自訂圖片設定中直接預覽並選擇資源檔案中的圖片（僅支援思源 3.8.6）
- 支援資料庫日曆檢視
- 支援資料庫列表檢視
- 優化 Windows 端的捲軸樣式
- 在心智圖節點中停用聚焦區塊指示和平滑游標
## 說明
- 主題的部分樣式和功能無法僅透過 CSS 實現，因此必須安裝並啟用主題的配套外掛：[Neo+](https://github.com/QYLexpired/Neo-Plus)
- Neo 主題和 Neo+ 外掛均不會對文件資料進行任何修改，可隨時啟用或停用，不存在遷移負擔
- 使用過程中有任何問題或建議，可透過 [Neo 主題介紹及回饋討論串](https://ld246.com/article/1783158376401) 或 [GitHub](https://github.com/QYLexpired/Neo/issues) 提出回饋
## 贊助我
Neo 主題完全免費，如果喜歡這個主題，歡迎在 [GitHub](https://github.com/QYLexpired/Neo) 幫我按顆星星，也可以[請我喝杯咖啡](https://icnmjy02sv9g.feishu.cn/wiki/FekNwrtB7ia1WckYelRckwzZnig?from=from_copylink)
## 特性
#### 始終如一的體驗
- 適配 macOS、Windows 與行動裝置，維持跨平台一致的視覺風格
#### 精緻考究的設計
- 採用 OKLCH 色彩空間建立色彩模型，讓配色更容易擴充，同時兼顧文字可讀性
- 引入超橢圓平滑圓角
- 全域使用毛玻璃效果，讓介面通透且富有層次感
- 引入溢出漸隱效果，讓捲動內容在邊緣自然淡出
- 彈性緩動讓介面切換與操作回饋更自然
#### 收放自如的配色
- 預設配色：內建數十套風格各異的方案
- 自由配色：可完全自訂介面的關鍵色值，並內建包含數百套經典配色的參考色庫
- 基色配色：透過選取基色、飽和度與亮度自訂介面顏色，支援基色跟隨題頭圖或跟隨系統強調色
- 額外引入新粗野主義風格配色
- 隨機配色：每次啟動思源，從主題的所有配色方案中隨機選擇
- 高對比：在淺色模式下，讓頂欄、停靠欄採用深色背景
- 反轉介面色：在深色模式下，讓側欄與正文區域的背景色反轉
#### 細膩多變的介面
- 超級融合：將頁籤欄、麵包屑、題頭圖和筆記正文無縫融合（源自 Asri 主題）
- IDE 風格：以線條劃分介面區域（源自 Asri 主題）
- 側欄靜音：凸顯編輯器區域，讓正文與側欄更具層次感
- 垂直頁籤：將頁籤欄垂直排列，方便查看與切換
- 內建多款紋理，也支援將自訂圖片設為紋理或背景
- 支援設定彩色文件樹
#### 自然流暢的互動
- 新增平滑游標與流體游標效果
- 支援聚焦區塊指示效果
- 為搜尋結果加入卡片式排列，提升閱讀效率
- 可將斜線選單展開為多欄，並可用鍵盤方向鍵導覽
#### 清晰舒適的排版
- 優化全域文字樣式，提升中英文內容的易讀性
- 可設定彩色標題與彩色列表，提升區分度
- 彩色選取：依文字顏色產生選取範圍的背景色
- 支援列表引導線，讓列表層級更加清晰
## 注意
主題的某些特性對思源原生樣式進行了大幅改造，因此存在無法修復的相容性問題，若影響使用請及時關閉；此外，部分特性對效能消耗較大，需謹慎開啟
- 超級融合
    - 文件動態載入的捲軸無法正確指示目前瀏覽位置
    - 導致資料庫表頭吸頂失效或位置錯誤
    - 可能與部分外掛存在衝突
    - 該特性加入了部分模糊、折射效果，可能導致卡頓
- 毛玻璃
    - 導致渲染壓力增加，若感知卡頓需關閉或調整至輕量等級
- 流體游標
    - 游標拖尾動畫會導致效能顯著降低，需謹慎開啟
- 彩色選取
    - 相關 CSS 選擇器效能較差，需謹慎開啟
## 寫在最後
- Neo 的效能：全域樣式改造比預設主題需要更多資源，雖然已盡力最佳化（包括 Neo+ 的 `performancetuning` 模組），流暢度仍取決於裝置、外掛和程式碼片段等多種因素。若以預設主題的流暢度為 1，Neo 可能為 0.9；疊加複雜外掛或低效程式碼片段後，還可能降至 0.9 × 0.9 = 0.81，因此卡頓未必只由主題造成
- Neo 的彩蛋：Neo 主題有許多隱藏的小細節，期待你的探索（比如試試在區塊選單-外觀處改變引述區塊的整體文字顏色，看看會發生什麼）
- 再次感謝 [Asri 主題](https://github.com/mustakshif/Asri) 和其作者 [mustakshif](https://github.com/mustakshif)
## 致謝
製作 Neo 主題時，從以下專案獲得大量靈感，感謝這些專案的製作者
- [Asri](https://github.com/mustakshif/Asri)
- [Cupertino](https://github.com/aaaaalexis/obsidian-cupertino)
- [Border](https://github.com/akifyss/obsidian-border)
- [Rem Craft](https://github.com/svchord/Rem-Craft)
- [Savor](https://github.com/royc01/notion-theme)
- [Baseline](https://github.com/aaaaalexis/obsidian-baseline)
- [AnuPpuccin](https://github.com/anubisnekhet/AnuPpuccin)
