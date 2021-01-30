import 'babel-polyfill';

import { onDocumentReady } from './utils';
import HorizontalParallax from './HorizontalParallax';

onDocumentReady(() => {
  if (document.querySelector('.js-horizontal-parallax')) {
    new HorizontalParallax();
  }
});
