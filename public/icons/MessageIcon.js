import * as React from "react"

const MessageIcon = (props) => (
  <svg
    className="text-graylight"
    aria-hidden="false"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.798 3a1.8 1.8 0 0 0-1.8 1.8v10.8a1.8 1.8 0 0 0 1.8 1.8h2.7V21l3.6-3.6h8.1a1.8 1.8 0 0 0 1.8-1.8V4.8a1.8 1.8 0 0 0-1.8-1.8h-14.4Z"
    />
  </svg>
)

export default MessageIcon