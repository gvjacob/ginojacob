/**
 * Horizontal parallax of an overflow-x element that
 * tracks the cursor's x position.
 */
class HorizontalParallax {
  constructor() {
    const nodes = document.getElementsByClassName('js-horizontal-parallax');
    this.init(Array.from(nodes));
  }

  /**
   * Initialize onmousemove listener for every node.
   */
  init(nodes) {
    window.onmousemove = (event) => {
      nodes.forEach((node) => this.matchParallaxToMouseEvent(node, event));
    };
  }

  /**
   * Match the node's scrollLeft with the
   * cursor's x position.
   */
  matchParallaxToMouseEvent(node, event) {
    const cursorHorizontalPercent = event.clientX / window.innerWidth;
    const nodeParallaxScrollLeft =
      cursorHorizontalPercent * (node.scrollWidth - node.clientWidth);

    node.scrollLeft = nodeParallaxScrollLeft;
  }
}

export default HorizontalParallax;
