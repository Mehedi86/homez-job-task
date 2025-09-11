import React from 'react'

export default function FeedbackCard({ feedback }) {
  const { name, occupation, review, img } = feedback
  return (
    <div className="bg-white rounded-xl border border-[#E9E9E9] p-10 relative w-full">
      {/* Quote mark top-right */}
      <span className="absolute top-6 right-6 text-gray-300 text-4xl"><img src="/images/feedback/comma.png" alt="" /></span>

      {/* Avatar */}
      <div className='space-y-4'>
        <div className='flex items-center gap-4'>
          <img
            src={img}
            alt={name}
            className="w-14 h-14 rounded-full object-cover mb-3"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mb-4">{occupation}</p>
          </div>
        </div>
        <p className="text-gray-800 text-sm">"{review}"</p>
      </div>
    </div>
  )
}
