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
        ],
        contenutoDaAggiungere: "",
        }
    },
    methods:{
        rimuoviTask: function(elementoIndice){
            this.listaCoseDaFare.splice(elementoIndice, 1);
        },
        aggiungiTask: function(){
            const nuovaTask = {
                contenuto: this.contenutoDaAggiungere,
                fatto: false,
            }

            if(nuovaTask.contenuto.length > 0){
                this.listaCoseDaFare.push(nuovaTask);
                this.cancellaInput()
            }    
        },
        cancellaInput(){
            this.contenutoDaAggiungere = ""
        },
        invertiFatto: function(indiceElemento){
            this.listaCoseDaFare[indiceElemento].fatto = !this.listaCoseDaFare[indiceElemento].fatto
        } 
    }
}).mount('#app')