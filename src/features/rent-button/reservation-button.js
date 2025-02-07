import React from 'react';
import { createRoot } from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import RentButton from './components/RentButton.js';

const customReactDOM = {
    render: (element, container) => {
        createRoot(container).render(element);
    }
};
console.log('RentButton', RentButton);
const WebReservationButton = reactToWebComponent(RentButton, React, customReactDOM);

WebReservationButton.prototype.connectedCallback = function () {
    if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
    }

    const style = document.createElement('style');
    style.textContent = `
        @import url('../../tailwind.css');
    `;

    this.shadowRoot.prepend(style);
};

customElements.define('reservation-button', WebReservationButton);