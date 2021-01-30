import 'babel-polyfill';

import { onDocumentReady } from './utils';
import StickyHeader from './StickyHeader';
import Anchors from './Anchors';
import ImageLoadPlaceholder from './ImageLoadPlaceholder';
import ExternalLinks from './ExternalLinks';
import HorizontalParallax from './HorizontalParallax';
import NotFoundLink from './NotFoundLink';

onDocumentReady(() => {
  new StickyHeader();
  new ExternalLinks();
  new Anchors();
  new ImageLoadPlaceholder();
  new NotFoundLink();

  if (document.querySelector('.js-horizontal-parallax')) {
    new HorizontalParallax();
  }
});
