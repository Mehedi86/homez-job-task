import React from 'react';

export default function FeaturedCard({ item, coupon }) {
    const { title, image, price, bed, bath, area } = item;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            {/* Image Section */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-52 object-cover" />
                {coupon && <div className="absolute top-3 left-3 bg-[#EB6753] text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                    FEATURED
                </div>}
            </div>

            {/* Info Section */}
            <div className="p-4">
                <h3 className="text-sm text-gray-800 font-semibold">{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className="text-[#EB6753] font-semibold text-lg mt-1">{price.toLocaleString()}</p>
                    <div className='flex gap-4 text-sm'>
                        <span className='flex items-center gap-2'><img src="/images/deals/bed.png" alt="" />{bed}</span>
                        <span className='flex items-center gap-2'><img src="/images/deals/bath.png" alt="" />{bath}</span>
                        <span className='flex items-center gap-2'><img src="/images/deals/area.png" alt="" />{area}</span>

                    </div>
                </div>
            </div>
        </div>
    );
}
