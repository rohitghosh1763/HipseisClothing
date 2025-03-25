import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white text-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="Pages hidden md:flex space-x-6 items-center">
                        <button
                            onClick={() => navigate("/")}
                            className="hover:text-blue-600 transition"
                        >
                            Home
                        </button>
                        <button className="hover:text-blue-600 transition">
                            About
                        </button>
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center hover:text-blue-600 transition"
                            >
                                Services
                                <ChevronDown
                                    className={`ml-1 transition ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                    size={18}
                                />
                            </button>
                            {dropdownOpen && (
                                <div
                                    onMouseLeave={() =>
                                        setDropdownOpen(!dropdownOpen)
                                    }
                                    className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg"
                                >
                                    <button
                                        className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                                        onClick={() =>
                                            navigate("/services/web-design")
                                        }
                                    >
                                        Web Design
                                    </button>
                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                                        SEO
                                    </button>
                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                                        Marketing
                                    </button>
                                </div>
                            )}
                        </div>
                        <button className="hover:text-blue-600 transition">
                            Contact
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <button
                            onClick={() => navigate("/")}
                            className="text-2xl font-bold text-black"
                        >
                            HIPSEIS
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate("/login")}
                            className="hover:text-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center">
                        <button
                            onClick={() => navigate("/")}
                            className="block px-3 py-2 hover:bg-gray-100"
                        >
                            Home
                        </button>
                        <button className="block px-3 py-2 hover:bg-gray-100">
                            About
                        </button>
                        <button className="block px-3 py-2 hover:bg-gray-100">
                            Services
                        </button>
                        <button className="block px-3 py-2 hover:bg-gray-100">
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
