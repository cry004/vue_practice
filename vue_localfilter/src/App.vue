<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add new item</button>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filterFruits">{{fruit}}</li>
                </ul>
                <app-list></app-list>
            </div>

        </div>
    </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin.js';
export default {
  mixins: [fruitMixin],
  data() {
    return {
      text: 'hello there'
      // fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      // filterText: ''
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  // computed: {
  //   filterFruits() {
  //     return this.fruits.filter(element => {
  //       return element.match(this.filterText);
  //     });
  //   }
  // },
  components: {
    appList: List
  }
};
</script>

<style>
</style>
