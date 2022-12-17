import { galleryItems } from './gallery-items.js';
// Change code below this line




const boxDivRef = document.querySelector('.gallery')

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    
  }).join('');
 
boxDivRef.insertAdjacentHTML("beforeend", markup);
  
boxDivRef.addEventListener("click", onGalleryBoxClick);
function onGalleryBoxClick(ev) {
  ev.preventDefault();
  if (ev.target.nodeName !== "IMG") {
    return
  }
  let bigIMg = ev.target.dataset.source;
  console.log(bigIMg);

  const instance = basicLightbox.create(`
    <img src=${bigIMg} width="800" height="600">
`);
  instance.show();
  
  document.addEventListener('keydown', onCloseImg);

  function onCloseImg(ev) {
   
    if (ev.code === "Escape") {
       instance.close()
     }
 } 
}

