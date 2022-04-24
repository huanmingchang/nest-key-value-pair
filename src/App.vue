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

// 新增一列資料
const addInput = () => {
  rawData.push([])
}

// 刪除一列資料
const deleteInput = () => {
  const target = event.target.previousSibling.firstChild.value
  for (let i = 0; i < rawData.length; i++) {
    if (target === rawData[i][0]) {
      rawData.splice(rawData[i], 1)
    }
  }

  // rawData = rawData.filter((item) => target !== item[0])
}

provide('rawData', readonly(rawData))
provide('treeData', readonly(covertDataToTreeObject(rawData)))
provide('addInput', addInput)
provide('deleteInput', deleteInput)
</script>
