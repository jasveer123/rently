import React from 'react'
import Button from './button'
import Image from 'next/image'
import Date from './icons/date'
import Calender from './icons/calender'

const HeroSection = () => {
    return (
        <>
            <Image
                width={0}
                height={0}
                sizes="100vh"
                src="hero-section.svg"
                alt="hero-section"
                className="w-full h-full -z-50"
            />
            <div className="relative container mx-auto flex justify-center flex-col">
                <div className=" bg-[#082852]  mx-auto  gap-[74px]  px-[50px] py-[35px] mt-[-50px]  flex w-full  items-center justify-between rounded-[30px]">
                    <div className="py-[20px] px-[20px] w-full  bg-white rounded-[20px]">
                        Jaipur
                    </div>
                    <div className="py-[20px] flex flex-row justify-between w-full px-[20px]  bg-white rounded-[20px]">
                        <span> Start Trip Date/ Time</span>
                        <Date />
                    </div>
                    <div className="py-[20px] flex flex-row justify-between w-full px-[20px]  bg-white rounded-[20px]">
                        <span> End Trip Date/ Time</span>
                        <Calender />
                    </div>
                    <div className=" w-full flex">
                        <Button
                            styles={{
                                height: '55px',
                            }}
                        >
                            Book Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
