<template lang="pug">
div.border.border-slate-500
  div.flex.justify-end.p-3
    button.bg-slate-200.text-slate-800.p-2.font-bold(@click="addInput") ＋Add New Pair
  div
    Input(v-for="item in data.root" :key="item.id" :item="item")
</template>

<script setup>
import Input from './Input.vue'
import { ref } from 'vue'
import { treeData } from '../stores/store'

const data = treeData()
</script>
