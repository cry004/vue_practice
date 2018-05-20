<template>
  <div>
    <p v-if="!server">Please select a server !</p>
    <p v-else>{{this.server.status}}</p>
  </div>
</template>
<script>
import { eventBus } from '../../main';
export default {
  data: function(){
    return {
      server: null
    }
  },
  created(){
    eventBus.$on('clickDetailServer', (server) =>{
      this.server = server;
    });
  }
}
</script>
<style scoped>
  div {border: 1px solid blue}
</style>
