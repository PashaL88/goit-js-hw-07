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

const onSelectImageClick = (event) => {
  const target = event.target;
  if (target.nodeName !== "IMG") {
    return;
  }
  console.log("клик");
};

galleryEL.addEventListener("click", onSelectImageClick);
