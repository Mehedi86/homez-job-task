import React from 'react'

export default function SideHeading({ title, subtitle }) {
    return (
        <div className='space-y-1'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-[#717171]'>{subtitle}</p>
        </div>
    )
}
