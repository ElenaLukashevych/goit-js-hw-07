import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
//  console.log(galleryEl);

function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
         
    />
  </a>
</div>`
    ).join('');

}

const listItemsMarkup = createGalleryMarkup(galleryItems);
// console.log(listItemsMarkup);


galleryEl.innerHTML = listItemsMarkup;

galleryEl.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  event.preventDefault();

  const currentElement = event.target;
  const currentSource = currentElement.dataset.source;


  if (!currentSource) {
    return;

  }


  const  onEscKeyPress = event => {

  if (event.code === 'Escape') {
    instance.close()
  }

};


  const instance = basicLightbox.create(
    `<img src = ${currentSource} width="800" height="600">`,


    { onShow: (instance) => { window.addEventListener('keydown', onEscKeyPress) } },

    { onClose: (instance) => { window.removeEventListener('keydown', onEscKeyPress) } },
 
  );
  
  
  
  
    instance.show()
};






















// instance.show()

// instance.show(() => console.log('lightbox now visible'))

// instance.close(() => console.log('lightbox not visible anymore'))

// onShow: (instance) => {}


// onClose: (instance) => {}