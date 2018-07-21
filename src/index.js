import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { getDevice } from './helpers/common';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.device = getDevice();

ReactDOM.render(<App device={window.device} />, document.getElementById('root'));
registerServiceWorker();
