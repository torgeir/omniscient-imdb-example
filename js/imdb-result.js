import React from 'react';
import component from 'omniscient';

import '../less/imdb-result.less';
import { focusWhenSelected } from './focus-mixins';

export default component('ImdbResult',
                         focusWhenSelected,
                         ({ movie, isSelected }) => {

  const image = movie.get('image');
  const actors = movie.get('actors');
  const year = movie.get('year');
  const title = movie.get('title');
  const url = movie.get('url');

  const isSelectedClass = isSelected ? " imdb-result--selected" : "";
  const className = `imdb-result${isSelectedClass}`;

  return <a href={ url } target="_blank" className={ className }>
    { image
      ? <div className="imdb-result-image-container"><img src={ image }/></div>
      : <span className="imdb-result-image-container"></span> }
    <div className="imdb-result-info">
      <h1 className="imdb-result-heading">{ title }</h1>
      { actors
        ?  <p className="imdb-result-starring">Starring { actors } ({ year })</p>
        : null }
    </div>
  </a>
});
