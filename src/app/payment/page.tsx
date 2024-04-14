import Button from '@/components/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className=" bg-slate-100">
            <div className="flex gap-[20px] mx-[20px]">
                <div className=" bg-[#ffff] rounded-[10px]  basis-[70%]">
                    <div>
                        <Image
                            width={900}
                            height={621}
                            src="/payment-bike.svg"
                            alt="bike"
                        />
                    </div>
                    <div className=" flex gap-[10px] p-[20px] flex-col">
                        <span className="text-[#FE5B3E] font-bold text-3xl mb-2">
                            TVS Apache 4v
                        </span>
                        <div className=" flex flex-col">
                            <span className=" text-[19px]  font-bold text-[#082852]">
                                Pickup Location
                            </span>
                            <span className="font-extralight text-[#082852]">
                                Gold souk mall near Jhawar circle (Jaipur
                                Airport) PIN - 302017
                            </span>
                        </div>
                        <div className="  flex flex-col">
                            <span className="text-[19px]  font-bold text-[#082852]">
                                Available
                            </span>
                            <span className="font-extralight text-[#082852]">
                                09:00 AM to 08:00 PM
                            </span>
                        </div>
                        <div className=" flex justify-between">
                            <div className=" flex flex-col">
                                <span className="text-[19px]  font-bold text-[#082852]">
                                    KM limit (?)
                                </span>
                                <span className="font-extralight text-[#082852]">
                                    300 KM Allow
                                </span>
                            </div>

                            <div className=" flex flex-col mr-[200px]">
                                <span className="text-[19px]  font-bold text-[#082852]">
                                    Excess KM charges
                                </span>
                                <span className="font-extralight text-[#082852]">
                                    INR 3/KM
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#ffff] rounded-[10px] basis-[40%]">
                    <div className=" flex gap-[10px] p-[20px] flex-col">
                        <div className="w-[541px] px-10 pt-10  bg-white rounded-[20px] flex-col justify-start items-start gap-5 inline-flex">
                            <div className="flex-col justify-start items-center gap-[30px] flex">
                                <div className="flex-col justify-center items-center gap-5 flex">
                                    <div className="flex-col justify-center items-center gap-2.5 flex">
                                        <div className="justify-center items-center gap-[100px] inline-flex">
                                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                                <div className="w-[242px]  opacity-90  font-bold text-[#082852]">
                                                    Vehicle Rental Cost
                                                </div>
                                            </div>
                                            <div className="flex-col justify-center items-center gap-2 inline-flex">
                                                <div className="w-[119px] text-right">
                                                    <span className="opacity-90  font-bold text-[#082852]">
                                                        ₹{' '}
                                                    </span>
                                                    <span className="opacity-90  font-bold text-[#082852]">
                                                        {' '}
                                                        5000
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="justify-center items-center gap-[100px] inline-flex">
                                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                                <div className="w-[242px] opacity-90 font-bold text-[#082852]">
                                                    GST
                                                </div>
                                            </div>
                                            <div className="flex-col justify-center items-center gap-2 inline-flex">
                                                <div className="w-[119px] text-right">
                                                    <span className="opacity-90  font-bold text-[#082852]">
                                                        ₹{' '}
                                                    </span>
                                                    <span className="opacity-90 font-bold text-[#082852]">
                                                        {' '}
                                                        87
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-full border-[0.5px] opacity-60 border-[#082852] "></hr>
                                    <div className="justify-center items-center gap-[63px] inline-flex">
                                        <div className="justify-center items-center gap-[100px] flex">
                                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                                <div className="w-[242px] opacity-90 font-bold text-[#082852]">
                                                    Total Booking Amount
                                                </div>
                                            </div>
                                            <div className="flex-col justify-center items-center gap-2 inline-flex">
                                                <div className="w-[119px] text-right">
                                                    <span className="opacity-90  font-bold text-[#082852]">
                                                        ₹{' '}
                                                    </span>
                                                    <span className="opacity-90  font-bold text-[#082852]">
                                                        {' '}
                                                        5087
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-full border-[0.5px] opacity-60 border-[#082852] "></hr>
                                </div>
                                <div className="w-[456px] px-5 py-2.5 bg-red-500 rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-[15px] font-semibold font-['Montserrat']">
                                        Please carry original Driving License &
                                        Aadhaar <br />
                                        card at the time of vehicle pickup
                                    </div>
                                </div>
                            </div>
                            <div className="text-sky-950 text-[15px] font-semibold font-['Montserrat']">
                                Your money is safe with us - We will refund the
                                <br />
                                booking amount in case of cancellation. Check
                                <br />
                                Cancellation Policy here
                            </div>
                            <hr className="w-full border-[0.5px] opacity-60 border-[#082852] "></hr>
                            <div className="justify-start items-center gap-[37px] inline-flex">
                                <div className="w-[18px] h-[18px] rounded border border-sky-950" />
                                <div className="w-[406px] text-sky-950 text-[15px] font-semibold font-['Montserrat']">
                                    Confirm that you are above 18 years of age
                                    and you agree to all Terms and Conditions
                                </div>
                            </div>
                            <div className="w-[456px]">
                                <Button> PAYMENT ₹5087</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
