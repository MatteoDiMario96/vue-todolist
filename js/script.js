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
        },
        modificaTask: function(indiceElemento, elemento){
            const cambioContenuto = prompt(`Dimmi come vuoi modificare la Task "${this.listaCoseDaFare[indiceElemento].contenuto}"!`);
            cambioContenuto.trim()
            //Vorrei rendere solo la prima lettera grande, forse meglio con funzione. 
            // 
            if(cambioContenuto.length > 0){
                this.listaCoseDaFare[indiceElemento].contenuto = cambioContenuto;
            }else{
                console.warn("Attento non stai inserendo nulla!")
            }
        }
    }
}).mount('#app')