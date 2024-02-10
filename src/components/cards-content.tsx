import React from 'react'
import Image from 'next/image'
import SmallBike from './icons/small-bike'
import Case from './icons/case'
import Button from './button'
import { cardData } from '@/constant/dummy-data'

export const Card = ({ name }: { name: string }) => {
    return (
        <div className=" flex p-[32px]  rounded-[18px] border border-[#E8E6E6]  justify-center items-center flex-col gap-4">
            <div className="flex flex-col gap-2 justify-center items-start">
                <Image
                    src="bike.svg"
                    alt="img"
                    width={0}
                    height={0}
                    className=" w-[300px] h-[300px]"
                />
                <span className="font-bold  text-[18px] text-[#082852]">
                    {name}
                </span>
                <div className=" flex gap-4 justify-center items-center">
                    <div className=" flex items-center flex-row gap-1">
                        <SmallBike />
                        <span className="font-light text-center  text-base text-[#082852]">
                            90 km Allow
                        </span>
                    </div>
                    <div className="flex  items-center flex-row gap-1">
                        <Case />
                        <span className="font-light text-center  text-base text-[#082852]">
                            Zero deposit
                        </span>
                    </div>
                </div>
            </div>
            <Button>BOOK NOW</Button>
        </div>
    )
}

const CardsContent = () => {
    return (
        <div className=" container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2 py-4 justify-center items-center  container mx-auto">
                <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                    BIKES
                </span>
                <span className="font-bold  text-[18px] text-[#082852]">
                    Select a your favorite bike
                </span>
            </div>
            <div className="justify-center gap-4 items-center grid grid-cols-3">
                {cardData.map((item, index: number) => (
                    <Card key={index} name={item.name} />
                ))}
            </div>
        </div>
    )
}

export default CardsContent
