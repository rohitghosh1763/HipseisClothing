import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Search, User, ShoppingCart } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    const navigate = useNavigate();
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const shopItems = [
        { name: "Men's Wear", href: "/shop/mens" },
        { name: "Women's Wear", href: "/shop/womens" },
        { name: "New Arrivals", href: "/shop/new" },
        { name: "Best Sellers", href: "/shop/bestsellers" },
    ];

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 relative">
                    {/* Left side - Navigation (hidden on mobile) */}
                    <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                        <NavigationMenu>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="font-medium text-gray-900 hover:text-primary text-sm lg:text-base">
                                    SHOP
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-1 p-2">
                                        {shopItems.map((item) => (
                                            <li key={item.name}>
                                                <NavigationMenuLink
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                                >
                                                    {item.name}
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenu>

                        <Button
                            variant="ghost"
                            className="font-medium text-gray-900 hover:text-primary text-sm lg:text-base"
                        >
                            ABOUT
                        </Button>
                        <Button
                            variant="ghost"
                            className="font-medium text-gray-900 hover:text-primary text-sm lg:text-base"
                        >
                            FAQ
                        </Button>
                        <Button
                            variant="ghost"
                            className="font-medium text-gray-900 hover:text-primary text-sm lg:text-base"
                        >
                            CONTACT
                        </Button>
                    </div>

                    {/* Mobile menu button - shows on md screens and below */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <NavigationMenu orientation="vertical">
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className="w-full justify-between">
                                                SHOP
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-full gap-1 p-2">
                                                    {shopItems.map((item) => (
                                                        <li key={item.name}>
                                                            <NavigationMenuLink
                                                                href={item.href}
                                                                className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                                            >
                                                                {item.name}
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenu>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        ABOUT
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        FAQ
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                    >
                                        CONTACT
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Center - Brand */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-auto px-4">
                        <Button
                            variant="ghost"
                            className="text-xl md:text-2xl font-bold text-gray-900 hover:bg-transparent whitespace-nowrap"
                            onClick={() => navigate("/")}
                        >
                            HIPSEIS
                        </Button>
                    </div>

                    {/* Right side - Icons */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Search */}
                        <div className="flex items-center">
                            {searchOpen ? (
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        className="h-8 w-32 sm:w-40 md:w-60"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setSearchOpen(false)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ) : (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setSearchOpen(true)}
                                >
                                    <Search className="h-5 w-5" />
                                </Button>
                            )}
                        </div>

                        {/* Profile */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate("/login")}
                        >
                            <User className="h-5 w-5" />
                        </Button>

                        {/* Cart */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate("/cart")}
                        >
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
