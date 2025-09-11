import React from 'react'
import FeaturedCard from '../shared/FeaturedCard'
import SideHeading from '../shared/SideHeading'

export default function BestDeals() {
    const propertyDatas = [
        {
            id: 1,
            title: "Luxury Family Home",
            price: "$5800",
            bed: 6,
            bath: 2,
            area: 400,
            image: "/images/deals/luxuary.png"
        },
        {
            id: 2,
            title: "Gorgeous Villa Bay",
            price: "$4800",
            bed: 8,
            bath: 2,
            area: 300,
            image: "/images/deals/gorgious.png"
        },
        {
            id: 3,
            title: "Skyper Pool Apartment",
            price: "$2850",
            bed: 4,
            bath: 1,
            area: 200,
            image: "/images/deals/pool.png"
        },
        {
            id: 4,
            title: "Diamond Manor Apartment",
            price: 3500,
            bed: 3,
            bath: 1,
            area: 200,
            image: "/images/deals/manor.png"
        }
    ]

    return (
        <div className='bg-[#EB6753]'>
            <div className='max-w-7xl mx-auto py-32 px-4 lg:px-0'>
                <div className='md:flex justify-between items-center'>
                    <SideHeading
                        title="Discover Our Best Deals"
                        subtitle="Aliquam lacinia diam quis lacus euismod"
                        colorT="text-white"
                        colorS="text-white"
                    />
                    <div className='space-x-2'>
                        <button className='btn btn-sm border-none font-medium shadow-none text-[#EB6753]'>For Sale</button>
                        <button className='btn btn-sm border-none font-medium bg-[#FFFFFF1A] shadow-none text-white'>For Rent</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12'>
                    {propertyDatas.map(item => <FeaturedCard
                        key={item.id}
                        item={item}
                        coupon={false}
                    />)}
                </div>
            </div>
        </div>
    )
}
