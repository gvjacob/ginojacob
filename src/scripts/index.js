import "babel-polyfill";

import { onDocumentReady } from "./utils";
import ExternalLinks from "./ExternalLinks";
import HorizontalParallax from "./HorizontalParallax";

onDocumentReady(() => {
  new ExternalLinks();

  if (document.querySelector(".js-horizontal-parallax")) {
    new HorizontalParallax();
  }
});
