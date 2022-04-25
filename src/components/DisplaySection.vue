<template lang="pug">
div.text-slate-200.p-6.border.border-slate-500
  Display(v-for="item in Object.getOwnPropertyNames(dataInDisplay.root)" :key="item" :item="item" :data="dataInDisplay.root")
</template>

<script setup>
import Display from './Display.vue'
import { watch, inject } from 'vue'
const dataInDisplay = inject('treeData')
</script>
