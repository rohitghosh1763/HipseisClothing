import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Transition } from "@headlessui/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMobileMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className="bg-white-900 text-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-black">
                            HIPSEIS
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <a
                            href="#"
                            className="hover:text-blue-600 transition duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-600 transition duration-300"
                        >
                            About
                        </a>

                        {/* Dropdown Menu */}
                        <div className="relative group">
                            <button
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                                className="flex items-center hover:text-blue-600  transition duration-300"
                            >
                                Services
                                <ChevronDown
                                    className={`ml-1 transition-transform duration-300 ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                    size={18}
                                />
                            </button>

                            <Transition
                                show={dropdownOpen}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <div
                                    onMouseEnter={toggleDropdown}
                                    onMouseLeave={toggleDropdown}
                                className="absolute z-10 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                                >
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
                                        >
                                            Web Design
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
                                        >
                                            SEO
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
                                        >
                                            Marketing
                                        </a>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <a
                            href="#"
                            className="hover:text-blue-600  transition duration-300"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-black hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col  items-center ">
                            <a
                                href="#"
                                className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-black hover:bg-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </Transition>
            </div>
        </nav>
    );
}
