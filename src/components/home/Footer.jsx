import React from "react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">HIPSEIS</h3>
                    <p className="text-sm">Nagaon, Assam</p>
                    <p className="text-sm">782001</p>
                    <p className="text-sm">India</p>
                    <div className="flex space-x-4 pt-4">
                        <a href="#" className="hover:text-gray-300">
                            <SiFacebook size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <SiInstagram size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <SiX size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <SiLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-lg mb-4">Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                Shop
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Collections */}
                <div className="space-y-2">
                    <h4 className="font-semibold text-lg mb-4">Collections</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                Tops
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Dresses
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Best Sellers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                New Arrivals
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white-800 mt-8 pt-4 text-sm">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p>© 2025 HIPSEIS PVT. LTD.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">
                            TERMS
                        </a>
                        <a href="#" className="hover:underline">
                            PRIVACY
                        </a>
                        <a href="#" className="hover:underline">
                            REFUNDS
                        </a>
                        <a href="#" className="hover:underline">
                            SHIPPING
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
