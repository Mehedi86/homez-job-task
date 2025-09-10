import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItem = () => (
        <>
            <a className="flex items-center gap-2 border-b-2 px-3 border-white">
                Home<div className="h-1 w-2 bg-white"></div>
            </a>
            <a className="flex items-center gap-2">Listings<div className="h-1 w-2 bg-white"></div></a>
            <a className="flex items-center gap-2">Members<div className="h-1 w-2 bg-white"></div></a>
            <a className="flex items-center gap-2">Blog<div className="h-1 w-2 bg-white"></div></a>
            <a className="flex items-center gap-2">Pages<div className="h-1 w-2 bg-white"></div></a>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full px-4 h-[76px] flex items-center z-50 bg-transparent">
            <nav className="flex justify-between items-center w-full max-w-[1200px] mx-auto">
                <div className="flex items-center gap-12">
                    {/* logo */}
                    <div>
                        <img src="/images/logo.png" alt="Logo" className="h-10" />
                    </div>

                    {/* desktop nav */}
                    <div className="hidden lg:flex items-center space-x-14 text-white font-semibold">
                        <div className="flex space-x-10">{navItem()}</div>
                        <div className="flex items-center gap-6 mr-12">
                            <div className="flex items-center gap-2">
                                <img src="/images/user-logo.png" alt="" className="h-6" />
                                <p>
                                    <a href="">Login</a>/<a href="">Register</a>
                                </p>
                            </div>
                            <button className="btn rounded-xl border-none font-semibold">
                                Add Property <img src="/images/arrow.png" alt="" />
                            </button>
                        </div>
                    </div>

                </div>
                {/* mobile hamburger */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* mobile menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-[76px] left-0 w-full bg-black/80 text-white flex flex-col items-center space-y-6 py-6 font-semibold">
                    {navItem()}
                    <div className="flex items-center gap-2">
                        <img src="/images/user-logo.png" alt="" className="h-6" />
                        <p>
                            <a href="">Login</a>/<a href="">Register</a>
                        </p>
                    </div>
                    <button className="btn rounded-xl border-none font-semibold">
                        Add Property <img src="/images/arrow.png" alt="" />
                    </button>
                </div>
            )}
        </div>
    );
}
