class StickyHeader {
  constructor() {
    this.header = document.querySelector('.header__bar');
    this.init();
  }

  init() {
    const sticky = this.header.offsetTop;
    window.onscroll = () => this.switchSticky(sticky);
  }

  switchSticky(sticky) {
    if (window.pageYOffset > sticky) {
      this.header.classList.add('sticky');
    } else {
      this.header.classList.remove('sticky');
    }
  }
}

export default StickyHeader;
