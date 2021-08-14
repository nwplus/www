import styled, { css } from "styled-components";

const SetBackground = css`
  ${(p) => p.background && `background: ${p.background}`};
`;

const SetColor = css`
  ${(p) => p.color && `color: ${p.color}`};
`;

export const LargeTitle = styled.h1.attrs((p) => ({
  color: p.color || p.theme.colors.secondary,
}))`
  margin: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 56.83px;
  letter-spacing: 0.04em;
  ${SetColor}
  ${SetBackground}
  ${(p) =>
    p.withGradient &&
    `background: -webkit-linear-gradient(92deg, #19cbcb 1.55%, #78ff96 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`}
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 32px;
  }
`;

export const Title2 = styled.h2.attrs((p) => ({
  color: p.color || p.theme.colors.secondary,
}))`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.26px;
  font-feature-settings: "liga" off;
  ${SetColor}
  ${SetBackground}
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Body = styled.p.attrs((p) => ({
  color: p.color || p.theme.colors.typography.body,
}))`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.43px;
  ${SetColor}
  ${SetBackground}
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 14px;
    line-height: 24px;
  }
`;
