import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { analytics } from '../utilities/firebase';

export const SCREEN_BREAKPOINTS = {
  xs: 576,
  mobile: 768,
  tablet: 992,
  tabletLarge: 1024,
  desktop: 1200,
};
// export const BANNER_OFFSET = 134;

const theme = {
  colors: {
    primary: '#20FFAF',
    primaryGradient: 'linear-gradient(92.58deg, #20FFAF 0%, #78FF96 100%)',
    shadedGradient:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 47.69%, rgba(0, 0, 0, 0.8) 100%)',
    secondary: '#fff',
    tertiary: '#E2D6FF',
    metadata: '#BDBAC3',
    disabled: 'rgba(255, 255, 255, 0.6)',
    background: '#2C2543',
    typography: {
      body: '#F1F6FD',
    },
  },
  opacity: {
    disabled: '0.6',
  },
  mediaQueries: {
    xs: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.xs}px)`,
    mobile: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.mobile}px)`,
    tablet: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tablet}px)`,
    tabletLarge: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.tabletLarge}px)`,
    desktop: `@media only screen and (max-width: ${SCREEN_BREAKPOINTS.desktop}px)`,
  },
};

export default function MyApp({ Component, pageProps }) {
  // Initialize analytics
  useEffect(() => {
    if (process.env.DEPLOY_ENV == 'PRODUCTION') {
      analytics();
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
