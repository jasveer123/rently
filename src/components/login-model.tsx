'use client'
import Button from '@/components/button'
import Cross from '@/components/icons/cross'
import React, { Dispatch } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { useEffect } from 'react'

const Page = ({
    onCloseHandler,
    handletOtp,
    handleSubmit,
    handlePhoneChange,
    handleAction,
    setOtpValue,
    currentAction,
    dialOtp,
    phone,
}: {
    handlePhoneChange: (phone: string) => void
    handleAction: (action: string) => void
    setOtpValue: Dispatch<React.SetStateAction<string | undefined>>
    currentAction: string
    dialOtp: boolean
    handletOtp: () => Promise<void>
    handleSubmit: () => Promise<void>
    onCloseHandler: () => void
    phone: string
}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])
    const Login = () => (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                    <span className="mb-[10px]">
                        {dialOtp ? 'Enter Otp' : 'Mobile Number'}{' '}
                    </span>
                    {dialOtp ? (
                        <input
                            className=" border-[1px] opacity-50 text-[12px] rounded-[10px]  outline-none  py-2 px-3 border-[#7C7C7C]"
                            placeholder="Enter Yout OTP"
                            onChange={(event) =>
                                setOtpValue(event.target.value)
                            }
                        />
                    ) : (
                        <PhoneInput
                            disableDialCodeAndPrefix
                            defaultCountry="in"
                            inputClassName="text-black"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter your phone number"
                        />
                    )}
                </div>
            </div>

            <div className="flex mx-auto w-[231px] items-center">
                <Button onClick={dialOtp ? handletOtp : handleSubmit}>
                    Login
                </Button>
            </div>
        </>
    )

    const SignUP = () => (
        <>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full">
                    <span className="mb-[10px]">Enter OTP</span>
                    <input
                        className=" border-[1px] opacity-50 text-[12px] rounded-[10px]  outline-none  py-2 px-3 border-[#7C7C7C]"
                        placeholder="Enter Yout OTP"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full mx-auto items-center">
                <div className="flex justify-center items-center">
                    <span className="text-[12px] mb-[19px]">
                        Didnt Receive SMS Resend otp
                    </span>
                </div>
                <div className="w-[231px] ">
                    <Button>Confirm OTP</Button>
                </div>
            </div>
        </>
    )

    return (
        <div className="relative flex justify-center items-center">
            <div
                id="crypto-modal"
                aria-hidden="true"
                className=" fixed top-0 right-0 left-0 z-10 justify-center  bg-[#000000] opacity-40 items-center w-full h-full max-h-full"
            ></div>
            <div className="absolute z-[999] p-4 w-full mt-[50vh] max-w-[35rem] max-h-full">
                <div className="relative bg-white w-full rounded-[30px]">
                    <div className="flex items-center w-full justify-between pt-[5px] border-b rounded-t">
                        <div className="flex w-full  items-center">
                            <button
                                className={`px-[100px] ${currentAction === 'LOGIN' && 'border-[#FE5B3E] text-[#FE5B3E]'} border-b-2  py-[15px]`}
                                onClick={() => handleAction('LOGIN')}
                            >
                                LOGIN
                            </button>
                            <button
                                className={`px-[100px] ${currentAction === 'SIGNUP' && 'border-[#FE5B3E] text-[#FE5B3E]'} border-b-2  py-[15px]`}
                                onClick={() => handleAction('SIGNUP')}
                            >
                                SIGN UP
                            </button>
                        </div>
                        <button
                            onClick={onCloseHandler}
                            type="button"
                            className="text-gray-400 absolute -right-2 -top-2 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="static-modal"
                        >
                            <Cross />
                        </button>
                    </div>
                    <div className="flex flex-col gap-[50px] mt-[20px] px-[90px]">
                        {currentAction === 'LOGIN' && Login()}
                        {currentAction === 'SIGNUP' && SignUP()}
                    </div>
                    <div className="flex justify-center items-center">
                        <span className="py-[19px] text-[12px]">
                            By continuing you agree to the Privacy Policy of
                            zoomride
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
