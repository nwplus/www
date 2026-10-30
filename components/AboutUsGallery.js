import React, { useEffect, useRef, useState } from 'react';
import ImageTileContainer from './ImageTileContainer';
import Carousel from './Carousel';
import styled from 'styled-components';
import { SCREEN_BREAKPOINTS } from '../pages/_app';
import onFirstInteraction from '../utilities/onFirstInteraction';

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

// Takes up exactly the space of GalleryVideo until the iframe is mounted. inline-block makes it
// sit on the text baseline the same way the (inline) iframe does.
const GalleryVideoPlaceholder = styled.div`
  display: inline-block;
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 225px;
  }
`;

const Image = styled.img.attrs({ loading: 'lazy' })`
  height: 400px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 6px;
  object-fit: cover;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 225px;
  }
`;

const MobileLayout = styled.div`
  width: 100%;
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
  }
`;

const DesktopLayout = styled.div`
  width: 100%;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

// The YouTube embed pulls in about 1 MB of scripts, so it's kept off the initial load. It's
// mounted as soon as the visitor starts interacting with the page (they'll be scrolling toward
// it), or right away if it's already in view.
function GalleryVideoEmbed({ src }) {
  const placeholderRef = useRef(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setShouldMount(true);
      return undefined;
    }
    let observer;
    let cancelOnInteraction;
    const mount = () => {
      observer.disconnect();
      cancelOnInteraction();
      setShouldMount(true);
    };
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        mount();
      }
    });
    observer.observe(placeholderRef.current);
    cancelOnInteraction = onFirstInteraction(mount);
    return () => {
      observer.disconnect();
      cancelOnInteraction();
    };
  }, []);

  if (!shouldMount) {
    return <GalleryVideoPlaceholder ref={placeholderRef} />;
  }

  return (
    <GalleryVideo
      src={src}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerpolicy='strict-origin-when-cross-origin'
      allowFullScreen
    ></GalleryVideo>
  );
}

/**
 *
 * @param {{ videoSrc: string, images: import('./ImageTileContainer').ImageTileRow[] }} param0
 * @returns
 */
function AboutUsGallery({ videoSrc, images }) {
  // null until mounted. The server can't know the viewport, so both layouts are rendered and CSS
  // shows the right one; after mounting, only the visible layout stays mounted.
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const query = window.matchMedia(
      `(max-width: ${SCREEN_BREAKPOINTS.mobile}px)`
    );
    const update = () => setIsMobile(query.matches);
    update();
    // Safari < 14 only supports the older addListener API.
    if (query.addEventListener) {
      query.addEventListener('change', update);
      return () => query.removeEventListener('change', update);
    }
    query.addListener(update);
    return () => query.removeListener(update);
  }, []);

  return (
    <>
      {isMobile !== false && (
        // Once we know it's the mobile layout, show it in every medium (including print), not
        // only on screen.
        <MobileLayout style={isMobile ? { display: 'block' } : undefined}>
          <Carousel
            items={[
              <GalleryVideoEmbed src={videoSrc} key='video' />,
              ...images.flatMap((imgTileRow) => [
                <Image src={imgTileRow.leftImg} key={imgTileRow.leftImg} />,
                <Image src={imgTileRow.rightImg} key={imgTileRow.rightImg} />,
              ]),
            ]}
          />
        </MobileLayout>
      )}
      {isMobile !== true && (
        <DesktopLayout>
          <GalleryContainer>
            <GalleryVideoEmbed src={videoSrc} />
            <ImageTileContainer rows={images} />;
          </GalleryContainer>
        </DesktopLayout>
      )}
    </>
  );
}

export default AboutUsGallery;
