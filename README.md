# nest-key-value-pair

This is a nest-key-value-pair webpage.
User can do:

1. Type key and value on the left side
2. Use . symbol to deepen layers
3. Add new input row
4. Delete selected input row
5. Fold and unfold right side display information

## Environment

Node v14.18.1
Vue 3
Tailwind CSS
Pug template engine

## Move to project folder

```sh
cd nest-key-value-pair
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Problems and solutions

### 資料結構問題

一開始卡在把陣列轉換成巢狀結構，不太確定原始的資料結構要設計成怎樣後續會比較好轉換及維護。後來改成用陣列的方式輸入，再轉換成巢狀結構。

### components 遞迴問題

轉換巢狀結構之後，要如何在 component 裡面正確渲染？找了幾篇資料，要使用遞迴的方式來處理。一開始轉換渲染的時候，因為沒有找到正確的 v-if 終止條件以及正確的傳入資料，因此導致一直造成無窮迴圈。後來改用簡單的資料先做嘗試，才找到目前可以實作的方式。但是在新增一欄資料時，因為一開始是 null 所以畫面會噴錯誤。嘗試過用 if 判斷或是帶入 default 值目前似乎還是無解。

### 刪除資料畫面更新問題

在新增資料時以及修改資料時，左右邊畫面會同時變化，但是刪除時只有左邊會變化，右邊不會變化，目前還沒找到解決方法。

### 巢狀畫面顯示問題
當資料只有一層時可以正常顯示，但是如果是巢狀資料，顯示上會有問題，目前還沒找到解決方式。

### 當 key 為空值時，value 有資料不會顯示在畫面上
當新增一筆資料時，key 是空的時候，value 的資料不會顯示在畫面上。但是點擊切回 key 時，value 資料會消失。且如果 key / value 都有資料時，刪除 key 值 value 還是會顯示在畫面上，目前還沒找到解決方式。
