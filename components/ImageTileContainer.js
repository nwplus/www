import styled from 'styled-components';

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

const GalleryImage = styled.img`
  width: ${(p) => (p.small ? '33%' : '66%')};
  border-radius: 6px;
  object-fit: cover;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 115px;
  }
`;

/**
 * @typedef {{leftImg: string, rightImg: string}} ImageTileRow
 */

/**
 *
 * @param {{rows: ImageTileRow[]}} props
 */
const ImageTileContainer = ({ rows }) => {
  return (
    <Container>
      {rows.map((row, i) => (
        <ImageTileRow withMascots={i == 0} key={i}>
          <GalleryImage small={i % 2 == 0} src={row.leftImg} />
          <GalleryImage small={i % 2 == 1} src={row.rightImg} />
        </ImageTileRow>
      ))}
    </Container>
  );
};

export default ImageTileContainer;
