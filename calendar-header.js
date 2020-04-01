import { BaseElement } from './core/base-element.js';
import './core/calendar-clock.js';
import './core/calendar-date.js';
// TODO: importar calendar-date

class XCalendarHeader extends BaseElement {
    render(){
        return `
            <x-calendar-clock></x-calendar-clock>
            <x-calendar-date></x-calendar-date>
        `
    }
}
customElements.define('x-calendar-header', XCalendarHeader);
