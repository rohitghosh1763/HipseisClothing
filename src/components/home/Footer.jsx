import React from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-wider">
                            HIPSEIS
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <p>Nagaon, Assam 782001, India</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4" />
                                <a
                                    href="mailto:info@hipseis.com"
                                    className="hover:underline"
                                >
                                    info@hipseis.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4" />
                                <a
                                    href="tel:+919876543210"
                                    className="hover:underline"
                                >
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gray-800"
                            >
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gray-800"
                            >
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gray-800"
                            >
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-gray-800"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {["Shop", "Blog", "About Us", "FAQ", "Contact"].map(
                                (item) => (
                                    <li key={item}>
                                        <Button
                                            variant="link"
                                            className="text-gray-300 hover:text-white p-0 h-auto"
                                        >
                                            {item}
                                        </Button>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Collections */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Collections
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                "Men's Wear",
                                "Women's Wear",
                                "New Arrivals",
                                "Best Sellers",
                            ].map((item) => (
                                <li key={item}>
                                    <Button
                                        variant="link"
                                        className="text-gray-300 hover:text-white p-0 h-auto"
                                    >
                                        {item}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Newsletter
                        </h4>
                        <p className="text-sm text-gray-300 mb-4">
                            Subscribe to get updates on new arrivals and special
                            offers
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 border-gray-700 text-white"
                            />
                            <Button variant="default">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-gray-700" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© 2025 HIPSEIS PVT. LTD. All rights reserved</p>
                    <div className="flex gap-4">
                        {["Terms", "Privacy", "Refunds", "Shipping"].map(
                            (item) => (
                                <Button
                                    key={item}
                                    variant="link"
                                    className="text-gray-300 hover:text-white p-0 h-auto"
                                >
                                    {item}
                                </Button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
