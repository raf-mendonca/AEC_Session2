let vm = new Vue({
    el: "#app",
    data: {
        titre: "Exercice 1",
        firstname: "Rafael",
        lastname: "De Mendonça",
        message: "Salut!",
        myDate: new Date().toISOString().slice(0,10), 
    },
    methods: {
        exercice1: function (){
            return (
                "Bienvenue au exercice 1 " + this.lastname + " " + this.firstname
            );
        },
    },
  });