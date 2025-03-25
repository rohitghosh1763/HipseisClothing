import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/home/navbar";
import Footer from "./components/home/Footer";
import SplashScreen from "./components/ui/SplashScreen";
import Hero from "./components/home/Hero";
import "./styles/App.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if splash screen has been shown in this session
        const hasSeenSplash = sessionStorage.getItem("splashShown");

        if (hasSeenSplash) {
            // If splash has been shown, immediately set loading to false
            setIsLoading(false);
        } else {
            // If splash hasn't been shown, set timeout and mark as shown
            const timer = setTimeout(() => {
                setIsLoading(false);
                // Mark splash as shown in session storage
                sessionStorage.setItem("splashShown", "true");
            }, 3000);

            // Cleanup timeout if component unmounts
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading ? (
                <SplashScreen key="splash" />
            ) : (
                <div key="main-content">
                    <Navbar />
                    <Hero />
                    <Footer />
                </div>
            )}
        </AnimatePresence>
    );
};

export default App;
