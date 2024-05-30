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



MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistente
Buon lavoro e buon divertimento!

