# 山葵組線上測試

## 以scss撰寫內容樣式 (1)
```
由 assets/all.scss 統一管理顏色以及字體大小，讓 css 的維護性提升。
```

## 選擇輸入樣式 (2 ~ 5)
```
透過選單 select 的 :v-model 切換 prop 到子元件 MyType ，由 v-if 的方式顯示出選擇的輸入樣式。
```

## 可切換頁面 (6)
```
透過 router ，點擊 App.vue 的 router-link 即可切換。
```

## 設定title 、 description 、 背景顏色(7、8)
```
透過 routes 紀錄每個頁面的 title、description、background 在切換頁面時將資料寫入到 meta 裡，切換頁面時就會更改頁面的 title、description、背景顏色。
```

## 設定Global參數、讓頁面主題會隨著更換 (8)
```
在 main.js 設定全域變數 title 並 computed 在主頁 App.vue 裡，切換頁面時，在 created 階段改動全域變數  title，頁面主題就會替換成該分頁的主題。
```
## 串接列表資料 (9)
```
透過 axios 串接 fake API 並用 v-for 的方式顯示出來。
```




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
