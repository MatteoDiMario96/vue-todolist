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
                contenuto: "Anadare dal dentista",
                fatto: false,
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

    }
}).mount('#app')