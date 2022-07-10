import React from 'react'

export default function ResourceFilterTriangle({ displayFilter }) {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" transform={displayFilter ? undefined : "rotate(270)"}>
      <path d="M6.86602 9.5C6.48112 10.1667 5.51887 10.1667 5.13397 9.5L0.803847 2C0.418946 1.33333 0.900072 0.499999 1.66987 0.499999L10.3301 0.5C11.0999 0.5 11.5811 1.33333 11.1962 2L6.86602 9.5Z" fill="#2D2937"/>
    </svg>
  )
}
