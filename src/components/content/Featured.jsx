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
    console.log(items)
    return (
        <div>
            <div className='max-w-7xl mx-auto py-32'>
                {/* heading */}
                <div className='flex justify-between items-center'>
                    <SideHeading
                        title="Discover Our Featured Listings"
                        subtitle="Aliquam lacinia diam quis lacus euismod"
                    />
                    <div>
                        <h1 className='flex items-center gap-2 font-semibold'>See All Properties <img src="/images/arrow.png" alt="" /></h1>
                    </div>
                </div>
                {/* content */}
                <div className='grid grid-cols-3 gap-8 mt-10'>
                    {items.map(item=> <FeaturedCard
                    key={item.id}
                    item={item}
                    />)}
                </div>
            </div>
        </div>
    )
}
