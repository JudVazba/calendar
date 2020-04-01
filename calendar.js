import { BaseElement } from './core/base-element.js';
import { dateService } from './date-service.js';
import './calendar-header.js';

class XCalendar extends BaseElement {
    constructor() {
        super();
        dateService.start();
    }
    render() {
        return `
            <x-calendar-header></x-calendar-header>
            <x-calendar-body></x-calendar-body>
        `;
    }
}
customElements.define('x-calendar', XCalendar);