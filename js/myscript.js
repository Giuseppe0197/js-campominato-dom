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

/* creiamo una variabile per poi andare a stampare il risultato */

const resultGame = document.getElementById("result");

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

/* function mineGeneration(elementMine, classMine){

    let bombs = document.createElement(elementMine);

    bombs.classList.add(classMine)

    return bombs

} */

function play(difficulty, classes) {

    /* creaimo un'array per le mine */

    const arrMine = [];

    console.log(arrMine);

    /* controlliamo che i numeri non vengano ripetuti, ma che siano 16 numeri diversi */

    for (let i = 0; arrMine.length < 16; i++){

        let num = Math.floor(Math.random() * difficulty) + 1;

        p = arrMine.includes(num);

        if (!p){

            arrMine.push(num);

        }

    }
    
    for (let i = 1; i <= difficulty; i++){

        let newElement = generationElement("div", classes);

        let mineEl = generationElement("div", classes);
    
        mineEl.addEventListener("click", 
    
        function(){

            mineEl.classList.add("mine");

        }

        )

        containerDiv.append(mineEl);

        /* aggiungiamo la funzione di click che va a colorare la cella che viene selezionata dall'utente */

        newElement.addEventListener("click",
        
        function(){

            newElement.classList.add("clicked");

            /* andiamo a generare i numeri all'interno delle celle */

            const squareSpan = `<span>${i}</span>`;
            newElement.innerHTML = squareSpan;

        }
        
        )

        containerDiv.append(newElement);

    }
}

/* creiamo una funzione per generare un numero casuale tra 1 e 16 */

/* function mineNum (min , max) {

    for (let i = min; i <= max; i++){

        let mineGen = numRandom(1, 16);

        mineGen.addEventListener("click",
        
        function(){

            mineGen.classList.add("mine")

        }
        
        )

        containerDiv.append(mineGen);

    }

} */
