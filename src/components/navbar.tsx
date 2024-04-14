'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { menuLinks } from '@/constant/dummy-data'
import Link from 'next/link'
import Button from './button'
import LoginModel from './login-model'

interface MenuItemsProperties {
    item: string
}

export const MenuItems = ({ item }: MenuItemsProperties) => {
    return (
        <div
            className={`px-4 flex text-base h-[44px]  font-medium text-black items-center`}
        >
            <Link href={menuLinks[item].href}>{item}</Link>
        </div>
    )
}

const Navbar = () => {
    const [model, setModel] = useState<boolean>(false)

    const onClickHandler = () => {
        setModel(true)
    }
    const onCloseHandler = () => {
        setModel(false)
    }

    const [phone, setPhone] = useState('')
    const [currentAction, setCurrentAction] = useState<string>('LOGIN')
    const [dialOtp, setDialOtp] = useState<boolean>(false)
    const [otpValue, setOtpValue] = useState<string>()
    const [error, setError] = useState<string>('')

    const handleAction = (action: string) => {
        setCurrentAction(action)
    }

    const handlePhoneChange = (phone: string) => {
        setPhone(phone)
    }

    const handleSubmit = async () => {
        try {
            const resp = await fetch('api/login', {
                method: 'POST',
                body: JSON.stringify(phone),
            })

            if (resp.ok) {
                setDialOtp(true)
            }

            const apiRespose = await resp.json()
            console.log(apiRespose)
        } catch (error) {
            console.log(error)
        }
    }

    const handletOtp = async () => {
        try {
            const resp = await fetch('api/otp', {
                method: 'POST',
                body: JSON.stringify({ mobNo: phone, otp: otpValue }),
            })
            const apiRespose = await resp.json()
            if (apiRespose.Error === 'Invalid OTP') {
                setError('Invalid OTP')
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(error)

    return (
        <>
            {model && (
                <LoginModel
                    onCloseHandler={onCloseHandler}
                    handletOtp={handletOtp}
                    handleSubmit={handleSubmit}
                    handlePhoneChange={handlePhoneChange}
                    handleAction={handleAction}
                    setOtpValue={setOtpValue}
                    currentAction={currentAction}
                    dialOtp={dialOtp}
                    phone={phone}
                />
            )}
            <div className="relative  w-full ">
                <div className="flex w-full shadow-shadow-1 rounded-[12px] items-center justify-between    bg-slate-100  py-[12px] flex-row gap-8 sm:px-8 px-[18px] ">
                    <Image
                        alt="integration-logo"
                        width="50"
                        height="50"
                        src="logo.svg"
                    />
                    <div className="lg:flex flex-row gap-2 hidden  items-center">
                        {Object.keys(menuLinks).map(
                            (item: string, index: number) => (
                                <MenuItems key={index} item={item} />
                            )
                        )}
                    </div>
                    <div className="flex flex-row gap-3  items-center">
                        <div className="flex flex-row gap-3 ">
                            <Button>Book Now</Button>
                            <Button onClick={onClickHandler}>sign in</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
