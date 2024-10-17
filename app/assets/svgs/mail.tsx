import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Mail = (props:any) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M29.333 8c0-1.467-1.2-2.667-2.666-2.667H5.332A2.675 2.675 0 002.666 8m26.667 0v16c0 1.466-1.2 2.666-2.666 2.666H5.332A2.674 2.674 0 012.666 24V8m26.667 0L16 17.333 2.666 8"
        stroke="#1E1E1E"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}