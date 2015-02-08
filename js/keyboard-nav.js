import ImdbStore from './imdb-store';

export let navigateOnArrowKeys = e => {
  let keyCode = e.keyCode;
  if (keyCode == 38)
    ImdbStore.selectPrev();
  else if (keyCode == 40)
    ImdbStore.selectNext();
  else if (keyCode == 27)
    ImdbStore.clear();
};

export let navigateOnTabKeys = e => {
  let keyCode = e.keyCode;
  if (keyCode == 9) {
    e.preventDefault(); // keep track ourselves
    if (e.shiftKey)
      ImdbStore.selectPrev();
    else
      ImdbStore.selectNext();
  }
};
