import { BaseElement } from './core/base-element.js';
import { dateService } from './date-service.js';
class XCalendarClock extends BaseElement {
    render(){
        return `
            <p>${dateService.currentTime}</p>
        `
    }
}
customElements.define('x-calendar-clock', XCalendarClock);