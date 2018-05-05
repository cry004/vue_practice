<template>
    <div class="container">
        <appHeader></appHeader>
        <hr>
          <Servers></Servers>
        <hr>
          <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Servers from './components/Servers/Servers.vue';
  import Footer from './components/Shared/Footer.vue';

  export default {
    components: {
      appHeader: Header,  //vue js
      Servers,  //es6
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
