import * as React from "react"

const ConfigIcon = (props) => (
  <svg
    aria-hidden="false"
    className="text-graylight"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.738 10H22v4h-2.261a7.952 7.952 0 0 1-1.174 2.564L20 18l-2 2-1.435-1.436A7.946 7.946 0 0 1 14 19.738V22h-4v-2.262a7.94 7.94 0 0 1-2.564-1.174L6 20l-2-2 1.436-1.436A7.911 7.911 0 0 1 4.262 14H2v-4h2.262a7.9 7.9 0 0 1 1.174-2.564L4 6l2-2 1.436 1.436A7.9 7.9 0 0 1 10 4.262V2h4v2.261a7.967 7.967 0 0 1 2.565 1.174L18 3.999l2 2-1.436 1.437A7.93 7.93 0 0 1 19.738 10ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
)

export default ConfigIcon
