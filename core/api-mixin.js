function APIMixin(Super) {
    return class API extends Super {
        connectedCallback(){
            super.connectedCallback && super.connectedCallback();
        }
        disconnectedCallback(){
            super.disconnectedCallback && super.disconnectedCallback();
        }
        render(){
            throw new Error('Not implemented');
        }
    }
}

export {APIMixin};