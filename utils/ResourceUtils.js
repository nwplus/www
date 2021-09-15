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
    year: '2020',
    image: 'https://i.ytimg.com/vi/R7UxJMAVvLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWdHwEkVTw0mR8hmb0UwxMI0CcYQ',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=R7UxJMAVvLU'
  },
  {
    name: 'Git the Basics Workshop',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://i.ytimg.com/an_webp/BjJn4HW_-PI/mqdefault_6s.webp?du=3000&sqp=CNzBhIoG&rs=AOn4CLCKvA-rF5Obce1IYBVBmWEdozlo7Q',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=BjJn4HW_-PI'
  },
  {
    name: 'Technical Interview Workshop: Beginner Edition',
    year: '2020',
    image: 'https://i.ytimg.com/vi/J7Goi2aF0uw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqoUcsCe75F6Krxl_QUpx9hZeGWQ',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=J7Goi2aF0uw'
  },
  {
    name: 'Behind cmd-f 2021',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://miro.medium.com/max/1400/0*IZ2xCECQfJ4tsYqs',
    type: ResourceType.ARTICLES,
    link: 'https://medium.com/nwplusubc/behind-cmd-f-2021-32ef6de26638'
  },
  {
    name: 'Behind nwHacks 2021',
    event: ResourceEvent.NW_HACKS,
    year: '2021',
    image: 'https://miro.medium.com/max/1400/1*cQTv2qABzHhzemU2l885kg.png',
    type: ResourceType.ARTICLES,
    link: 'https://medium.com/nwplusubc/behind-nwhacks-2021-947ede7ef2bd'
  },
  {
    name: 'Behind HackCamp 2020: nwPlus’ first virtual hackathon',
    event: ResourceEvent.HACK_CAMP,
    year: '2020',
    image: 'https://miro.medium.com/max/1400/0*f6s7xt91d0xTG-S-',
    type: ResourceType.ARTICLES,
    link: 'https://medium.com/nwplusubc/behind-hackcamp-2020-nwplus-first-virtual-hackathon-a5b95e50485e'
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

