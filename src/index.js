import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Application from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
const INTERVAL = 90;

ReactDOM.render(
    <Application/>, document.getElementById('root'));
registerServiceWorker();
