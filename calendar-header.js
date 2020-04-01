import { BaseElement } from './core/base-element.js';
import './calendar-clock.js';
class XCalendarHeader extends BaseElement {
    render(){
        return `
            <x-calendar-clock></x-calendar-clock>
            <x-calendar-date></x-calendar-date>
        `
    }
}
customElements.define('x-calendar-header', XCalendarHeader);