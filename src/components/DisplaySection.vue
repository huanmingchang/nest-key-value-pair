<template lang="pug">
div.text-slate-200.p-6.border.border-slate-500
  Display(v-for="item in Object.keys(dataInDisplay.root)" :key="item" :item="item" :data="dataInDisplay.root")
</template>

<script setup>
import Display from './Display.vue'
import { inject } from 'vue'
const dataInDisplay = inject('treeData')
</script>
