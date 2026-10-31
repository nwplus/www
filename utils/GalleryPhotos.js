// Photos for the About Us gallery, each available at a few widths so browsers download the
// smallest one that's sharp enough for where it's shown (srcSet). They stay JPEGs: the srcset goes
// directly on the <img>, which keeps the gallery's flex layout exactly as it was, and a <picture>
// wrapper (needed for a WebP fallback) would change it.
// ?url keeps small files as separate files instead of inlining them into the page's JS.
import teamSocial1 from '../public/assets/images/team_social_1.jpg';
import teamSocial1W480 from '../public/assets/images/team_social_1-480w.jpg?url';
import teamSocial1W800 from '../public/assets/images/team_social_1-800w.jpg?url';
import teamSocial2 from '../public/assets/images/team_social_2.jpg';
import teamSocial2W480 from '../public/assets/images/team_social_2-480w.jpg?url';
import teamSocial2W800 from '../public/assets/images/team_social_2-800w.jpg?url';
import teamSocial3 from '../public/assets/images/team_social_3.jpg';
import teamSocial3W480 from '../public/assets/images/team_social_3-480w.jpg?url';
import teamSocial3W800 from '../public/assets/images/team_social_3-800w.jpg?url';
import teamSocial3W1200 from '../public/assets/images/team_social_3-1200w.jpg?url';
import teamSocial4 from '../public/assets/images/team_social_4.jpg';
import teamSocial4W480 from '../public/assets/images/team_social_4-480w.jpg?url';

/**
 * @typedef {{ src: string, srcSet: string, alt: string }} GalleryPhoto
 */

/** @returns {GalleryPhoto} */
const photo = (src, alt, widths) => ({
  src,
  alt,
  srcSet: widths.map(([url, width]) => `${url} ${width}w`).join(', '),
});

export const TEAM_SOCIAL_1 = photo(
  teamSocial1,
  'nwPlus team members taking a group selfie around a boardroom table',
  [
    [teamSocial1W480, 480],
    [teamSocial1W800, 800],
    [teamSocial1, 1200],
  ]
);

export const TEAM_SOCIAL_2 = photo(
  teamSocial2,
  'nwPlus team members posing with badminton rackets on a badminton court',
  [
    [teamSocial2W480, 480],
    [teamSocial2W800, 800],
    [teamSocial2, 1200],
  ]
);

export const TEAM_SOCIAL_3 = photo(
  teamSocial3,
  'A large group of nwPlus team members making peace signs on a beach',
  [
    [teamSocial3W480, 480],
    [teamSocial3W800, 800],
    [teamSocial3W1200, 1200],
    [teamSocial3, 1600],
  ]
);

export const TEAM_SOCIAL_4 = photo(
  teamSocial4,
  'nwPlus team members sitting around a fire pit at night',
  [
    [teamSocial4W480, 480],
    [teamSocial4, 828],
  ]
);
