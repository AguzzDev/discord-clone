import * as React from "react"

const ManWavingIcon = (props) => (
  <svg
  className="text-graylight"
    aria-hidden="true"
    width={24}
    height={24}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M2.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C10 14 6 10 6 5.5V4H2.5ZM15 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
      <path d="M0 0h24v24H0V0Zm0 0h24v24H0V0Zm0 0h24v24H0V0Z" />
    </g>
  </svg>
)

export default ManWavingIcon
