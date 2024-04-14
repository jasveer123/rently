import React, { useEffect } from 'react'
import Cross from './icons/cross'
import Button from './button'

const BikeModel = ({ onCloseHandler }: { onCloseHandler: () => void }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.4)] z-50">
            <div className="absolute z-[999] p-4 bg-white rounded-[30px] max-w-[35rem]">
                <button
                    onClick={onCloseHandler}
                    type="button"
                    className="text-gray-400 absolute right-3 top-3 bg-transparent rounded-[30px] text-sm w-8 h-8 flex justify-center items-center"
                >
                    <Cross />
                </button>
                <div className="px-6 py-8 text-center">
                    <div className="text-[#FE5B3E] font-bold text-3xl mb-2">
                        Gold Souk mall
                    </div>
                    <div className="font-extralight text-[#082852] mb-2">
                        09:00 AM to 08:00 PM
                    </div>
                    <div className="font-extralight text-[#082852] mb-2">
                        Near Jhawar circle (Jaipur Airport) PIN - 302017
                    </div>
                    <div className="font-extralight text-[#082852] mb-2">
                        9982657294
                    </div>
                    <div className="font-extralight text-[#082852]">
                        Gold Souk mall
                    </div>
                    <div className=" flex mx-auto mt-[10px] justify-center items-center max-w-[200px]">
                        <Button>15 Avaible</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BikeModel
