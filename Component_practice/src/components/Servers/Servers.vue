<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <ul class="list-group">
              <servers_detail></servers_detail>
          </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
          <p>Server Details are currently not updated</p>
      </div>
  </div>
</template>
<script>
import Servers_detail from './ServersDetail.vue'

export default {
  components: {
    'servers_detail': Servers_detail
  }
}
</script>
<style scoped>
  div {
  border: 1px solid red;
  }
</style>
