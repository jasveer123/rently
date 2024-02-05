'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface MenuItemsProperties {
    item: string
}

export const MenuItems = ({ item }: MenuItemsProperties) => {
    const router = usePathname()
    const isActive = router === menuLinks[item].href
    return (
        <div
            className={`px-4 flex text-base opacity-80 h-[44px] font-normal text-[#000D3D] items-center ${isActive ? 'font-semibold rounded-[100px] bg-slate-200 ' : 'opacity-100'} `}
        >
            <Link href={menuLinks[item].href}>{item}</Link>
        </div>
    )
}

const Navbar = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <div className="relative container mx-auto">
            <div className="flex mt-[48px] shadow-shadow-1 rounded-[12px] items-center justify-between container mx-auto   bg-white  py-[12px] flex-row gap-8 sm:px-8 px-[18px] ">
                <Image
                    alt="integration-logo"
                    width="300"
                    height="500"
                    src="/Images/logo.svg"
                />
                <div className="lg:flex flex-row gap-2 mr-auto hidden  items-center">
                    {Object.keys(menuLinks).map(
                        (item: string, index: number) => (
                            <MenuItems key={index} item={item} />
                        )
                    )}
                </div>
                <div className="flex flex-row gap-3  items-center">
                    {/* <div className="sm:block hidden">
                        <Button textStyle="text-[12px] md:text-[16px] text-white ">
                            Submit on Github
                        </Button>
                    </div>
                    <div className="sm:block hidden">
                        <Button textStyle="text-[12px] md:text-[16px] text-white ">
                            SignIn
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
