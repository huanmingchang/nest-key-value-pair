<template lang="pug">
div.px-20.pb-20.pt-5.h-screen.bg-slate-900
  div.mb-2.text-2xl.text-slate-200.font-bold Nested Key-Value Pair Tree Viewer
  div.grid.grid-cols-2.gap-8.h-full
    InputSection
    DisplaySection
</template>

<script setup>
import InputSection from './components/InputSection.vue'
import DisplaySection from './components/DisplaySection.vue'
import { provide, ref, reactive, readonly } from 'vue'

let rawData = reactive([
  { 'nav.header.creator': '3D Fabric Creator' },
  { 'nav.header.product': 'Product' },
  { 'nav.icon': 'icon name' },
  {
    'common.feature.experience': 'Try It Now!',
  },
  {
    'common.feature.chooseFabric': 'Choose Fabric',
  },
])

// 新增一欄資料
const addInput = () => {
  rawData.push({})
}

// 刪除一列資料
const deleteInput = () => {
  const target = event.target.previousSibling.firstChild.value
  // TODO 修改刪除邏輯
  rawData = rawData.filter((item) => target !== Object.keys(item)[0])
}

// 把 rawData 轉換成巢狀陣列
const deepen = (obj) => {
  const result = {}

  for (const objectPath in obj) {
    // Split path into component parts
    const parts = objectPath.split('.')

    // Create sub-objects along path as needed
    let target = result
    while (parts.length > 1) {
      const part = parts.shift()
      target = target[part] = target[part] || {}
    }

    // Set value at end of path
    target[parts[0]] = obj[objectPath]
  }

  return result
}

// const output = JSON.stringify(deepen(rawData))
//   .split(/{:}"]/)
//   .map((s) => s.trim())

// console.log(output)

provide('rawData', readonly(rawData))
provide('treeData', readonly(deepen(rawData)))
provide('addInput', addInput)
provide('deleteInput', deleteInput)
</script>
