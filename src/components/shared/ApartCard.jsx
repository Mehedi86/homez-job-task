import React from 'react'

export default function ApartCard({ apartType }) {
  const { title, amount, img } = apartType
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-3 px-2 pb-3 text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{amount} Properties</p>
      </div>
    </div>
  )
}
