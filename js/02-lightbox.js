import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEL = document.querySelector(".gallery");

const array = galleryItems.map((image) => {
  const imageEL = `<li><a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a></li>`;

  return imageEL;
});

galleryEL.insertAdjacentHTML("beforeend", array.join(""));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
  /* options */
});
