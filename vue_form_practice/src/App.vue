<template>
    <div class="container">
        <form v-if="!issubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <app-full-name v-model="fullName"></app-full-name>
                    <hr>
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input
                          type="text"
                          id="mail"
                          class="form-control"
                          v-model="user.mail">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="Password">password</label>
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          v-model="user.password">
                    </div>
                    <hr>
                    <h2>Store Data</h2>
                    <div class="form-group">
                        <label for="yes">
                          <input
                            type="radio"
                            id="yes"
                            class="form-control"
                            value="yes"
                            v-model="user.store">Yes
                        </label>
                        <label for="no">
                          <input
                            type="radio"
                            id="no"
                            value="no"
                            class="form-control"
                            v-model="user.store">No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                    class="btn btn-primary" @click.prevent="issubmitted = true">Submit!
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="issubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{user.mail}}</p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{user.store}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './fullName.vue';
export default {
  data() {
    return {
      fullName: 'Max LLL',
      user: {
        firstname: '',
        lastname: '',
        mail: '',
        password: '',
        store: 'yes'
      },
      issubmitted: false
    };
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
