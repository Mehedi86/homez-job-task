import React from 'react'
import FeaturedCard from '../shared/FeaturedCard'
import SideHeading from '../shared/SideHeading'
import { bestDealsData } from '../../utils/UtilityData'

export default function BestDeals() {

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
                    {bestDealsData.map(item => <FeaturedCard
                        key={item.id}
                        item={item}
                        coupon={false}
                    />)}
                </div>
            </div>
        </div>
    )
}
