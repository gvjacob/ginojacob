import 'babel-polyfill';

import { onDocumentReady } from './utils';
import Anchors from './Anchors';
import ExternalLinks from './ExternalLinks';
import HorizontalParallax from './HorizontalParallax';

onDocumentReady(() => {
  new ExternalLinks();
  new Anchors();

  if (document.querySelector('.js-horizontal-parallax')) {
    new HorizontalParallax();
  }
});
