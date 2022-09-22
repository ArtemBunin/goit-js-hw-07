import { galleryItems } from './gallery-items.js';
// Change code below this line




const gallaryContainer = document.querySelector(".gallery");
const markup = creatGalleryMarkup(galleryItems);  

gallaryContainer.innerHTML = markup;

function creatGalleryMarkup(galleryItems) {
    
    return galleryItems.map(({ preview, original, description })=> {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
    }).join("")
     
};

gallaryContainer.addEventListener("click", handlerClick);
  
 function handlerClick(ev)  {
   blockAction(ev);
   
   if (ev.target.nodeName !== "IMG") {
     return
   }
      const instance = basicLightbox.create( ` <img src ="${ev.target.dataset.source}" width = "800" height = "800"> `)
   instance.show(); 
   gallaryContainer.addEventListener("keydown", ev => {
     if (ev.code === "Escape") {
           instance.close()
         }
      })

} 


function blockAction(ev) {
    ev.preventDefault();
}