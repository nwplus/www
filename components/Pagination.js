import styled from 'styled-components';

const PaginationContainer = styled.div`
  text-align: center;
`;

const BasePaginationButton = styled.button`
  ${(p) =>
    p.contentUrl &&
    `&:before {
        display: inline-block;
        height: 24px;
        line-height: normal;
        content: url(${p.contentUrl});
    }`}
  font-family: HK Grotesk;
  font-weight: ${(p) => (p.active ? `600` : `normal`)};
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: 'liga' off;

  background: transparent;
  border: none;
  margin: 8px;
  color: ${(p) =>
    p.active ? p.theme.colors.primary : p.theme.colors.secondary};
  &:focus {
    color: ${(p) => p.theme.colors.primary};
  }
  &:hover {
    color: ${(p) => p.theme.colors.primary};
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${(p) => p.theme.colors.tertiary};
    opacity: ${(p) => p.theme.opacity.disabled};
  }
  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 16px;
    line-height: 24px;
    margin: 4px;
  }
`;

export const getClickedPageIndex = (e) =>
  parseInt(e.target.getAttribute('data-index'));

const Pages = ({ count, active, onPageClick }) => {
  const pages = Array.from(Array(count).keys());
  return (
    <>
      {pages.map((_) => (
        <BasePaginationButton
          data-index={_}
          key={_}
          active={_ === active}
          onClick={onPageClick}
        >
          {_ + 1}
        </BasePaginationButton>
      ))}
    </>
  );
};

export default function Pagination({
  count,
  pageIndex,
  onPageClick,
  onPrevClick,
  onNextClick,
}) {
  return (
    <PaginationContainer>
      <BasePaginationButton
        contentUrl='/assets/pagination/prev.svg'
        onClick={onPrevClick}
        disabled={pageIndex === 0}
      />
      <Pages count={count} active={pageIndex} onPageClick={onPageClick} />
      <BasePaginationButton
        contentUrl='/assets/pagination/next.svg'
        onClick={onNextClick}
        disabled={pageIndex === count - 1}
      />
    </PaginationContainer>
  );
}
