import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = () => {
    return (
        <motion.div
            className="flex justify-center items-center h-screen bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.img
                src="/hipseis.jpg"
                alt="Logo"
                className="w-32 h-32"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 2 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1.0 }}
            />
        </motion.div>
    );
};

export default SplashScreen;
