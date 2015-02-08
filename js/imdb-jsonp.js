import JSONP from 'browser-jsonp';

export default function jsonpSearch (query, fn) {
  if (!query) return;
  query = query.toLowerCase().replace(/ /, '_');

  var callbackName = 'imdb$'+query;
  window[callbackName] = fn;

  JSONP({ url: 'http://sg.media-imdb.com/suggests/' + query[0] + '/' + query + '.json' });
}
