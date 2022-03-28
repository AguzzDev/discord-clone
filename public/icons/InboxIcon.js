import * as React from "react"

const InboxIcon = (props) => (
  <svg
  className="text-graylight"
    aria-hidden="false"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2Zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10Z"
      fill="currentColor"
    />
  </svg>
)

export default InboxIcon
