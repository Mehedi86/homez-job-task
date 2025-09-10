import React from 'react';

export default function RealtorCard({ realtor }) {
    const { img, title, description, btnInfo, special } = realtor;

    return (
        <div className="w-full bg-white rounded-xl shadow-sm p-6 text-center flex flex-col items-center">
            {/* Icon / Illustration */}
            <img src={img} alt={title} className="w-20 h-20 mb-4" />

            <div className='space-y-2'>
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Button */}
            <button className={`btn border border-[#EB6753] ${special ? 'bg-[#EB6753] text-white' : 'bg-white'} my-6`}>
                {btnInfo}
            </button>
        </div>
    );
}
