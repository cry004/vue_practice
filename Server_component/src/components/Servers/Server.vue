<template>
  <li
      class="list-group-item"
      style="cursor: pointer"
      @click="serverSelected"
      >
      Server #{{ server.id }}
  </li>
</template>
<script>
export default {
  props: {
    server: Object,
  },
  methods: {
    serverSelected() {
      this.$emit('clickDetailServer', this.server)
    }
  }
}
</script>
