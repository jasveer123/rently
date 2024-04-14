import React from 'react'

const Cross = () => {
    return (
        <svg
            width="72"
            height="73"
            viewBox="0 0 72 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_2139_46)">
                <rect
                    x="4"
                    y="0.774414"
                    width="64"
                    height="64"
                    rx="32"
                    fill="white"
                    shapeRendering="crispEdges"
                />
                <path
                    d="M48 20.7744L24 44.7744M24 20.7744L48 44.7744"
                    stroke="#FE5B3E"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_2139_46"
                    x="0"
                    y="0.774414"
                    width="72"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2139_46"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2139_46"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

export default Cross
