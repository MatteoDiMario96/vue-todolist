//********ESERCIZIO*******//

Descrizione:
Rifare l'esercizio della to do list visto insieme a lezione.
Ogni oggetto dovra' avere almeno due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

- Creare una lista. 
(più esattamente un'array di oggeti per poi poter più facilmente richiamare le sue propietà.)
    - Dare delle priopietà : "contenuto", "fatto".


//***MILESTONE 1****//
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

- Creare nel file Html un ul.
    - Creare nel file Html un li.
        - Applicare un v-for al li. (Dico " item in arrayCoseDaFare ").
            - Mettere come testo del li. Il contenuto dell'item corrispondente. {{item.contenuto}}
    - Assegnare una classe grazie a v-bind che a seconda se la propietà dell'item "fatto" sia true o false metti classe active altrimenti niente. Questo grazie al ternario. 



//***MILESTONE 2****//
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

- Creare una funzione rimuoviTask(elementoIndice){
    this.coseDaFare.splice(elementoIndice, 1)
}

- A questo punto devo aggiungere "indice al v-for" e :key="indice"


- Creare nel file Html un icona o quello più congeniale. 
    - Metterlo nell'li con il v-for.
        -  Grazie al @click agganciarci la funzione rimuoviTask(indice).


//***MILESTONE 3****//
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

- Creare una funzione aggiungiTask.
    - Creo una variabile nuovaTask = {
        contenuto: this.nuovaCosaDaFare,
        fatto: false
    }
    - Aggiungere all'array coseDaFare nuovaTask


- Creare nel file Html un input per poter aggiungere task. 
    - Grazie a keyup.enter agganciancio la funzione aggiungiTask.

- Aggiungo una nuova propietà al mio array oggetti coseDaFare: "nuovaCosaDaFare:"
- La collego grazie grazie a v-model al mio input che cosi cambierà in tempo reale il dato. 


//***Bonus:****//
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

- Creo una funzione invertiFatto(elementoIndice){
    this.coseDaFare[elementoIndice].fatto = !this.coseDaFare[elementoIndice].fatto
}

- Collego questa funzione al click sul testo del li quindi immagino un p un h qualcos....



//***Bonus2:****//
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente
Buon lavoro e buon divertimento!

