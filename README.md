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

1. 在設計 rawData 時，試過好幾種方法，有幾種資料結構可以達到部分產品需求，但是目前為止還沒完全能夠新增、刪除和渲染的資料節構
2. 一開始是設計 Pinia + uuid，在資料一開始就設計成巢狀，右邊的畫面可以正常下渲染，但是左邊的部分無法順利完成
3. 後來改用 provide / inject 的方法，變成左邊可以正常完成，但是右邊的顯示尚未解決
4. 新增、刪除和資料監聽的部分尚未完成
