import * as React from "react"

const DotsIcons = (props) => (
  <svg
    className="text-graylight"
    aria-hidden="false"
    width={24}
    height={24}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0z" />
      <path
        fill="currentColor"
        d="M12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      />
    </g>
  </svg>
)

export default DotsIcons
