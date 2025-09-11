import React from 'react'

export default function Heading({ title, subtitle, colorT, colorS }) {
    return (
        <div className='space-y-1 w-fit mx-auto text-center'>
            <h1 className={`text-3xl font-semibold ${colorT}`}>{title}</h1>
            <p className={`${colorS}`}>{subtitle}</p>
        </div>
    )
}
