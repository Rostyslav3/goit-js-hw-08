import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  galleryContainer.insertAdjacentHTML(
      "beforeend",
      `<a class="gallery__item" href=${galleryItem.original}>
      <img 
        class="gallery__image" 
         src=${galleryItem.preview} 
         alt=${galleryItem.description}
        </a>`
  
  );
});


var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

console.log(galleryItems);