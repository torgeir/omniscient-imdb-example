import ImdbStore from './imdb-store';

export const navigateOnKeys = (e) => {
  const keyCode = e.keyCode;
  if (keyCode == 38) {
    e.preventDefault(); // prevent scrolling up
    ImdbStore.selectPrev();
  }
  else if (keyCode == 40) {
    e.preventDefault(); // prevent scrolling up
    ImdbStore.selectNext();
  }
  else if (keyCode == 27) {
    ImdbStore.clear();
  }
  else if (keyCode == 9) {
    e.preventDefault(); // keep track ourselves
    if (e.shiftKey)
      ImdbStore.selectPrev();
    else
      ImdbStore.selectNext();
  }
};
