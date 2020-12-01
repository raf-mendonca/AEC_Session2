var vm = new Vue({
    el: "#app",
    data: {
      firstname: "Rafael",
      lastname: "De Mendonça",
    },
    methods: {
        mydetails: function (){
            return (
                "i am" + this.firstname + " " +this.lastname 
            );
        },
    },

  });