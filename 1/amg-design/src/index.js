import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProjectList from './ProjectList';
import * as serviceWorker from './serviceWorker';
import data from './data'   

ReactDOM.render(<ProjectList builds={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();