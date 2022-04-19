<template lang="pug">
div.px-5.py-2.flex
  div.grid.grid-cols-2.gap-4.flex-grow.mr-3
    input.bg-transparent.outline-none.border.text-slate-200.border-slate-500.text-base.px-2.py-1.w-full(:value="item.value ? '.' + item.key : item.key + '.'")
    input.bg-transparent.outline-none.border.text-slate-200.border-slate-500.text-base.px-2.py-1.w-full(:value="item.value")
  button.w-10.text-sm.flex.justify-center.items-center.bg-slate-300.text-slate-800 －
template(v-if="item.children")
  Input(v-for="item in item.children" :key="item.id" :item="item")
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>
