<template lang="pug">
div.text-slate-200.p-6.border.border-slate-500
  Display(v-for="item in dataInDisplay" :key="item.id" :item="item")
</template>

<script setup>
import Display from './Display.vue'
// import { treeData } from '../stores/store'
import { inject, computed, reactive } from 'vue'
const dataInDisplay = inject('treeData')
</script>
