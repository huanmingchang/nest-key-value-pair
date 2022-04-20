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
import { v4 as uuidv4 } from 'uuid'

const treeData = reactive({
  root: [
    {
      id: uuidv4(),
      key: 'nav',
      children: [
        {
          id: uuidv4(),
          key: 'header',
          children: [
            {
              id: uuidv4(),
              key: 'creator',
              value: '3D Fabric Creator',
            },
            {
              id: uuidv4(),
              key: 'product',
              value: 'Product',
            },
          ],
        },
        {
          id: uuidv4(),
          key: 'icon',
          value: 'icon name',
        },
      ],
    },
    {
      id: uuidv4(),
      key: 'common',
      children: [
        {
          id: uuidv4(),
          key: 'feature',
          children: [
            {
              id: uuidv4(),
              key: 'experience',
              value: 'Try It Now!',
            },
            {
              id: uuidv4(),
              key: 'chooseFabric',
              value: 'Choose Fabric',
            },
          ],
        },
      ],
    },
  ],
})

provide('treeData', readonly(treeData.root))
</script>
