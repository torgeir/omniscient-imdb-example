import React from 'react';
import component from 'omniscient';

import '../less/imdb-result.less';
import {focusWhenSelected} from './focus-mixins';

export default component('ImdbResult',
                         focusWhenSelected,
                         ({movie, isSelected}) => {

  let image = movie.get('image');
  let actors = movie.get('actors');
  let year = movie.get('year');
  let url = movie.get('url');

  var className = "imdb-result" + (isSelected ? " imdb-result--selected" : "")

  return <a href={url} target="_blank" className={className}>
    {image
      ? <div className="imdb-result-image-container"><img src={image}/></div>
      : <span className="imdb-result-image-container"></span>}
    <div className="imdb-result-info">
      <h1 className="imdb-result-heading">{movie.get('title')}</h1>
      {actors
        ?  <p className="imdb-result-starring">Starring {actors} ({movie.get('year')})</p>
        : null }
    </div>
  </a>
});
