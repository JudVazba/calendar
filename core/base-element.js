import {RenderMixin} from './render-mixin.js';
import {APIMixin} from './api-mixin.js';

class BaseElement extends RenderMixin(APIMixin(HTMLElement)) {
    
}

export { BaseElement };