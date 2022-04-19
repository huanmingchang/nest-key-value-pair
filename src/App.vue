<template lang="pug">
div.px-20.pb-20.pt-5.h-screen.bg-slate-900
  div.mb-2.text-2xl.text-slate-200.font-bold Nested Key-Value Pair Tree Viewer
  div.grid.grid-cols-2.gap-8.h-full
    InputSection
    DisplaySection
</template>

<script setup>
import InputSection from './components/InputSection.vue'
import DisplaySection from './components/DisplaySection.vue'
</script>
