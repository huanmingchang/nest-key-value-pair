<template lang="pug">
div.px-5.py-2.flex(v-for="item in dataInInput" :key="item")
  div.grid.grid-cols-2.gap-4.flex-grow.mr-3
    input.bg-transparent.outline-none.border.text-slate-200.border-slate-500.text-base.px-2.py-1.w-full(:value="item[0]" )
    input.bg-transparent.outline-none.border.text-slate-200.border-slate-500.text-base.px-2.py-1.w-full(:value="item[1]")
  button.w-10.text-sm.flex.justify-center.items-center.bg-slate-300.text-slate-800(@click.prevent.stop="deleteInput") －
</template>

<script setup>
import { ref, inject } from 'vue'
const dataInInput = inject('rawData')
const deleteInput = inject('deleteInput')
</script>
