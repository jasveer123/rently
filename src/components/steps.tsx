import React from 'react'
import { stepsData } from '@/constant/dummy-data'

const StepsContent = ({
    title,
    logo,
    description,
}: {
    title: string
    logo: React.JSX.Element
    description: string
}) => {
    return (
        <div className=" flex justify-center items-center flex-col p-[12px] gap-[30px]">
            <div>{logo}</div>
            <div className=" flex justify-center items-center flex-col">
                <span className="font-bold  text-[16px] text-[#082852]">
                    {title}
                </span>
                <span className=" font-light text-center max-w-[15rem] text-base text-[#082852]">
                    {description}
                </span>
            </div>
        </div>
    )
}

const Steps = () => {
    return (
        <>
            <div className="flex flex-col gap-2 py-4 justify-center items-center mt-12  container mx-auto">
                <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                    HOW ZOOMRIDE WORKS?
                </span>
                <span className="font-bold  text-[18px] text-[#082852]">
                    Follow these 3 steps
                </span>
            </div>
            <div className=" flex  gap-[100px] justify-center container mx-auto px-[60px] py-[32px]">
                {stepsData.map((item, index: number) => (
                    <StepsContent
                        key={index}
                        title={item.title}
                        logo={item.logo}
                        description={item.Description}
                    />
                ))}
            </div>
        </>
    )
}

export default Steps
