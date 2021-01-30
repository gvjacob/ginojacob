import 'babel-polyfill';

import { onDocumentReady } from './utils';
import StickyHeader from './StickyHeader';
import Anchors from './Anchors';
import ImageLoadPlaceholder from './ImageLoadPlaceholder';
import ExternalLinks from './ExternalLinks';
import HorizontalParallax from './HorizontalParallax';

onDocumentReady(() => {
  new StickyHeader();
  new ExternalLinks();
  new Anchors();
  new ImageLoadPlaceholder();

  if (document.querySelector('.js-horizontal-parallax')) {
    new HorizontalParallax();
  }
});
