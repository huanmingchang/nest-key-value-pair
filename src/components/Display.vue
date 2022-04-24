<template lang="pug">
div.text-lg
  div.flex.cursor-pointer(@click.stop.prevent="isOpen = !isOpen" )
    span.font-bold {{item}}
    span.ml-1 {{isOpen ? '[-]' : '[+]'}}
  div.text-lg
    div.inline
      span.font-bold 
    div.inline
      span.ml-1 :
      span.ml-3.text-rose-300 
  //- template(v-if="!Object.values(props.data).length > 1")
  //-   Display.pl-8(v-show="isOpen" v-for="item in Object.keys(props.data)" :key="item" :item="item" :data="props")
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  item: String,
  data: Object,
})
console.log(props.data)

// console.log('Object keys: ', Object.keys(props.data[0]))
// console.log('Object values: ', Object.values(props.data[0]))

const isOpen = ref(true)
</script>
