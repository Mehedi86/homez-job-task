import React from 'react'

export default function SideHeading({ title, subtitle, colorT, colorS }) {
    return (
        <div className='space-y-1'>
            <h1 className={`text-3xl font-semibold ${colorT}`}>{title}</h1>
            <p className={`${colorS}`}>{subtitle}</p>
        </div>
    )
}

