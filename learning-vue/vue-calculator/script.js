let app = new Vue({
  el: '#app',
  data: {
    operator: 'add',
    firstOperand: '',
    secondOperand: '',
  },
  computed: {
    answer() {
      first = parseInt(this.firstOperand);
      second = parseInt(this.secondOperand);

      switch (this.operator) {
        case 'add':
          return first + second;
        case 'subtract':
          return first - second;
        case 'multiply':
          return first * second;
        case 'divide':
          return first / second;
        default:
          break;
      }
    },
  },
});
