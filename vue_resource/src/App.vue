<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label>Username</label>
                  <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                  <label>Mail</label>
                  <input class="form-control" type="text" v-model="user.rmail">
                </div>
                <button class="btn btn-primary" @click="submit">submit!!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    };
  },
  methods: {
    submit() {
      this.$http.post(
        'https://vue-httptest-f32e3.firebaseio.com/data.json',
        this.user
      );
    }
  }
};
</script>
<style>
</style>
