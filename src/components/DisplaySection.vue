<template lang="pug">
div.text-slate-200.p-6.border.border-slate-500
  Display(v-for="item in data.root" :key="item.id" :item="item")
</template>

<script setup>
import Display from './Display.vue'
import { treeData } from '../stores/store'

const data = treeData()
</script>
