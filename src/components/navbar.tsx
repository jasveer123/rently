'use client'
import Image from 'next/image'
import React from 'react'
import { menuLinks } from '@/constant/dummy-data'
import Link from 'next/link'
import Button from './button'

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
    return (
        <div className="relative container mx-auto">
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
                    <div className="sm:block hidden">
                        <Button>Book Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
