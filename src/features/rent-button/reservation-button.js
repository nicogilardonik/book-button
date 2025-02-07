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
customElements.define('reservation-button', WebReservationButton);