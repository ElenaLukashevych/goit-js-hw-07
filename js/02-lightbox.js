import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
//  console.log(galleryEl);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) =>
        `<li> <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`
    ).join('');

};


const listItemsMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', listItemsMarkup);



const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });

  

    

