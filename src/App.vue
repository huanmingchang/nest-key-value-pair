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
import { provide, watch, computed, reactive, readonly } from 'vue'
import _ from 'lodash'

let treeObj = reactive({ root: {} })
let rawData = reactive([
  ['nav.header.creator', '3D Fabric Creator'],
  ['nav.header.product', 'Product'],
  ['nav.icon', 'icon name'],
  ['common.feature.experience', 'Try It Now!'],
  ['common.feature.chooseFabric', 'Choose Fabric'],
])

// 轉換原始資料成巢狀 object
const covertDataToTreeObject = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    _.set(treeObj.root, arr[i][0], arr[i][1])
  }

  return treeObj
}

covertDataToTreeObject(rawData)

// 監聽 rawData，如果資料有變動重新轉成巢狀 object
watch(
  rawData,
  () => {
    covertDataToTreeObject(rawData)
  },
  {
    immediate: true,
  },
  { deep: true }
)

// 新增一列資料
const addInput = () => {
  rawData.push([])
}

// 刪除一列資料
const deleteInput = () => {
  const target = event.target.previousSibling.firstChild.value
  let id = event.target.dataset.id
  rawData.splice(id, 1)
  // rawData = rawData.filter((item) => rawData.indexOf(item) !== Number(id))
  // console.log(rawData)
}

// 監聽輸入資料
const onKeyInputChange = () => {
  let value = event.target.value
  let id = event.target.dataset.id
  rawData[Number(id)][0] = value
}

const onValueInputChange = () => {
  let value = event.target.value
  let id = event.target.dataset.id

  if (rawData[Number(id)][0] !== undefined) {
    rawData[Number(id)][1] = value
  }
}

// 點擊時取得資料
const onInputClick = () => {
  let currentValue = event.target.value
  console.log(currentValue)
}

provide('rawData', readonly(rawData))
provide(
  'treeData',
  computed(() => treeObj)
)
provide('input', {
  addInput,
  deleteInput,
  onKeyInputChange,
  onValueInputChange,
  onInputClick,
})
</script>
