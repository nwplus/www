import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: ${(p) => p.margin ? p.margin : '0 auto'};
  ${(p) => p.theme.mediaQueries.mobile} {
    max-width: 640px;
    min-width: 320px;
    margin: ${(p) => p.margin ? p.margin : '0 auto'};
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 24px 40px;
  scroll-behaviour: smooth;
  position: relative;
  flex-grow: 1;
  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 8px 16px;
  }
`;

export const ContentContainer = ({ children, id, margin }) => (
  <Wrapper id={id} margin={margin}>
    <Content>{children}</Content>
  </Wrapper>
);
