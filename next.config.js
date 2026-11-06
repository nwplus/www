const fs = require('fs')
const path = require('path')
const withOptimizedImages = require('next-optimized-images')

// Organizer photos that have a WebP copy next to the PNG. Team.js serves those to browsers that
// support WebP; a photo added without one just keeps using the PNG.
const PROFILE_WEBPS = fs
  .readdirSync(path.join(__dirname, 'public/assets/profiles'))
  .filter((file) => file.endsWith('.webp'))
  .join(',')

// The site's Firebase web config. It isn't secret: it ships in every page. Local dev uses it too,
// so `pnpm dev` shows real content, unless NEXT_ENV_FIREBASE_PROJECT_ID is set, in which case all
// the NEXT_ENV_FIREBASE_* variables are used instead (never a mix of the two projects).
const FIREBASE_CONFIG = {
  API_KEY: 'AIzaSyDGa7alU0NhfBATSQ6CalkY4Za9wWPrM7o',
  AUTH_DOMAIN: 'nwplus-ubc.firebaseapp.com',
  DATABASE_URL: 'https://nwplus-ubc.firebaseio.com',
  PROJECT_ID: 'nwplus-ubc',
  STORAGE_BUCKET: 'nwplus-ubc.appspot.com',
  MEASUREMENT_ID: 'G-BT2W7DSL1G',
  MESSAGING_SENDER_ID: '306881258768',
  APP_ID: '1:306881258768:web:bc922148732abee79f7195',
}

const firebaseEnv = ({ allowOverrides }) => {
  const useEnvVars = allowOverrides && Boolean(process.env.NEXT_ENV_FIREBASE_PROJECT_ID)
  return Object.fromEntries(
    Object.entries(FIREBASE_CONFIG).map(([key, value]) => [
      `NEXT_PUBLIC_FIREBASE_${key}`,
      useEnvVars ? process.env[`NEXT_ENV_FIREBASE_${key}`] : value,
    ])
  )
}

module.exports = () => {
  if (process.env.DEPLOY_ENV !== 'PRODUCTION') {
    return withOptimizedImages({
      reactStrictMode: true,
      poweredByHeader: false,
      trailingSlash: true,
      images: {
        disableStaticImages: true,
        loader: 'akamai',
        path: '',
      },
      optipng: {
        optimizationLevel: 4,
      },
      env: {
        ...firebaseEnv({ allowOverrides: true }),
        PROFILE_WEBPS,
      },
    });
  }
  return withOptimizedImages({
    poweredByHeader: false,
    trailingSlash: true,
    images: {
      disableStaticImages: true,
      loader: 'akamai',
      path: '',
    },
    optipng: {
      optimizationLevel: 4,
    },
    env: {
      ...firebaseEnv({ allowOverrides: false }),
      PROFILE_WEBPS,
    },
  });
}
