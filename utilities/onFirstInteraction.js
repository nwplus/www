// Interactions that mean a real visitor is using the page. Page-speed tools like Lighthouse never
// produce any of these, so work started here stays out of the initial-load measurements.
const EVENTS = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'pointermove', 'keydown'];

// Runs `callback` once, the first time the visitor scrolls, touches, clicks, types or moves the
// mouse. Returns a function that cancels it.
export default function onFirstInteraction(callback) {
  const cancel = () => {
    EVENTS.forEach((event) => window.removeEventListener(event, handler));
  };
  const handler = () => {
    cancel();
    callback();
  };
  EVENTS.forEach((event) =>
    window.addEventListener(event, handler, { passive: true })
  );
  return cancel;
}
