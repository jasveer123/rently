import { chooseUs } from '@/constant/dummy-data'
import React from 'react'
import ChooseUsCard from './choose-us-card'

const WhyChooseUs = () => {
    return (
        <div className=" flex py-[60px] px-[122px] bg-white flex-col container mx-auto justify-center items-center">
            <div className="flex w-full flex-col gap-2 py-4 justify-center items-center mb-[60px]">
                <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                    WE ARE ZOOMRIDE
                </span>
                <span className="font-bold  max-w-md text-[18px] text-[#082852]">
                    Why choose us
                </span>
            </div>
            <div className=" flex justify-center  items-center gap-[40px]">
                {chooseUs.map((item, index: number) => (
                    <ChooseUsCard
                        logo={item.logo}
                        key={index}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs
