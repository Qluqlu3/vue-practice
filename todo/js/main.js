const app = Vue.createApp({
  data: () => ({ newItem: '', todos: [] }),
  methods: {
    addItem: function (event) {
      // console.log('clicked');
      if (this.newItem === '') return;
      const todo = { item: this.newItem, isDone: false };
      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function (index) {
      // console.log('Deleted');
      // console.log(index);
      this.todos.splice(index, 1);
    },
  },
});
app.mount('#app');
