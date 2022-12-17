import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const boxDivRef = document.querySelector('.gallery')

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
`;
    
  }).join('');
 
boxDivRef.insertAdjacentHTML("beforeend", markup);

boxDivRef.addEventListener("click", onGalleryBoxClick);
 function onGalleryBoxClick(ev){
    ev.preventDefault();
    if (ev.target.nodeName !== "IMG") {
        return
      }
      var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay :250});
 }