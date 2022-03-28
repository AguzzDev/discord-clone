import * as React from "react"

const NewMessageIcon = (props) => (
  <svg
    className="text-graylight" 
    aria-hidden="false"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.998 0v3h3v2h-3v3h-2V5h-3V3h3V0h2Zm-18 20v4l5.334-4h6.666c1.104 0 2-.897 2-2V9a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v9c0 1.103.896 2 2 2h1Z"
    />
  </svg>
)

export default NewMessageIcon
