/**
 * Apply placeholder to loading images.
 */
class ImageLoadPlaceholder {
  constructor() {
    const images = document.querySelectorAll('img');
    this.init(Array.from(images));
  }

  /**
   * Add 'loaded' class to images if they are
   * loaded, onload otherwisej.
   */
  init(images) {
    images.forEach((image) => {
      if (image.complete) {
        this.addLoaded(image);
      } else {
        image.onload = () => this.addLoaded(image);
      }
    });
  }

  /**
   * Add 'loaded' class to given image.
   */
  addLoaded(image) {
    image.classList.add('loaded');
  }
}

export default ImageLoadPlaceholder;
