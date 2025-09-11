'use client'
import React from 'react'
import Heading from '../shared/Heading'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-[#181A20]'>
            <div className='max-w-7xl mx-auto px-4 pt-20'>
                {/* heading */}
                <Heading
                    title="Subscribe Our Newsletter"
                    subtitle="We don’t send spam so don’t worry."
                    colorS="text-white"
                    colorT="text-white"
                    space="space-y-4"
                />

                {/* subscribe field */}
                <form className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto bg-white rounded-xl overflow-hidden p-2 my-8">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="p-3 placeholder-black w-full sm:w-auto flex-1"
                    />
                    <button
                        type="submit"
                        className="bg-[#f35421] px-6 py-3 text-white rounded-lg mt-3 sm:mt-0 sm:ml-2"
                    >
                        Subscribe
                    </button>
                </form>

                {/* main content */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-white my-16'>
                    {/* first column */}
                    <div className='lg:col-span-4 w-2/3 space-y-6'>
                        <div>
                            <img src="/images/logo.png" alt="Logo" className="h-10" />
                        </div>
                        <div>
                            <p className='mb-1 text-sm'>Address</p>
                            <h1 className='font-semibold text-sm'>789 Queensberry Street, North Melbourne VIC 3051, Australia.</h1>
                        </div>
                        <div>
                            <p className='mb-1 text-sm'>Total Free Customer Care</p>
                            <h1 className='font-semibold text-sm'>+(088) 123 456 789</h1>
                        </div>
                        <div>
                            <p className='mb-1 text-sm'>Live Support?</p>
                            <h1 className='font-semibold text-sm'>hi@homez.com</h1>
                        </div>
                    </div>

                    {/* second column */}
                    <div className='lg:col-span-2 space-y-4 text-sm text-[#BEBDBD]'>
                        <p className='font-semibold text-white'>Popular Search</p>
                        <div className='space-y-2'>
                            <p>Apartment for Sale</p>
                            <p>Apartment for Rent</p>
                            <p>Office for Sale</p>
                            <p>Office for Rent</p>
                        </div>
                    </div>

                    {/* third column */}
                    <div className='lg:col-span-2 space-y-4 text-sm text-[#BEBDBD]'>
                        <p className='font-semibold text-white'>Quick Links</p>
                        <div className='space-y-2'>
                            <p>Terms of Use</p>
                            <p>Privacy Policy</p>
                            <p>Pricing Plans</p>
                            <p>Our Services</p>
                            <p>Contact</p>
                            <p>Career</p>
                            <p>FAQs</p>
                        </div>
                    </div>

                    {/* fourth column */}
                    <div className='lg:col-span-4 space-y-4'>
                        <p className='font-semibold text-white'>Apps</p>
                        <img src="/images/footer/apple.png" alt="Apple Store" className="w-36" />
                        <img src="/images/footer/google.png" alt="Google Play" className="w-36" />
                    </div>
                </div>
                {/* bottom bar */}
                <div className="border-t border-gray-700 mt-12">
                    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
                        <p>© Homez – All rights reserved</p>
                        <div className="flex items-center space-x-4 mt-3 md:mt-0">
                            <span className="text-white">Follow Us</span>
                            <FaFacebookF className="hover:text-[#f35421] cursor-pointer" />
                            <FaTwitter className="hover:text-[#f35421] cursor-pointer" />
                            <FaInstagram className="hover:text-[#f35421] cursor-pointer" />
                            <FaLinkedinIn className="hover:text-[#f35421] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
