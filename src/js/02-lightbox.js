import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallaryContainer = document.querySelector(".gallery");
const markup = creatGalleryMarkup(galleryItems); 
gallaryContainer.insertAdjacentHTML("beforeend",markup);

function creatGalleryMarkup(galleryItems) {
    
    return galleryItems.map(({ preview, original, description })=> {
        return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
          alt="${description}"
    />
  </a>
`    }).join("")
     
};

gallaryContainer.addEventListener("click",ev => ev.preventDefault());

var lightbox = new SimpleLightbox ('.gallery a', {captionsData :"alt",captionDelay : 250,});
