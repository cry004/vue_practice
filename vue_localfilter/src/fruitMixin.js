export const fruitMixin = {
  data() {
    return {
      text: 'hello there',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    };
  },
  computed: {
    filterFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created() {
    console.log('created !');
  }
};
