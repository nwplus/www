import React from 'react'

export default function ResourceFilterTriangle({ displayFilter }) {
  return (
    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" transform={displayFilter ? "rotate(180)" : undefined}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.28886 7.15694L0.631863 1.49994L2.04586 0.0859375L6.99586 5.03594L11.9459 0.0859375L13.3599 1.49994L7.70286 7.15694C7.51534 7.34441 7.26103 7.44972 6.99586 7.44972C6.7307 7.44972 6.47639 7.34441 6.28886 7.15694Z" fill="currentColor"/>
    </svg>

    // <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" transform={displayFilter ? "rotate(180)" : undefined}>
    //   <path d="M6.86602 9.5C6.48112 10.1667 5.51887 10.1667 5.13397 9.5L0.803847 2C0.418946 1.33333 0.900072 0.499999 1.66987 0.499999L10.3301 0.5C11.0999 0.5 11.5811 1.33333 11.1962 2L6.86602 9.5Z" fill="currentColor"/>
    // </svg>
  )
}
