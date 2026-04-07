import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // Utility for active link styling
   
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-xl font-bold tracking-tighter text-slate-900">
                            BRAND<span className="text-indigo-600">.</span>
                        </NavLink>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <NavLink to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" >
                                About
                            </NavLink>
                        </li>
                        
                    </ul>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

