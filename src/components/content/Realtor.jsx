import React from 'react'
import Heading from '../shared/Heading'
import RealtorCard from '../shared/RealtorCard'
import { realtorData } from '../../utils/UtilityData'

export default function Realtor() {
    
    return (
        <div className='bg-[#EB67531A] py-20'>
            <div className='max-w-7xl mx-auto'>
                <Heading
                    title="See how Realtor can help"
                    subtitle="Aliquam lacinia diam quis lacus euismod"
                />
                <div className='grid md:grid-cols-3 gap-6 my-16 mx-2 lg:mx-0'>
                    {realtorData.map(realtor=> <RealtorCard
                    key={realtor.id}
                    realtor={realtor}
                    />)}
                </div>
            </div>
        </div>
    )
}
