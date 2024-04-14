import Image from 'next/image'
import React from 'react'

const BlogCard = () => {
    return (
        <div className=" bg-white flex gap-[10px] flex-col rounded-[20px] shadow-md p-[20px]">
            <div>
                <Image alt="avatar" width={50} height={50} src="/avatar.svg" />
            </div>
            <div className=" text-[18px] font-semibold max-w-[200px]  text-base text-black">
                How to be Effective at Working Remotely
            </div>
            <div className=" max-w-[300px] text-[#082852] text-[14px] leading-[18px] font-extralight ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam.
            </div>
            <div>
                <Image
                    width={300}
                    height={150}
                    alt="bike"
                    src="/bike-photo.svg"
                />
            </div>
        </div>
    )
}

export default BlogCard
