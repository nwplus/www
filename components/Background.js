import styled from 'styled-components';

export const BackgroundColor = styled.main`
  background-color: ${(p) => p.theme.colors.background};
`;

export const WithLines = styled.div`
  background: url(/assets/lines_w_noise.svg);
  background-size: cover;
`;

export const Background = ({ children }) => (
  <BackgroundColor>
    <WithLines>{children}</WithLines>
  </BackgroundColor>
);