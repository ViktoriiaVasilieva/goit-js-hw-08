import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallaryContainer = document.querySelector('.gallery');
const galleryMarkup = createGallaryItemMarkup(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captions: true,
});

function createGallaryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
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
