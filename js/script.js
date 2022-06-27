
// creazione array ed eliminazione conseguente immagini lato html
let allImages = ["./img/01.jpg","./img/02.jpg","./img/03.jpg","./img/04.jpg","./img/05.jpg","./img/06.jpg","./img/07.jpg","./img/08.jpg","./img/09.jpg","./img/10.jpg"];
console.log(allImages);
let currentImageindex = document.getElementsByClassName("gallery");


const rightButton = document.getElementById(`rightarrow`);
const leftButton = document.getElementById(`leftarrow`);

rightButton.addEventListener(`click`, function(){
    for(let i = 0 ; i <= allImages.length; i++){
        currentImageindex++;
        allImages[currentImageindex].classList.add(`active`);
        console.log(currentImageindex[i]);
    }
})
allImages.innerHTML = currentImageindex;



