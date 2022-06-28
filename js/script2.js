// creo il mio array e prendo la variabile "contenitore";la variabile d appoggio per l indice dell immagine;
 const images = [`ciao mondo`,"img/03.jpg","img/04.jpg"];
const carosel = document.getElementById(`carousel`);
const gallery = document.getElementById(`gallery`);
let allIndeximages = 0;
let album = " ";
album = document.getElementById(`album`);
album.innerText=images[allIndeximages];


album.classList.add(`active`);
allIndeximages = [...images];
console.log(allIndeximages);


// for(let i=0;i< images.length;i++){
   
//     allIndeximages[i] = images[i];
//     }
// gallery.innerText= images[allIndeximages];
// console.log(allIndeximages);
// ora creo le variabili per i bottoni
let nextButton = document.getElementById(`rightarrow`);
let beforeButton = document.getElementById(`leftarrow`);
    
// ora creo i bottoni per scorrere le immagini
nextButton.addEventListener(`click`,function(){
    for(let i=0;i< allIndeximages.length;i++){
        album.classList.remove(`active`);
        allIndeximages++;
        album.classList.add(`active`);
        gallery.innerHTML = allIndeximages[i]
    }
      

    })
    beforeButton.addEventListener(`click`,function(){
        for(let i=0;i< allIndeximages.length;i++){
            album.classList.remove(`active`);
            allIndeximages--;
            album.classList.add(`active`);
            gallery.innerHTML = allIndeximages[i];
        }
    })
