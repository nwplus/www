import styled from 'styled-components';

export const Background = styled.main`
  background: url(/assets/lines_w_noise.svg);
  background-color: ${(p) => p.theme.colors.background};
  background-size: cover;
`;
