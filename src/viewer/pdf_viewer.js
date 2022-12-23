import './util.js';
import viewer from './module.js';
import DefaultAnnotationLayerFactory from './module.js';
import DefaultTextLayerFactory from './module.js';
import PDFFindController from './module.js';
import PDFLinkService from './module.js';
import PDFPageView from './module.js';
import EventBus from './module.js';

delete window['pdfjs-dist/build/pdf'];
export {
  DefaultAnnotationLayerFactory,
  DefaultTextLayerFactory,
  PDFFindController,
  PDFLinkService,
  PDFPageView,
  EventBus
};
export default viewer;
