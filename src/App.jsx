import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/home/navbar";
import Footer from "./components/home/Footer";
import SplashScreen from "./components/ui/SplashScreen";
import Hero from "./components/home/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/App.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (sessionStorage.getItem("splashShown")) {
            setIsLoading(false);
        } else {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem("splashShown", "true");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Router>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <SplashScreen key="splash" />
                ) : (
                    <div key="main-content">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                        <Footer />
                    </div>
                )}
            </AnimatePresence>
        </Router>
    );
};

export default App;
