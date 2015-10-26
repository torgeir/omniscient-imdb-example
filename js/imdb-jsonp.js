import jsonp from 'browser-jsonp';

export default function jsonpSearch (query, fn) {
  if (!query) return;
  const q = query.toLowerCase().replace(/ /, '_');

  const callbackName = `imdb$${q}`;
  window[callbackName] = fn;

  jsonp({ url: `http://sg.media-imdb.com/suggests/${q[0]}/${q}.json` });
}
