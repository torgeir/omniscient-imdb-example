import React from 'react';
import component from 'omniscient';

import ImdbStore from './imdb-store';
import ImdbSearch from './imdb-search';
import ImdbResults from './imdb-results';

import '../less/imdb.less';

const forceUpdateOnImdbResult = {
  componentDidMount: function () {
    ImdbStore.on('change', (_) => this.forceUpdate());
    ImdbStore.search('Clerks');
  }
};

export default component('Imdb',
                         forceUpdateOnImdbResult,
                         () =>
  <div className='imdb'>
    <ImdbSearch query={ ImdbStore.query() } selected={ ImdbStore.selected() } />
    <ImdbResults results={ ImdbStore.results() } selected={ ImdbStore.selected() } />
  </div>);

