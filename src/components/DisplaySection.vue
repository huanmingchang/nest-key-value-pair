<template lang="pug">
div.text-slate-200.p-6.border.border-slate-500
  Display(v-for="item in dataInDisplay" :key="item" :item="item")
</template>

<script setup>
import Display from './Display.vue'
import { inject } from 'vue'
const dataInDisplay = inject('treeData')
</script>
