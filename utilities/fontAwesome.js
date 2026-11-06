import { config } from '@fortawesome/fontawesome-svg-core';

// FontAwesome's CSS ships in the page's stylesheet (imported in pages/_app.js), so it's there from
// the first paint. Don't let FontAwesome add it again from JavaScript: until that JavaScript ran,
// every icon was drawn as wide as the screen. Import FontAwesomeIcon from here so this runs first.
config.autoAddCss = false;

export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
