class NotFoundLink {
  constructor() {
    const link = document.querySelector('.js-not-found-link');
    const { pathname, search } = window.location;
    link.innerText = pathname + search;
  }
}

export default NotFoundLink;
