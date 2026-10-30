import styled from 'styled-components';

// How wide the small (33%) and large (66%) tiles get at the widest layout, where the page content
// maxes out at 1600px. Narrower screens show them smaller. The browser uses this to pick the
// smallest photo width from srcSet that's still sharp.
const SMALL_TILE_SIZES = '250px';
const LARGE_TILE_SIZES = '500px';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageTileRow = styled.div`
  position: relative;
  display: flex;
  height: calc(50% - 8px);
  gap: 16px;
  z-index: 1;

  ${(p) =>
    p.withMascots &&
    `
      &:before {
        z-index: -1;
        content: '';
        position: absolute;
        top: -100px;
        right: 0;
        background: url('assets/about-us-mascots.svg');
        background-position: top right;
        background-repeat: no-repeat;
        width: 300px;
        height: 152px;
      }
    `}

  ${(p) => p.theme.mediaQueries.mobile} {
    height: auto;

    &:before {
      display: none;
    }
  }
`;

// decoding: async lets the browser decode these photos off the main thread.
const GalleryImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  width: ${(p) => (p.small ? '33%' : '66%')};
  border-radius: 6px;
  object-fit: cover;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 115px;
  }
`;

/**
 * @typedef {{leftImg: import('../utils/GalleryPhotos').GalleryPhoto, rightImg: import('../utils/GalleryPhotos').GalleryPhoto}} ImageTileRow
 */

const Tile = ({ photo, small }) => (
  <GalleryImage
    small={small}
    src={photo.src}
    srcSet={photo.srcSet}
    sizes={small ? SMALL_TILE_SIZES : LARGE_TILE_SIZES}
  />
);

/**
 *
 * @param {{rows: ImageTileRow[]}} props
 */
const ImageTileContainer = ({ rows }) => {
  return (
    <Container>
      {rows.map((row, i) => (
        <ImageTileRow withMascots={i == 0} key={i}>
          <Tile small={i % 2 == 0} photo={row.leftImg} />
          <Tile small={i % 2 == 1} photo={row.rightImg} />
        </ImageTileRow>
      ))}
    </Container>
  );
};

export default ImageTileContainer;
