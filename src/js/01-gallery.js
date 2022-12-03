import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallaryContainer = document.querySelector('.gallery');
const galleryMarkup = createGallaryItemMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  animationSpeed: 250,
  captionsData: 'alt',
  fadeSpeed: 250,
  captionDelay: 250,
});

function createGallaryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div>
      <a class="gallery__item" href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}" 
      alt="${description}"
      />
    </a>
    </div>`;
    })
    .join('');
}

console.log(galleryItems);
