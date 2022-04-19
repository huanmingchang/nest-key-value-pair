<template lang="pug">
div.text-lg
  div.flex.cursor-pointer(v-if="item.children" @click="isOpen = !isOpen")
    span.font-bold {{item.key}}
    span.ml-1 {{isOpen ? '[-]' : '[+]'}}
  div.text-lg(v-if="!item.children")
    div.inline
      span.font-bold {{item.key}}
    div.inline
      span.ml-1 :
      span.ml-3.text-rose-300 {{item.value}} 
  template(v-if="item.children")
    Display.pl-8(v-show="isOpen" v-for="item in item.children" :key="item.id" :item="item" )
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: Object,
})

const isOpen = ref(true)
</script>
