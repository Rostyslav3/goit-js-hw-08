// Add imports above this line
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src=${galleryItem.preview}
          data-source=${galleryItem.original}
          alt=${galleryItem.description}
        />
      </a>
    </div>`
  );
});
galleryContainer.addEventListener("click", (el) => {
  el.preventDefault();
  if (el.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${el.target.dataset.source} width="800" height="600">
`);
  instance.show();
  window.addEventListener("keydown", onModalOpen);

  function onModalOpen(el) {
    console.log(el);
    if (el.code !== "Escape") {
      return;
    }

    instance.close();
    window.removeEventListener("keydown", onModalOpen);
  }
});




console.log(galleryItems);

