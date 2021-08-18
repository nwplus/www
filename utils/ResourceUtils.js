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

export const MOCK_RESOURCES = [
  <ResourceCard
    name='Ligma'
    event='Coachella'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    badge={BADGE_ICON}
    type={ResourceType.VIDEO}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />,
  <ResourceCard
    name='Ligma'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    badge={BADGE_ICON}
    type={ResourceType.GITHUB}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />,
  <ResourceCard
    name='Ligma'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    type={ResourceType.ARTICLES}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />,
  <ResourceCard
    name='Ligma'
    event='Coachella'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    badge={BADGE_ICON}
    type={ResourceType.VIDEO}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />,
  <ResourceCard
    name='Ligma'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    badge={BADGE_ICON}
    type={ResourceType.GITHUB}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />,
  <ResourceCard
    name='Ligma'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    type={ResourceType.ARTICLES}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
    />,
    <ResourceCard
    name='Ligma'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    badge={BADGE_ICON}
    type={ResourceType.SLIDES}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />,
  <ResourceCard
    name='Ligma'
    year='2022'
    image='https://variety.com/wp-content/uploads/2021/03/coachella-music-festival.jpg'
    type={ResourceType.SLIDES}
    link={'https://www.youtube.com/watch?v=kOHB85vDuow&ab_channel=JYPEntertainment'}
  />
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

