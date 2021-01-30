class ExternalLinks {
  constructor() {
    const links = document.querySelectorAll('a');
    this.init(Array.from(links));
  }

  init(links) {
    links.forEach((link) => {
      const href = link.getAttribute('href');

      if (this.isExternal(href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.classList.add('external-link');
      }
    });
  }

  isExternal(href) {
    return (
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      href.startsWith('www')
    );
  }
}

export default ExternalLinks;
