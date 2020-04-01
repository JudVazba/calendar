function RenderMixin(Super) {
    return class Render extends Super {
        constructor() {
            super();
            this.__initialized = false;
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            super.connectedCallback();
            if(!this.__initialized){
                this.shadowRoot.innerHTML = this.render();
                this.__initialized = true;
            }
        }
    }
}

export { RenderMixin }