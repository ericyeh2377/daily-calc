# 好算試算所

純靜態 HTML、CSS、JavaScript，不需建置工具或外部套件。直接開啟 index.html 即可使用。

## 資料夾結構

- index.html：首頁與生活試算工具列表
- invest/：拾步 Stepwise 獨立投資入門區。更新時使用原始專案的 dist，保留返回生活試算的連結與 canonical。
- about.html、privacy.html、disclaimer.html：共用頁面
- tools/overtime/index.html：加班費試算、官方來源、FAQPage JSON-LD
- tools/overtime/logic.js：瀏覽器與 Node 共用計算邏輯
- tools/overtime/overtime.js：表單互動
- assets/css/site.css：手機優先樣式
- assets/js/site.js：頁尾年份
- assets/js/site-config.js：SITE_URL 佔位設定
- test/overtime.test.cjs：node:test 測試
- tools/new-youth-mortgage/：新青安資格、房貸月付與購屋現金試算（UMD logic.js）
- tools/income-tax-2027/：114／115 年度綜所稅、股利課稅與基本生活費試算
- tools/salary-offer/：2026 勞健保、勞退自提及 Offer A/B 比較
- test/：各計算工具的 node:test 單元測試
- sitemap.xml、robots.txt：搜尋引擎檔案

## 本機預覽

直接以瀏覽器開啟 index.html。或在本資料夾開 PowerShell 執行：

```powershell
python -m http.server 8000
```

然後開 http://localhost:8000，使用 Ctrl+C 停止伺服器。

## 測試

```powershell
C:\Users\ericy\OpenBot\Shared\tools\node-v26.13.1-win-x64\node-v26.13.1-win-x64\node.exe --test
```

JavaScript 語法檢查可使用：`Get-ChildItem -Recurse -Filter *.js | ForEach-Object { & 'C:\Users\ericy\OpenBot\Shared\tools\node-v26.13.1-win-x64\node-v26.13.1-win-x64\node.exe' --check $_.FullName }`。

## 新增工具頁

1. 複製 tools/overtime/ 資料夾，更新新頁的 title、description、canonical、Open Graph 與 FAQ JSON-LD。
2. 將計算函式放獨立 logic.js，採 UMD 匯出，讓瀏覽器全域變數和 CommonJS require 共用；互動程式另放一個 JS。
3. 表單需有 label、鍵盤焦點、輸入驗證、aria-live 結果區和官方來源。
4. 在首頁加工具卡，在 sitemap.xml 加網址；以 node:test 覆蓋公式、邊界與無效輸入。

## 公開網站及授權

網站 https://ericyeh2377.github.io/daily-calc/ 提供線上試算與 Excel 下載。生活試算原始碼及 downloads/ 下三份 Excel 試算表皆採用 MIT 授權，詳見 [LICENSE](LICENSE)。投資區的政府資料與第三方元件依各自授權，詳見 [投資區授權](invest/vendor/LICENSES.txt) 及投資區內的資料來源。

## 加班費示範範圍

月薪制時薪以月薪總額 ÷ 30 ÷ 8 估算。平日最多試算 4 小時；休息日最多 12 小時，依勞基法第 24 條最低加給倍率分段。未涵蓋例假、國定假日、特殊工時、契約較優條件及工資個案認定。正式使用前請再次核對勞動部最新規定。
