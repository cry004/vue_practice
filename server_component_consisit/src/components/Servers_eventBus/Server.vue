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
import {eventBus} from '../../main';
export default {
  props: ['server'],
  methods: {
    serverSelected() {
      eventBus.$emit('clickDetailServer', this.server);
    }
  }
}
</script>
