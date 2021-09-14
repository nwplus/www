const VIDEO_ICON = 'assets/logos/video-icon.svg';
const GITHUB_ICON = 'assets/logos/github-icon.svg';
const MEDIUM_ICON = 'assets/logos/medium-icon.svg';
const SLIDES_ICON = 'assets/logos/slides-icon.svg'
const BADGE_ICON = 'assets/logos/our-pick-badge.svg';

export const FILTER_TYPE = 'TYPE';
export const FILTER_EVENT = 'EVENT';
export const FILTER_YEAR = 'YEAR';

export const ResourceType = {
  VIDEO: 'Videos',
  GITHUB: 'GitHub',
  ARTICLES: 'Articles',
  SLIDES: 'PPT Slides'
}

export const ResourceEvent = {
  HACK_CAMP: 'HackCamp',
  NW_HACKS: 'nwHacks',
  CMD_F: 'cmd-f'
}

export const ResourceYear = {
  2019: '2019',
  2020: '2020',
  2021: '2021'
}

export const resourceCategoryMapper = {
  VIDEO: 'videos',
  GITHUB: 'github',
  ARTICLES: 'articles',
  SLIDES: 'slides',
  HACK_CAMP: 'hackcamp',
  NW_HACKS: 'nwhacks',
  CMD_F: 'cmd_f',
  2019: '2019',
  2020: '2020',
  2021: '2021'
}

export const RESOURCES = [
  {
    name: 'Web Dev for Dummies',
    event: ResourceEvent.NW_HACKS,
    year: '2020',
    image: 'https://i.ytimg.com/vi/R7UxJMAVvLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWdHwEkVTw0mR8hmb0UwxMI0CcYQ',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=R7UxJMAVvLU'
  },
];

export const getResourceIcon = (type) => {
  switch (type) {
    case ResourceType.VIDEO:
      return VIDEO_ICON;
    case ResourceType.GITHUB:
      return GITHUB_ICON;
    case ResourceType.ARTICLES:
      return MEDIUM_ICON;
    case ResourceType.SLIDES:
      return SLIDES_ICON;
  }
}

