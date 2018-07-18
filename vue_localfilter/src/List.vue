<template>
    <div>
      <h1>Filters & Mixins</h1>
      <hr>
      <input v-model="filterText">
      <ul>
        <li v-for="fruit in filterFruits">{{fruit}}</li>
      </ul>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin.js';
export default {
  mixins: [fruitMixin]
  // data() {
  //   return {
  //     text: 'hello there',
  //     fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
  //     filterText: ''
  //   };
  // },
  // filters: {
  //   toUppercase(value) {
  //     return value.toUpperCase();
  //   }
  // },
  // computed: {
  //   filterFruits() {
  //     return this.fruits.filter(element => {
  //       return element.match(this.filterText);
  //     });
  //   }
  // }
};
</script>

<style>
</style>
