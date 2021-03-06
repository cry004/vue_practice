Vue.component('hello', {
  template: '<h1>Hello!!!!!</h1>'
});

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Text';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
console.log(vm1);
vm1.$refs.heading.innerText = 'Someting else';
setTimeout(function() {
  vm1.title = 'Change by timer';
  vm1.show();
}, 1000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Istance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Change';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello!v3</h1>'
});
vm3.$mount('#app3');
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);
