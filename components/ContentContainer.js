import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  min-width: 960px;
  margin: 0 auto;
  ${(p) => p.theme.mediaQueries.mobile} {
    max-width: 640px;
    min-width: 320px;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 24px 40px;
  scroll-behaviour: smooth;
  position: relative;
  flex-grow: 1;
  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 8px 16px;
  }
`;

export const ContentContainer = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);
