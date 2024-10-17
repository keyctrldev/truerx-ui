import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const Eye = (props: any) => {
    return (
        <Svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                clipPath="url(#clip0_669_2879)"
                stroke="#1E1E1E"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M1 12.935s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <Path d="M12 15.935a3 3 0 100-6 3 3 0 000 6z" />
            </G>
            <Defs>
                <ClipPath id="clip0_669_2879">
                    <Path fill="#fff" transform="translate(0 .936)" d="M0 0H24V24H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

