/**
 * Creates anchor links for every js-anchor element
 * in the document and displays them on the header.
 */
class Anchors {
  constructor() {
    this.anchorContainer = document.getElementById('header__anchors');

    const anchors = document.getElementsByClassName('js-anchor');
    this.init(Array.from(anchors));
  }

  /**
   * Create anchor link for each js-anchor element.
   */
  init(anchors) {
    anchors.forEach((anchor) => {
      const anchorLink = this.createAnchorLink(anchor);
      this.anchorContainer.appendChild(anchorLink);
    });
  }

  /**
   * Create anchor link with `li` and `a` tags.
   */
  createAnchorLink(anchor) {
    const liNode = document.createElement('li');
    liNode.classList.add('header__anchor');

    const aNode = document.createElement('a');
    aNode.href = `#${anchor.id}`;
    aNode.innerText = anchor.id;

    liNode.appendChild(aNode);

    return liNode;
  }
}

export default Anchors;
