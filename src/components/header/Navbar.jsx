import React from 'react'

export default function Navbar() {

    const navItem = () => {
        return (
            <>
                <a className='flex items-center gap-2 border-b-2 px-3 border-white'>Home<div className='h-1 w-2 bg-white'></div></a>
                <a className='flex items-center gap-2'>Listings<div className='h-1 w-2 bg-white'></div></a>
                <a className='flex items-center gap-2'>Members<div className='h-1 w-2 bg-white'></div></a>
                <a className='flex items-center gap-2'>Blog<div className='h-1 w-2 bg-white'></div></a>
                <a className='flex items-center gap-2'>Pages<div className='h-1 w-2 bg-white'></div></a>
            </>
        )
    }

    return (
        <div className='fixed top-0 left-0 w-full px-4 h-[76px] flex items-center'>
            <nav className='flex justify-between w-[1200px] mx-auto'>
                <div className='flex space-x-12'>
                    {/* icon/name */}
                    <div>
                        <img src="/images/logo.png" alt="" />
                    </div>
                    {/* nav items */}
                    <div className='flex text-white space-x-10 font-semibold'>
                        {navItem()}
                    </div>
                </div>
                {/* right side property */}
                <div className='flex items-center text-white gap-6 pr-32 pl-8'>
                    <div className='flex items-center gap-2'>
                        <img src="/images/user-logo.png" alt="" />
                        <div>
                            <p>
                                <a href="">Login</a>
                                /<a href="">Register</a>
                            </p>
                        </div>
                    </div>
                    <button className='btn rounded-xl border-none font-semibold w-[174px]'>Add Property <img src="/images/arrow.png" alt="" /></button>
                </div>
            </nav>
        </div>
    )
}
