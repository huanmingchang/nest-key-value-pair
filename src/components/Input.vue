<template lang="pug">
div.px-5.py-2.flex(v-for="item in dataInInput" :key="item")
  div.grid.grid-cols-2.gap-4.flex-grow.mr-3
    input.bg-transparent.outline-none.border.text-slate-200.border-slate-500.text-base.px-2.py-1.w-full(:data-id="dataInInput.indexOf(item)" :value="item[0]" placeholder="key" @input.prevent.stop="onKeyInputChange" @click="onInputClick")
    input.bg-transparent.outline-none.border.text-slate-200.border-slate-500.text-base.px-2.py-1.w-full(:data-id="dataInInput.indexOf(item)" :value="item[1]" placeholder="value" @input.prevent.stop="onValueInputChange" @click="onInputClick")
  button.w-10.text-sm.flex.justify-center.items-center.bg-slate-300.text-slate-800(:data-id="dataInInput.indexOf(item)" @click.prevent.stop="deleteInput") －
</template>

<script setup>
import { watch, inject } from 'vue'
const dataInInput = inject('rawData')
const { deleteInput, onKeyInputChange, onValueInputChange, onInputClick } =
  inject('input')
</script>
