export function throttle (fn, ms) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
    timeout = setTimeout(() => fn.apply(this, arguments), ms);
  };
}
