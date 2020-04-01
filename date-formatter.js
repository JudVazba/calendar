class DateFormatter {
    static timeString(date) {
        const hours = this._twoDigits(date.getHours());
        const minutes = this._twoDigits(date.getMinutes());
        const seconds = this._twoDigits(date.getSeconds());
        return `${hours}:${minutes}:${seconds}`;
    }
    static dateString(date) {
        // TODO: implimentar este metodo
        // miercoles, 1 de abril de 2020
        const dia[

            "domingo","lunes","martes",
            "miercoles","jueves"
            "viernes","sabado",
        ];
        this.toString(dia.lenght(date.getDay()));
     
        const diaSemana = this._twoDigits(date.getDate());
        const mes = this.toString(date.getMont());
        const anio =this._twhoDigits(date.getYear());

        dia.toString(date);
        return(`${diaSemana}:${dia}:${mes}:${anio}`);
    }
    static monthString(date){

        const mes = [
            "enero","febrero","marzo",
            "abril","mayo","junio",
            "julio","agosto","septiembre",
            "octubre","noviembre","diciembre"
        ]
        for(date=0; date.lenght> 0; 0){
            return mes;
        }
        
    }
    static _twoDigits(value) {
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    }
}

export { DateFormatter };