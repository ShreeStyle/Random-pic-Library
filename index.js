const imagecontainerEl  = document.querySelector(".image-container");


const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click" , ()=> {
    imageNum = 10;
    addNewImages();
});
 
function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newIngEl = document.createElement("img")
        newIngEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*2000)}`;
    
        imagecontainerEl.appendChild(newIngEl);
        
    }
    
}




