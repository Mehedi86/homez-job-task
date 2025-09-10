import React from 'react'

export default function SearchBar() {
    return (
        <div className='max-w-7xl mx-auto my-20 shadow-2xl rounded-lg -mt-28 z-20 relative'>
            {/* tab */}
            <div className='rounded-t-xl flex w-fit overflow-hidden bg-white'>
                <h1 className='px-4 py-3 mx-2 border-b-2 bg-white'>All</h1>
                <h1 className='px-4 py-3 bg-gray-100'>For Sale</h1>
                <h1 className='px-4 py-3 bg-gray-100'>Rent</h1>
            </div>
            {/* main div */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 p-6 bg-white rounded-b-lg rounded-tr-lg'>
                <div className='space-y-2 lg:col-span-3 border-b md:border-b-0 lg:border-r-2 border-neutral-100 pb-4 md:pb-0'>
                    <h1 className='font-semibold'>Search</h1>
                    <input type="text" placeholder='Enter Keywords' />
                </div>
                <div className='space-y-2 lg:col-span-2 px-0 lg:px-6 border-b md:border-b-0 lg:border-r-2 border-neutral-100 pb-4 md:pb-0'>
                    <h1 className='font-semibold'>Looking For</h1>
                    <div className='flex justify-between items-center'>
                        <p>Type</p>
                        <div className="h-1 w-2 bg-black"></div>
                    </div>
                </div>
                <div className='space-y-2 lg:col-span-2 px-0 lg:px-6 border-b md:border-b-0 lg:border-r-2 border-neutral-100 pb-4 md:pb-0'>
                    <h1 className='font-semibold'>Location</h1>
                    <div className='flex justify-between items-center'>
                        <p>Location</p>
                        <div className="h-1 w-2 bg-black"></div>
                    </div>
                </div>
                <div className='space-y-2 lg:col-span-2 px-0 lg:px-6 border-b md:border-b-0 lg:border-r-2 border-neutral-100 pb-4 md:pb-0'>
                    <h1 className='font-semibold'>Price</h1>
                    <div className='flex justify-between items-center'>
                        <p>$0</p>
                        <p>-</p>
                        <p>$5800</p>
                    </div>
                </div>
                <div className='space-y-2 lg:col-span-3 flex flex-col lg:flex-row items-center justify-between gap-4'>
                    <img src="/images/adjust.png" alt="" />
                    <p>Advanced</p>
                    <button className="flex items-center justify-center gap-2 px-4 lg:px-5 py-3 bg-[#EB6753] hover:bg-[#d85b47] text-white font-semibold rounded-lg">
                        <img src="/images/search-icon.png" alt="Search Icon" className="w-4 h-4" />
                        Search
                    </button>

                </div>
            </div>
        </div>
    )
}
