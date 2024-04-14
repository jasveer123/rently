import React from 'react'

const page = () => {
    return (
        <div>
            <div
                id="crypto-modal"
                aria-hidden="true"
                className=" fixed top-0 right-0 left-0 z-10 justify-center  bg-[#000000] opacity-40 items-center w-full h-full max-h-full"
            ></div>
            <div className="absolute z-[999] p-4 w-full mt-[50vh] max-w-[35rem] max-h-full">
                <div className="relative px-[60px] flex flex-col gap-[8px] justify-center items-center bg-white w-full rounded-[30px] py-[35px]">
                    <div className=" text-[#FE5B3E] font-bold  text-[30px] ">
                        Gold Souk mall
                    </div>
                    <div className=" font-extralight text-[#082852] ">
                        09:00 AM to 08:00 PM{' '}
                    </div>
                    <div className=" font-extralight text-[#082852] ">
                        Near Jhawar circle (Jaipur Airport) PIN - 302017
                    </div>
                    <div className=" font-extralight text-[#082852]">
                        9982657294
                    </div>
                    <div className=" font-extralight text-[#082852]">
                        Gold Souk mall
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
