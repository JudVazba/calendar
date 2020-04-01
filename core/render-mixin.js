function RenderMixin(Super) {
    return class Render extends Super {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.__initialized = false;
        }
        connectedCallback(){
            super.connectedCallback && super.connectedCallback();
            if(!this.__initialized){
                this.shadowRoot.innerHTML = this.render();
                this.__initialized = true;
            }
        }
        render() {
            throw new Error('Not implemented');
        }
    }
}

export {RenderMixin}