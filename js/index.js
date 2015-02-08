import React from 'react';
import component from 'omniscient';

import App from './app';
import '../less/index.less';

let render = () =>
  React.render(
    App(),
    document.body);

render();
