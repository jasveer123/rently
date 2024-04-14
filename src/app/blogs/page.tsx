import React from 'react'
import BlogCard from '@/components/blog-card'

const page = () => {
    return (
        <div className="bg-slate-100  h-full">
            <div className=" container mx-auto h-full">
                <div className=" flex justify-center items-center p-[60px]">
                    <h1 className=" text-[30px] tracking-widest font-light text-[#FE5B3E]">
                        {' '}
                        BLOGS
                    </h1>
                </div>
                <div className="mx-auto max-w-[1110px] grid grid-cols-3 gap-[30px]">
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                </div>
            </div>
            <div className="relative mt-[50vh]">
                <div className="custom-shape-divider-bottom-1713112361">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className=" -z-30"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default page
