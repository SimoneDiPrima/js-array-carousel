// creo il mio array e prendo la variabile "contenitore";la variabile d appoggio per l indice dell immagine;
const gallery = document.querySelector(`#carousel .gallery`);
const sources =[`img/01.jpg`,`img/02.jpg`,`img/03.jpg`,`img/04.jpg`,`img/05.jpg`,`img/06.jpg`,`img/07.jpg`,`img/08.jpg`,`img/09.jpg`,`img/10.jpg`]


let imageElements = ``;
for(let i = 0; i <sources.length;i++){
    imageElements += `<img src="${sources[i]}" alt="foto paesaggio"/>`; 
 }
 gallery.innerHTML = imageElements;

const images = document.querySelectorAll(`#carousel img`); //mi restituisce una lista di nodi

let allIndeximages = 0;

images[allIndeximages].classList.add(`active`);


nextButton = document.getElementById(`rightarrow`);

beforeButton = document.getElementById(`leftarrow`);

nextButton.addEventListener(`click`, function(){
    images[currentIndeximages].classList.remove(`active`);
    currentIndeximages++ ;
    images[currentIndeximages].classList.add(`active`);
})
