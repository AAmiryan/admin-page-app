import * as React from "react"

const AdminIcon = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={20} cy={20} r={20} fill="#D9D9D9" />
    <path
      d="M20 7.167 9.5 11.833v7c0 6.475 4.48 12.53 10.5 14 6.02-1.47 10.5-7.525 10.5-14v-7L20 7.167Zm0 4.55a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 9.216c2.333 0 7 1.272 7 3.594a8.398 8.398 0 0 1-14 0c0-2.322 4.667-3.594 7-3.594Z"
      fill="#fff"
    />
  </svg>
)

export default AdminIcon