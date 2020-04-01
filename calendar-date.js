// TODO: programar
import { BaseElement } from './core/base-element.js';
import './core/calendar-clock.js';
import './core/calendar-header.js';


class XCalendarDate extends BaseElement {
    render(){
        return `
            <p>"Hoy es"></p>
            <x-calendar-date></x-calendar-date>

        `
    }
}
customElements.define('x-calendar-date', XCalendarDate);
