import * as React from "react"

const HelpIcon = (props) => (
  <svg
    className="text-graylight"
    aria-hidden="false"
    width={24}
    height={24}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10Zm0 16.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm1-4.375V15h-2v-3h1a2 2 0 1 0-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.875Z"
    />
  </svg>
)

export default HelpIcon
