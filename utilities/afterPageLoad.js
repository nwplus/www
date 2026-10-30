// Runs `callback` once the page has finished loading and the browser is idle, so deferred work
// doesn't compete with the initial load. Returns a function that cancels it.
export default function afterPageLoad(callback) {
  let idleId;
  let timeoutId;

  const schedule = () => {
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      timeoutId = window.setTimeout(callback, 1000);
    }
  };

  if (document.readyState === 'complete') {
    schedule();
  } else {
    window.addEventListener('load', schedule, { once: true });
  }

  return () => {
    window.removeEventListener('load', schedule);
    if (idleId !== undefined) {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }
  };
}
