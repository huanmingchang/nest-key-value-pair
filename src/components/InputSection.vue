<template lang="pug">
div.border.border-slate-500
  div.flex.justify-end.p-3
    button.bg-slate-200.text-slate-800.p-2.font-bold(@click.stop.prevent="addInput") ＋Add New Pair
  div
    Input
</template>

<script setup>
import Input from './Input.vue'
import { ref, inject } from 'vue'
const addInput = inject('addInput')
</script>
