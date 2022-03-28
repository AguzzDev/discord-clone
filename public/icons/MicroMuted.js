import * as React from "react"

const MicroMuted = (props) => (
  <svg
    className="text-graylight"
    aria-hidden="false"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M6.7 11H5c0 1.19.34 2.3.9 3.28l1.23-1.23c-.27-.62-.43-1.31-.43-2.05ZM9.01 11.085c.005.027.01.055.01.085L15 5.18V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 .03.005.057.01.085ZM11.724 16.093l-.76.76-.71.716c.244.064.493.115.746.151V22h2v-4.28c3.28-.49 6-3.31 6-6.72h-1.7c0 3-2.54 5.1-5.3 5.1a5.29 5.29 0 0 1-.276-.007Z"
      fill="currentColor"
    />
    <path
      d="M21 4.27 19.73 3 3 19.73 4.27 21l4.19-4.18 1.23-1.24 1.66-1.66 3.64-3.64L21 4.27Z"
      className="strikethrough-2Kl6HF"
      fill="currentColor"
    />
  </svg>
)

export default MicroMuted
