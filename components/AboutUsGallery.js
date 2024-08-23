import React, { useEffect, useState } from 'react';
import ImageTileContainer from './ImageTileContainer';
import Carousel from './Carousel';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 100%;
  gap: 16px;

  & > * {
    flex-basis: 50%;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    height: auto;

    & > * {
      flex-basis: auto;
    }
  }
`;

const GalleryVideo = styled.iframe`
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 225px;
  }
`;

const Image = styled.img`
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  object-fit: cover;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 225px;
  }
`;

/**
 *
 * @param {{ videoSrc: string, images: import('./ImageTileContainer').ImageTileRow[] }} param0
 * @returns
 */
function AboutUsGallery({ videoSrc, images }) {
  const [width, setWidth] = useState(0);
  const mobileBreakpoint = 768;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width <= mobileBreakpoint ? (
    <Carousel
      items={[
        <GalleryVideo
          src={videoSrc}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowFullScreen
          key='video'
        ></GalleryVideo>,
        ...images.flatMap((imgTileRow) => [
          <Image src={imgTileRow.leftImg} key={imgTileRow.leftImg} />,
          <Image src={imgTileRow.rightImg} key={imgTileRow.rightImg} />,
        ]),
      ]}
    />
  ) : (
    <GalleryContainer>
      <GalleryVideo
        src={videoSrc}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></GalleryVideo>
      <ImageTileContainer rows={images} />;
    </GalleryContainer>
  );
}

export default AboutUsGallery;
