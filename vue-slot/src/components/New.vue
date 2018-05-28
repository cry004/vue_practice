<template>
<div>
  <h3>New Quote</h3>
  <slot></slot>
  <button @click="counter++"> increase! </button>
  <p>{{ counter }}</p>
</div>
</template>
<script>
  export default {
  data: function(){
    return {
      counter: 0
    }
  },
   destroyed(){
    console.log('destrory')
   },
   deactivated(){
    console.log('deactivated')
   },
   activated(){
    console.log('activated')
   }
  }
</script>
<style>
</style>
