/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
Quando l’utente clicca su ogni cella, la cella cliccata si colora*/


/* creiamo le variabili necessarie per i bottoni in pagina che genereranno le celle */

const buttonEasy = document.getElementById("easy");

const buttonIntermediate = document.getElementById("intermediate");

const buttonHard = document.getElementById("hard");

/* creiamo la variabile per il contenitore delle celle */

const containerDiv = document.getElementById("container");

/* creiamo una funzione comune per generare le celle in base al livello */

function generationElement (elementGenerated, classAdded) {

    let cells = document.createElement(elementGenerated);

    cells.classList.add(classAdded);

    return cells

}

/* andiamo a dare la funzione di click ai bottoni con l'aggiunta della funzione per creare i quadrati in base al livello scelto dall'utente */

buttonEasy.addEventListener('click', function() {
    play(this.value, 'squareEasy');
});

buttonIntermediate.addEventListener('click', function() {
    play(this.value, 'squareInterm');
});

buttonHard.addEventListener('click', function() {
    play(this.value, 'squareHard');
});

/* andiamo a riportare la funzione e a creare il numero di celle necessarie in base al livello scelto dall'utente */

function play(difficulty, classes) {
    
    for (let i = 1; i <= difficulty; i++){

        let newElement = generationElement("div", classes);

        /* aggiungiamo la funzione di click che va a colorare la cella che viene selezionata dall'utente */

        newElement.addEventListener("click",
        
        function(){

            newElement.classList.add("clicked");

            /* andiamo a generare i numeri all'interno delle celle */

            /* newElement.innerHTML = i; */

            const squareSpan = `<span>${i}</span>`;
            newElement.innerHTML = squareSpan;

        }
        
        )

        containerDiv.append(newElement);

    }
}