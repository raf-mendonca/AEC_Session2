let vm = new Vue({
  el: '#app-conversor',
  data: {
    tempC: 0,
    tempF: 0
  },

  methods: {
    c2f: function () {
        return (
        this.tempF = Math.round((this.tempC * 9/5) + 32) );
    },
    f2c: function () {
        return (
        this.tempC = Math.round((this.tempF - 32) * 5/9) );
    }
  },
});


