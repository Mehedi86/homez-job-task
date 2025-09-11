import React from 'react'
import Heading from '../shared/Heading'

export default function Blog() {
    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto py-20'>
                <Heading
                    title="From Our Blog"
                    subtitle="Aliquam lacinia diam quis lacus euismod"
                />
                {/* content */}
                <div className='my-12 px-4 xl:px-0'>
                    <div className='lg:flex gap-6'>
                        <div className="relative bg-white rounded-xl overflow-hidden space-y-4 my-4 lg:my-0">
                            <img
                                src="/images/blog/blog-1.png"
                                alt=""
                                className="w-full h-60 object-cover rounded-lg"
                            />
                            <p className="text-gray-500 text-sm">Townhome</p>
                            <div className="mt-3 pb-3">
                                <h3 className="text-lg font-semibold">Unveils the Best Canadian Cities for Biking and Walk</h3>
                            </div>
                            <div className='absolute bottom-28 right-6 bg-white px-5 py-2 text-center shadow-sm rounded-xl'>
                                <p className='text-sm'>Feb</p>
                                <h1 className='font-semibold text-lg'>03</h1>
                            </div>
                        </div>

                        <div className="relative bg-white rounded-xl overflow-hidden space-y-4 my-4 lg:my-0">
                            <img
                                src="/images/blog/blog-2.png"
                                alt=""
                                className="w-full h-60 object-cover rounded-lg"
                            />
                            <p className="text-gray-500 text-sm">Villa</p>
                            <div className="mt-3 pb-3">
                                <h3 className="text-lg font-semibold">Diamond Manor Apartment in the New York and Service</h3>
                            </div>
                            <div className='absolute bottom-28 right-6 bg-white px-5 py-2 text-center shadow-sm rounded-xl'>
                                <p className='text-sm'>Feb</p>
                                <h1 className='font-semibold text-lg'>03</h1>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center gap-4'>
                                <img src="/images/blog/blog-3.png" alt="" />
                                <div className='text-[#717171] space-y-2'>
                                    <p>Townhome</p>
                                    <h1 className='text-black font-semibold'>7 Simple Ways to Keep Your Kids’ Toys From…</h1>
                                    <p>February 3, 2023</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/images/blog/blog-4.png" alt="" />
                                <div className='text-[#717171] space-y-2'>
                                    <p>Houses</p>
                                    <h1 className='text-black font-semibold'>Housing Markets That
                                        Changed the Most This…</h1>
                                    <p>February 3, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
