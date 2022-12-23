import './util.js';
import viewer from './module.js';
import DefaultAnnotationLayerFactory from './module.js';
import DefaultTextLayerFactory from './module.js';
import PDFFindController from './module.js';
import PDFLinkService from './module.js';
import PDFPageView from './module.js';
import EventBus from './module.js';

delete window['pdfjs-dist/build/pdf'];
export const DefaultAnnotationLayerFactory =
  viewer.DefaultAnnotationLayerFactory;
export const DefaultTextLayerFactory = viewer.DefaultTextLayerFactory;
export const PDFFindController = viewer.PDFFindController;
export const PDFLinkService = viewer.PDFLinkService;
export const PDFPageView = viewer.PDFPageView;
export const EventBus = viewer.EventBus;
export default viewer;
