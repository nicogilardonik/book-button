import React from 'react';
import { createRoot } from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import RentButton from './components/RentButton.js';
import styles from '../../index.css?rawc';

const customReactDOM = {
    render: (element, container) => {
        createRoot(container).render(element);
    }
};
console.log('RentButton', RentButton);
const WebReservationButton = reactToWebComponent(RentButton, React, customReactDOM);

const originalConnectedCallback = WebReservationButton.prototype.connectedCallback;
WebReservationButton.prototype.connectedCallback = function () {
    if (this.shadowRoot) {
        const style = document.createElement('style');
        style.textContent = styles;

        this.shadowRoot.prepend(style);
    }
    if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
    }
};

customElements.define('reservation-button', WebReservationButton);