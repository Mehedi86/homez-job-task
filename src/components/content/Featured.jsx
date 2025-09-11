import React, { useEffect, useState } from 'react'
import SideHeading from '../shared/SideHeading'
import FeaturedCard from '../shared/FeaturedCard';

export default function Featured() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchItem = async () => {
            const res = await fetch('/data/featured.json');
            const data = await res.json();
            setItems(data)
        }
        fetchItem();
    }, [])
    
    const pagination = [1, 2, 3, 4];
    return (
        <div>
            <div className='max-w-7xl mx-auto py-32 px-4 lg:px-0'>
                {/* heading */}
                <div className='md:flex justify-between items-center'>
                    <SideHeading
                        title="Discover Our Featured Listings"
                        subtitle="Aliquam lacinia diam quis lacus euismod"
                        colorS="text-[#717171]"
                    />
                    <div>
                        <h1 className='flex items-center gap-2 font-semibold'>See All Properties <img src="/images/arrow.png" alt="" /></h1>
                    </div>
                </div>
                {/* content */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {items.map(item => <FeaturedCard
                        key={item.id}
                        item={item}
                        coupon={true}
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
