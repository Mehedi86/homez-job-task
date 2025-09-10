import React from 'react'
import Heading from '../shared/Heading'

export default function ExploreApartment() {
    return (
        <div className='max-w-7xl mx-auto'>
            <Heading
                title="Explore Apartment Types"
                subtitle="Aliquam lacinia diam quis lacus euismod"
            />

            {/* First Row */}
            <div className='grid md:grid-cols-2 gap-4 my-6 px-2 lg:px-0'>
                <div className='h-[200px] md:h-[220px] lg:h-[270px]'> 
                    <img className='w-full h-full object-cover rounded-lg' src="/images/explore-apartment/house.png" alt="" />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='h-[200px] md:h-[220px] lg:h-[270px]'>
                        <img className='w-full h-full object-cover rounded-lg' src="/images/explore-apartment/apartment.png" alt="" />
                    </div>
                    <div className='h-[200px] md:h-[220px] lg:h-[270px]'>
                        <img className='w-full h-full object-cover rounded-lg' src="/images/explore-apartment/office.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className='grid md:grid-cols-2 gap-4 my-6 px-2 lg:px-0'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='h-[200px] md:h-[220px] lg:h-[270px]'>
                        <img className='w-full h-full object-cover rounded-lg' src="/images/explore-apartment/apartment.png" alt="" />
                    </div>
                    <div className='h-[200px] md:h-[220px] lg:h-[270px]'>
                        <img className='w-full h-full object-cover rounded-lg' src="/images/explore-apartment/office.png" alt="" />
                    </div>
                </div>
                <div className='h-[200px] md:h-[220px] lg:h-[270px]'>
                    <img className='w-full h-full object-cover rounded-lg' src="/images/explore-apartment/house.png" alt="" />
                </div>
            </div>
        </div>
    )
}
