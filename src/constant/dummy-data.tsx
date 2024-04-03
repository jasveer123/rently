import Bike from '@/components/icons/bike'
import Pick from '@/components/icons/pick'
import Rent from '@/components/icons/rent'
import Thumb from '@/components/icons/thumb'
import Tick from '@/components/icons/tick'
import React from 'react'

export interface MenuLink {
    href: string
}

export interface MenuLinks {
    [key: string]: MenuLink
}
export const menuLinks: MenuLinks = {
    Home: { href: '/' },
    'About Us': { href: '/fetch.ai' },
    Bikes: { href: '/fetch.ai/docs' },
    FAQs: { href: 'https://github.com/fetchai' },
    'Contact Us': { href: 'https://github.com/fetchai' },
}
export const stepsData = [
    {
        logo: <Bike />,
        title: 'Select a bike',
        Description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    },
    {
        logo: <Bike />,
        title: 'Set a date',
        Description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    },
    {
        logo: <Pick />,
        title: 'Pick up the bike',
        Description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
    },
]

export const cardData = [
    {
        name: 'TVS Apache 4v',
    },
    {
        name: 'Royal Enfield Classic 350',
    },
    {
        name: 'Honda Dio BS6 ',
    },
    {
        name: 'Honda Activa 6G',
    },
    {
        name: 'Destini 125 BS6',
    },
    {
        name: 'Honda Activa 125 BS6',
    },
]

export const chooseUs = [
    {
        title: 'Complete services',
        description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
        logo: <Tick />,
    },
    {
        title: 'Good services',
        description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
        logo: <Thumb />,
    },
    {
        title: 'Easy rent',
        description: 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.',
        logo: <Rent />,
    },
]
