import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEL = document.querySelector(".gallery");

const array = galleryItems.map((image) => {
  const imageEL = `<li><a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a></li>`;

  return imageEL;
});

galleryEL.insertAdjacentHTML("beforeend", array.join(""));

let instance;

const onSelectImageClick = (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;

  instance = basicLightbox.create(`
    <img src="${target.dataset.source}">
`);

  instance.show();
  window.addEventListener("keydown", instanceCloseEscPress);
};

galleryEL.addEventListener("click", onSelectImageClick);

function instanceCloseEscPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
