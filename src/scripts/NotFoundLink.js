/**
 * Update not found link on 404 page
 * based on current page's pathname and search.
 */
class NotFoundLink {
  constructor() {
    const link = document.querySelector('.js-not-found-link');
    const { pathname, search } = window.location;
    link.innerText = pathname + search;
  }
}

export default NotFoundLink;
