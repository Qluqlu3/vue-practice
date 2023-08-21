const app = Vue.createApp({
  data: () => ({
    isLarge: true,
    hasError: true,
    largeClass: 'large',
    dangerClass: 'text-danger',
    classObject: {
      large: true,
      'text-danger': true,
    },
    largeClass: {
      large: true,
      'bg-gray': true,
    },
    color: 'blue',
    fontSize: 50,
    styleObject: {
      color: 'blue',
      fontSize: '50px',
    },
  }),
});
app.mount('#app');
