import React from 'react';
import component from 'omniscient';

import ImdbStore from './imdb-store';
import '../less/imdb-search.less';
import {focusWhenNotSelected} from './focus-mixins';
import {navigateOnKeys} from './keyboard-nav';

export default component('ImdbSearch',
                         focusWhenNotSelected,
                         ({query}) =>
  <input
    className='imdb-search'
    type='text'
    value={query.deref()}
    onChange={e => ImdbStore.search(e.target.value)}
    onKeyDown={navigateOnKeys}
    />);
