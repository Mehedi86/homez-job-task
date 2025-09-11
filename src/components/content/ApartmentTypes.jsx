import React from 'react'
import SideHeading from '../shared/SideHeading'
import ApartCard from '../shared/ApartCard'
import { apartTypesData } from '../../utils/UtilityData';

export default function ApartmentTypes() {
    const pagination = [1, 2, 3, 4];
    
    return (
        <div className='bg-white py-20 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='md:flex justify-between items-center'>
                    <SideHeading
                        title="Explore Apartment Types"
                        subtitle="There are different types of apartment here"
                    />
                    <div>
                        <h1 className='flex items-center gap-2 font-semibold'> All Types <img src="/images/arrow.png" alt="" /></h1>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 my-12'>
                    {apartTypesData.map(apartType=> <ApartCard
                    key={apartType.id}
                    apartType={apartType}
                    />)}
                </div>
                <div className='flex gap-2 mt-12 w-fit mx-auto'>
                    <div className='w-2 h-2 rounded-full bg-neutral-900'></div>
                    {pagination.map((page, idx) => <div key={idx} className='w-2 h-2 rounded-full bg-neutral-400'></div>)}
                </div>
            </div>
        </div>
    )
}
