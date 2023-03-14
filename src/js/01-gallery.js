// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
const galleryElem = document.querySelector(".gallery");
const markupElem = createMarkup(galleryItems);

galleryElem.insertAdjacentHTML("afterbegin", markupElem);
function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });