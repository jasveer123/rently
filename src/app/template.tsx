import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Template
