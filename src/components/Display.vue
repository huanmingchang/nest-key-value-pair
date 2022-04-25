<template lang="pug">
div.text-lg
  div.flex.cursor-pointer(@click.stop.prevent="isOpen = !isOpen" v-if="typeof props.data[props.item] === 'object'")
    span.font-bold {{item}}
    span.ml-1 {{isOpen ? '[-]' : '[+]'}}
  div.text-lg(v-else)
    div.inline
      span.font-bold {{item}}
    div.inline
      span.ml-1 :
      span.ml-3.text-rose-300 {{props.data[props.item]}} 
  template(v-if="!Object.getOwnPropertyNames(props.data[props.item]).includes('length')")
      Display.pl-8(v-show="isOpen" v-for="item in Object.getOwnPropertyNames(props.data[props.item])" :key="item" :item="item" :data="props.data[props.item]")

</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  item: {
    type: String,
    default: '',
  },
  data: {
    type: Object,
    default: {},
  },
})
const isOpen = ref(true)
</script>
