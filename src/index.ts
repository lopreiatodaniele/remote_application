import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import App from './App';

const CustomElement = reactToWebComponent(App, React, ReactDOM);

customElements.define('my-custom-element', CustomElement);
