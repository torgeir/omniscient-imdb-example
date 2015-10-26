import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import '../less/index.less';

const render = () =>
  ReactDOM.render(
    App(),
    document.querySelector('.app'));

render();
