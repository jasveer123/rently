import React, { ReactNode } from 'react'

const ChooseUsCard = ({
    title,
    description,
    logo,
}: {
    title: string
    description: string
    logo: ReactNode
}) => {
    return (
        <div className="flex justify-center  rounded-[18px] border border-[#E8E6E6]  flex-col items-start p-[30px] gap-[30px]">
            <span>{logo}</span>
            <div className=" flex flex-col gap-2  justify-center items-start">
                <span className="font-bold  text-[16px] text-[#082852]">
                    {title}
                </span>
                <span className=" font-light text-base max-w-[250px] text-[#082852]">
                    {description}
                </span>
            </div>
        </div>
    )
}

export default ChooseUsCard
