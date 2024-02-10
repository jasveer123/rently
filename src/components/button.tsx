import React, { CSSProperties, ReactNode } from 'react'

interface ButtonProperties {
    children: string
    icon?: () => ReactNode
    onClick?: () => void
    styles?: CSSProperties
    textStyle?: string
}

const Button = ({
    children,
    icon,
    onClick,
    styles,
    textStyle,
}: ButtonProperties) => {
    return (
        <button
            onClick={onClick}
            style={styles}
            className={`flex items-center h-[44px] w-full bg-[#FE5B3E] rounded-full gap-[10px] justify-center px-6`}
        >
            <span
                className={` ${textStyle ?? ' text-white'} text-base font-normal tracking-[150%]`}
            >
                {children}
            </span>
            {icon && (
                <span className="text-base  tracking-[-.32px] leading-[32px]">
                    {icon && icon()}
                </span>
            )}
        </button>
    )
}

export default Button
