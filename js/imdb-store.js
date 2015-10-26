import EventEmitter from 'eventemitter3';
import Immutable from 'immutable';
import immstruct from 'immstruct';

import { throttle } from './utils';
import imdbSearch from './imdb-jsonp';

const InitialData = { query: '', results: [], selected: '' };
const data = immstruct(InitialData);

const imdb = new EventEmitter();
export default imdb;

imdb.query = () => data.cursor('query');
imdb.results = () => data.cursor('results');
imdb.selected = () => data.cursor('selected');
imdb.deselect = () => imdb.selected().update((_) => '');
imdb.selectNext = selecter(1, () => imdb.results().first());
imdb.selectPrev = selecter(-1, () => imdb.results().last());
imdb.clear = () => data.cursor().update((_) => Immutable.fromJS(InitialData));
imdb.search = (q) => imdb.query().update((_) => q);

function selecter (offset, defaultSelecter) {
  return () => {
    const selected = imdb.selected();
    if (selected.deref()) {
      const results = imdb.results();
      const cur = results.indexOf(selected);
      const next = cur + offset;
      const nextIsOutOfBounds = (next < 0 || next > results.count() - 1);

      if (nextIsOutOfBounds) {
        imdb.deselect();
        return;
      }

      selected.update((_) => results.get(next).deref());
    }
    else {
      selected.update((_) => defaultSelecter().deref());
    }
  };
}

const parseImdbResponse = (result) => ({
  "id": result.id,
  "title": result.l,
  "actors": result.s,
  "year": result.y,
  "image": result.i && result.i[0].replace(".jpg", "SX200.jpg"), // serve thums max 200 wide
  "url": `http://www.imdb.com/title/${result.id}/`
});

const handleImdbResponse = (results) =>
  imdb.results().update((_) =>
    Immutable.fromJS(results.d.map(parseImdbResponse)));

const throttledSearch = throttle(imdbSearch, 200);
data.on('swap', (newValue, _, path) => {
  if (path == 'query') {
    throttledSearch(newValue.getIn(path), handleImdbResponse);
  }
  imdb.emit('change');
});
