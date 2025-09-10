import React from 'react';

export default function FeaturedCard({ item }) {
    const { title, image, price, details } = item;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            {/* Image Section */}
            <div className="relative">
                <img src={image} alt={title} className="w-full h-52 object-cover" />
                <div className="absolute top-3 left-3 bg-[#EB6753] text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                    FEATURED
                </div>
            </div>

            {/* Info Section */}
            <div className="p-4">
                <h3 className="text-sm text-gray-800 font-semibold">{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className="text-[#EB6753] font-semibold text-lg mt-1">{price.toLocaleString()}</p>
                    <div className='flex gap-4'>
                        {item.vector.map((v, idx) => <p key={idx}>__{v}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
