import { EventEmitter } from './core/event-emitter.js';
const REFRESH_INTERVAL = 1 * 1000;

class DateService extends EventEmitter {
    constructor() {
        super();
        this._date = new Date();
    }
    get date() {
        return this._date;
    }
    start() {
        this._updateDate();
        this._interval = window.setInterval(
            this._updateDate.bind(this),
            REFRESH_INTERVAL
        );
    }
    stop() {
        window.clearInterval(this._interval);
    }
    _updateDate() {
        const newDate = new Date();
        // comparar this._date con newDate
        // TODO: comprobar si cambio de dia y en ese
        // caso emitir el evento day-changed
        this._date = newDate;
        this.emit('second-changed', this._date);
        if(this._date === newDate){
        return true;
        }

    }
}
export const dateService = new DateService();
export {EventEmitter};