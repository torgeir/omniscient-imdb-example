import React from 'react';
import component from 'omniscient';

import ImdbResult from './imdb-result';
import '../less/imdb-results.less';

import { navigateOnKeys } from './keyboard-nav';

export default component('ImdbResults',
                         ({ results, selected }) =>
  <ul className="imdb-results"
      onKeyDown={ navigateOnKeys }>
    { results.toArray().map((movie, i) =>
        <li key={ i }>
            <ImdbResult isSelected={ selected.get('id') == movie.get('id') } movie={ movie }/>
        </li>) }
  </ul>);
