import ResourceCard from "../components/ResourceCard";

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

export const MOCK_RESOURCES_DATA = [
  {
    name: 'hackcamp video 2020',
    event: ResourceEvent.HACK_CAMP,
    year: '2020',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'nwhacks video 2019',
    event: ResourceEvent.NW_HACKS,
    year: '2019',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'cmd-f github 2021',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.GITHUB,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'hackcamp github 2020',
    event: ResourceEvent.HACK_CAMP,
    year: '2020',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.GITHUB,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'nwhacks github 2019',
    event: ResourceEvent.NW_HACKS,
    year: '2019',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.GITHUB,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'cmd-f articles 2021',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.ARTICLES,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'hackcamp articles 2020',
    event: ResourceEvent.HACK_CAMP,
    year: '2020',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.ARTICLES,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'nwhacks slides 2019',
    event: ResourceEvent.NW_HACKS,
    year: '2019',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.SLIDES,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'cmd-f video 2021',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'nwHacks articles 2019',
    event: ResourceEvent.NW_HACKS,
    year: '2019',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.ARTICLES,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'hackcamp slides 2020',
    event: ResourceEvent.HACK_CAMP,
    year: '2020',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.SLIDES,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
  {
    name: 'nwhacks articles 2020',
    event: ResourceEvent.NW_HACKS,
    year: '2020',
    image: 'https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg',
    badge: BADGE_ICON,
    type: ResourceType.ARTICLES,
    link: 'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'
  },
]

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
