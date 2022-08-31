import * as React from "react"

const MultipointSvg = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.5 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      stroke="#3E64FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default MultipointSvg
