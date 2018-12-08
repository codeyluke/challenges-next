const closeButton = document.querySelector(".lightbox-close");
const lightBox = document.querySelector(".lightbox");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightBoxImage = document.querySelector(".lightbox-image");

function hideImage(e) {
  e.preventDefault();
  lightBox.classList.add("d-none");
}

function showImage(e) {
  //show lightbox
  lightBox.classList.remove("d-none");

  //get current galleryItem
  const elementClicked = e.target;
  const card = elementClicked.parentElement.parentElement;

  //replace lightbox-image with current image
  lightBoxImage.innerHTML = card.innerHTML;

  //adding the caption for the image
  const caption = document.querySelector(".lightbox-image > p");
  caption.classList.remove("d-none");
}

/* ============ Close Button  ============ */
closeButton.onclick = hideImage;

/* ============ Lightbox (for every gallery item, set onclick handler to show image)  ============ */
for (let i = 0; i < galleryItems.length; i++) {
  const item = galleryItems[i];
  item.onclick = showImage;
}
