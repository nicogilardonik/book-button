import React from 'react';
import { createRoot } from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import RentButton from './components/RentButton.js';

const customReactDOM = {
    render: (element, container) => {
        if (!customReactDOM.roots) {
            customReactDOM.roots = new WeakMap();
        }

        let root = customReactDOM.roots.get(container);
        if (!root) {
            root = createRoot(container);
            customReactDOM.roots.set(container, root);
        }
        root.render(element);
    }
};

const WebReservationButton = reactToWebComponent(RentButton, React, customReactDOM, {
    props: ['productid', 'companyid']
});

customElements.define('book-button', WebReservationButton);