<template>
  <div>
    <p>{{clickContent}}</p>
  </div>
</template>
<script>
export default {
  props:['clickContent']
}
</script>
<style scoped>
  div {border: 1px solid blue}
</style>
