const { createApp } = Vue

createApp({
data() {
    return {
        listaCoseDaFare: [
            {
                contenuto: "Fare spesa",
                fatto: false,
            },
            {
                contenuto: "Andare dal dentista",
                fatto: true,
            },
            {
                contenuto: "Andare al mare",
                fatto: false,
            },
            {
                contenuto: "Fare Esercizio ToDoList",
                fatto: false,
            },
            {
                contenuto: "Incontrare Sara",
                fatto: false,
            },
        ]
        }
    },
    methods:{
        rimuoviTask: function(elementoIndice){
            this.listaCoseDaFare.splice(elementoIndice, 1);
        }
    }
}).mount('#app')