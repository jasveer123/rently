'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { menuLinks } from '@/constant/dummy-data'
import Link from 'next/link'
import Button from './button'
import LoginModel from './login-model'
import OtpModel from './otp-model'

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
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [optModel, setOtpModel] = useState<boolean>(false)
    const [otp, setOtp] = useState<string>('')

    const onClickHandler = () => {
        setModel(true)
    }
    const onCloseHandler = () => {
        setModel(false)
    }

    const onClickLogin = async (event: any) => {
        event.preventDefault()
        const resp = await fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(phoneNumber),
        })
        const data = await resp.json()
        console.log(data)

        if (resp.ok) {
            setOtpModel(true)
            setModel(false)
        }
    }
    const onClickOtp = async (event: any) => {
        event.preventDefault()
        const resp = await fetch('/api/otp', {
            method: 'post',
            body: JSON.stringify({ mobNo: phoneNumber, otp: otp }),
        })
        const data = await resp.json()
        console.log(data)

        if (resp.ok) {
            setOtpModel(false)
        }
    }

    const onCloseOtp = () => {
        setOtpModel(false)
    }

    return (
        <div className="relative container mx-auto">
            {model && (
                <LoginModel
                    setPhoneNumber={setPhoneNumber}
                    onClickHandler={onClickLogin}
                    onCloseHandler={onCloseHandler}
                />
            )}
            {optModel && (
                <OtpModel
                    setOtp={setOtp}
                    onClickHandler={onClickOtp}
                    onCloseHandler={onCloseOtp}
                />
            )}
            <div className="flex shadow-shadow-1 rounded-[12px] items-center justify-between container mx-auto   bg-white  py-[12px] flex-row gap-8 sm:px-8 px-[18px] ">
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
    )
}

export default Navbar
