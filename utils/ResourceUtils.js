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
  2020: '2020',
  2021: '2021',
  2023: '2023',
  2024: '2024',
};

export const resourceCategoryMapper = {
  VIDEO: 'videos',
  GITHUB: 'github',
  ARTICLES: 'articles',
  SLIDES: 'slides',
  HACK_CAMP: 'hackcamp',
  NW_HACKS: 'nwhacks',
  CMD_F: 'cmd_f',
  2020: '2020',
  2021: '2021',
  2023: '2023',
  2024: '2024',
};

export const RESOURCES = [
  {
    name: 'Intro to React',
    event: ResourceEvent.CMD_F,
    year: '2024',
    image: 'https://img.youtube.com/vi/LrGwPZwpQCE/hqdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=LrGwPZwpQCE',
  },
  {
    name: 'Intro to Figma',
    event: ResourceEvent.CMD_F,
    year: '2024',
    image: 'https://img.youtube.com/vi/6fPYuoJXOcQ/hqdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=6fPYuoJXOcQ',
  },
  {
    name: 'Intro to Web Development',
    event: ResourceEvent.CMD_F,
    year: '2024',
    image:
      'https://i.ytimg.com/vi/A-45xEvFORk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABsNDki65QoYgwL6hxSYVZKSLVWg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=A-45xEvFORk',
  },
  {
    name: 'Hackathons and Pitching 101',
    event: ResourceEvent.CMD_F,
    year: '2024',
    image: 'https://img.youtube.com/vi/-tDZ70ZrMOE/hqdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=-tDZ70ZrMOE',
  },
  {
    name: 'Networking 101',
    event: ResourceEvent.CMD_F,
    year: '2024',
    image:
      'https://i.ytimg.com/vi/eqx5Yc8bnTQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBguSNw3GSwKlictE4AR8CQfP3hpA',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=eqx5Yc8bnTQ',
  },
  {
    name: 'Intro to APIs',
    event: ResourceEvent.NW_HACKS,
    year: '2024',
    image:
      'https://i.ytimg.com/vi/cXA87rr61kE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQYY_VgBeHN4t9-GCWF7u3ctJ56A',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=cXA87rr61kE',
  },
  {
    name: 'Intro to React',
    event: ResourceEvent.HACK_CAMP,
    year: '2023',
    image: 'https://img.youtube.com/vi/Ty_zuH6UWqw/maxresdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=Ty_zuH6UWqw',
  },
  {
    name: 'Internships 101',
    event: ResourceEvent.HACK_CAMP,
    year: '2023',
    image: 'https://img.youtube.com/vi/6W958vfdYeI/maxresdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=6W958vfdYeI',
  },
  {
    name: 'Intro to Python',
    event: ResourceEvent.HACK_CAMP,
    year: '2023',
    image: 'https://img.youtube.com/vi/8KotW8mLKUo/maxresdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=8KotW8mLKUo',
  },
  {
    name: 'Intro to Design in Figma',
    event: ResourceEvent.HACK_CAMP,
    year: '2023',
    image: 'https://img.youtube.com/vi/QRR-vCzyGOM/maxresdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=QRR-vCzyGOM',
  },
  {
    name: 'Intro to Version Control',
    event: ResourceEvent.HACK_CAMP,
    year: '2023',
    image: 'https://img.youtube.com/vi/9FxbsxhKUFI/maxresdefault.jpg',
    badge: BADGE_ICON,
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=9FxbsxhKUFI',
  },
  {
    name: 'Hackathons 101',
    event: ResourceEvent.HACK_CAMP,
    year: '2023',
    image:
      'https://i.ytimg.com/vi/P1a_0hAgIcE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH30K4Nq_lH9g7TncpogvN-It2CQ',
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=P1a_0hAgIcE',
  },
  {
    name: 'Web Dev for Dummies',
    year: '2020',
    image: 'https://img.youtube.com/vi/R7UxJMAVvLU/maxresdefault.jpg',
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=R7UxJMAVvLU',
  },
  {
    name: 'Git the Basics Workshop',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://img.youtube.com/vi/BjJn4HW_-PI/maxresdefault.jpg',
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=BjJn4HW_-PI',
  },
  {
    name: 'Technical Interview Workshop: Beginner Edition',
    year: '2020',
    image: 'https://img.youtube.com/vi/J7Goi2aF0uw/maxresdefault.jpg',
    type: ResourceType.VIDEO,
    link: 'https://www.youtube.com/watch?v=J7Goi2aF0uw',
  },
  {
    name: 'Behind cmd-f 2021',
    event: ResourceEvent.CMD_F,
    year: '2021',
    image: 'https://miro.medium.com/max/1400/0*IZ2xCECQfJ4tsYqs',
    type: ResourceType.ARTICLES,
    link: 'https://medium.com/nwplusubc/behind-cmd-f-2021-32ef6de26638',
  },
  {
    name: 'Behind nwHacks 2021',
    event: ResourceEvent.NW_HACKS,
    year: '2021',
    image: 'https://miro.medium.com/max/1400/1*cQTv2qABzHhzemU2l885kg.png',
    type: ResourceType.ARTICLES,
    link: 'https://medium.com/nwplusubc/behind-nwhacks-2021-947ede7ef2bd',
  },
  {
    name: 'Behind HackCamp 2020: nwPlus’ first virtual hackathon',
    event: ResourceEvent.HACK_CAMP,
    year: '2020',
    image: 'https://miro.medium.com/max/1400/0*f6s7xt91d0xTG-S-',
    type: ResourceType.ARTICLES,
    link: 'https://medium.com/nwplusubc/behind-hackcamp-2020-nwplus-first-virtual-hackathon-a5b95e50485e',
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

