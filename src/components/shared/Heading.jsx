import React from 'react'

export default function Heading({ title, subtitle }) {
    return (
        <div className='space-y-1 w-fit mx-auto text-center'>
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className=''>{subtitle}</p>
        </div>
    )
}
