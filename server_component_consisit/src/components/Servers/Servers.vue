<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <server
              v-for="server in servers" :server="server" @clickDetailServer="clickServer = $event"></server>
          </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
          <servers_detail v-if="!clickServer" clickContent="Please select a Server !!"></servers_detail>
          <servers_detail v-else :clickContent="clickServer.status"></servers_detail>
      </div>
  </div>
</template>
<script>
import Server from './Server.vue';
import Servers_detail from './ServersDetail.vue'

export default {
data: function(){
   return {
     servers: [
     {id: 1, status: 'Normal 1'},
     {id: 2, status: 'Normal 2r'},
     {id: 3, status: 'Normal 3'},
     {id: 4, status: 'Normal 4w'},
     {id: 5, status: 'Normal 5g'}
     ],
     clickServer: null
    };
  },
  components: {
    'server': Server,
    'servers_detail': Servers_detail
  },
}
</script>
<style scoped>
  .row {
  border: 1px solid red;
  }
</style>
