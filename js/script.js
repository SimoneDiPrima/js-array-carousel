
// // creazione array ed eliminazione conseguente immagini lato html
 const allImages = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
 let currentIndeximages = 0;
 const gallery = document.getElementById(`gallery`);
 gallery.innerText = allImages[currentIndeximages[0]];
 let elements = ``;
 for(let i = 0; i <allImages.length;i++){
    elements += `<img>${allImages[i]}</img>`;
 }
 gallery.innerText = elements;
let images = document.getElementById('gallery').classList.add('active');

nextButton = document.getElementById(`rightarrow`);

beforeButton = document.getElementById(`leftarrow`);

nextButton.addEventListener(`click`, function(){
    images[currentIndeximages].classList.remove(`active`);
    currentIndeximages++ ;
    images[currentIndeximages].classList.add(`active`);
})

