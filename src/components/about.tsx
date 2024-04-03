import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className=" flex mx-auto container gap-[100px] px-[120px] py-[60px] items-start">
            <Image
                src="left-bike.svg"
                alt="left-bike"
                width={0}
                height={0}
                className=" w-[400px] h-[400px]"
            />
            <div className=" flex gap-10 flex-col">
                <div className=" flex w-full ">
                    <div className="flex w-full flex-col gap-2 py-4 justify-center items-start mt-12  container mx-auto">
                        <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                            ABOUT US
                        </span>
                        <span className="font-bold  max-w-md text-[18px] text-[#082852]">
                            Friendly, fast process and good response
                        </span>
                        <span className="font-light w-full text-start max-w-2xl  text-base text-[#082852]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.Ut enim ad minim veniam.
                        </span>
                    </div>
                </div>
                <div className=" flex flex-row  w-full max-w-lg justify-between items-center ">
                    <div className="flex flex-col">
                        <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                            120
                        </span>
                        <span className="font-bold  text-[18px] text-[#082852]">
                            Clients
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                            200
                        </span>
                        <span className="font-bold  text-[18px] text-[#082852]">
                            Products
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className=" text-[#FE5B3E]  text-[24px] font-normal capitalize tracking-wide">
                            180
                        </span>
                        <span className="font-bold  text-[18px] text-[#082852]">
                            company
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
