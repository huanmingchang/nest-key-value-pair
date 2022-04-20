<template lang="pug">
div.text-lg
  div.flex.cursor-pointer(@click.stop.prevent="isOpen = !isOpen")
    span.font-bold {{Object.keys(item)}}
    span.ml-1 {{isOpen ? '[-]' : '[+]'}}
  div.text-lg
    div.inline
      span.font-bold {{Object.keys(item)}}
    div.inline
      span.ml-1 :
      span.ml-3.text-rose-300 {{Object.values(item)}}
  //- template(v-if="!Object.values(item)")
  //-   Display.pl-8(v-show="isOpen" v-for="item in item" :key="item" :item="item")
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  item: Object,
})

const isOpen = ref(true)
</script>
