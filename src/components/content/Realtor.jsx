import React from 'react'
import Heading from '../shared/Heading'
import RealtorCard from '../shared/RealtorCard'

export default function Realtor() {
    const data = [
        {
            id: 'dio3i84h',
            img: 'images/realtor/icon1.png',
            title: 'Buy a property',
            description: 'Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.',
            btnInfo: 'Find a home',
            special: false
        },
        {
            id: 'dio3i84hf',
            img: 'images/realtor/icon2.png',
            title: 'Sell a property',
            description: 'Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.',
            btnInfo: 'Place an ad',
            special: true
        },
        {
            id: 'dio3i84hffs',
            img: 'images/realtor/icon3.png',
            title: 'Rent a property',
            description: 'Nullam sollicitudin blandit eros eu pretium.Nullam maximus ultricies auctor.',
            btnInfo: 'Find a rental',
            special: false
        }
    ]
    return (
        <div className='bg-[#EB67531A] py-20'>
            <div className='max-w-7xl mx-auto'>
                <Heading
                    title="See how Realtor can help"
                    subtitle="Aliquam lacinia diam quis lacus euismod"
                />
                <div className='grid md:grid-cols-3 gap-6 my-16 mx-2 lg:mx-0'>
                    {data.map(realtor=> <RealtorCard
                    key={realtor.id}
                    realtor={realtor}
                    />)}
                </div>
            </div>
        </div>
    )
}
