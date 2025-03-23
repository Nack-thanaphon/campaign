import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-slate-800 text-white">
            <div className="flex justify-between items-center p-4">
                <Link href="/" className="flex items-center">
                    <h1 className="text-2xl font-bold">campaign.com</h1>
                </Link>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-4">
                        <li><a href="/support/how-to" className="hover:text-blue-300">campaign</a></li>
                        <li><a href="/support/version" className="hover:text-blue-300">how to </a></li>
                        <li><a href="/support/post-area" className="hover:text-blue-300">partner</a></li>
                        <li><a href="/support/post-area" className="hover:text-blue-300">contact</a></li>
                        <li><a href="/login" className="hover:text-blue-300">signin</a></li>
                    </ul>
                </nav>
            </div>
            {/* Mobile Menu */}
            <nav
                className={`md:hidden bg-slate-800 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'
                    }`}
            >
                <ul className="flex flex-col space-y-2 p-4">
                    <li><a href="/support/how-to" className="hover:text-blue-300">campaign</a></li>
                    <li><a href="/support/version" className="hover:text-blue-300">how to</a></li>
                    <li><a href="/support/post-area" className="hover:text-blue-300">partner</a></li>
                    <li><a href="/login" className="hover:text-blue-300">contact</a></li>
                    <li><a href="/login" className="hover:text-blue-300">signin</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;