// prendo la classe gallery grazie alla variabile sotto e al querySelector.
const gallery = document.querySelector(`#carousel .gallery`);
// creo il mio array con tutte le immagini dentro
const sources =[`img/01.jpg`,`img/02.jpg`,`img/03.jpg`,`img/04.jpg`,`img/05.jpg`,`img/06.jpg`,`img/07.jpg`,`img/08.jpg`,`img/09.jpg`,`img/10.jpg`]

// creo la mia variabile vuota sul quale costruire il mio `stringone(con template literal)`
let imageElements = ``;
for(let i = 0; i <sources.length;i++){
    // monto tutti i pezzi singoli finche non avro preso tutti gli elementi del mio array
    imageElements += `<img src="${sources[i]}" alt="foto paesaggio"/>`; 
 }
 gallery.innerHTML = imageElements;
// prendo tutte le immagini grazie al querySelectorAll
const images = document.querySelectorAll(`#carousel img`); //mi restituisce una lista di nodi
// creo l indice d appoggio 
let allIndeximages = 0; 
// metto la classe active alla prima immagine in modo da vedere solo quella
images[allIndeximages].classList.add(`active`);

// creo le due variabili bottoni al quale leghero il cambio delle immagini e al quale devo mettere il controllo affinche ripartano
// dall inizio quando arrivano all ultima immagine
nextButton = document.getElementById(`rightarrow`);

beforeButton = document.getElementById(`leftarrow`);

nextButton.addEventListener(`click`, function(){
    
    images[allIndeximages].classList.remove(`active`);
    allIndeximages++ ;
    if(allIndeximages===images.length){
        allIndeximages = 0;
    }
    images[allIndeximages].classList.add(`active`);
})
beforeButton.addEventListener(`click`, function(){
    images[allIndeximages].classList.remove(`active`);
    allIndeximages-- ;
    if(allIndeximages < 0){
        allIndeximages = (images.length - 1);
    }
    images[allIndeximages].classList.add(`active`);
})

