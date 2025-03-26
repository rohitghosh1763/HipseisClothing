import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [showOTPField, setShowOTPField] = useState(false);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    const phoneInputRef = useRef(null);
    const otpInputRef = useRef(null);

    // Validate phone number in real-time
    useEffect(() => {
        if (phone && !isValidPhoneNumber(phone)) {
            setPhoneError("Please enter a valid phone number");
        } else {
            setPhoneError("");
        }
    }, [phone]);

    // Handle Enter key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                if (!showOTPField && phone && !phoneError) {
                    handleSendOTP();
                } else if (showOTPField && otp.length === 6) {
                    handleVerifyOTP();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [phone, otp, showOTPField, phoneError]);

    const handleSendOTP = () => {
        if (!phone || loading || phoneError) return;
        setLoading(true);
        setTimeout(() => {
            setShowOTPField(true);
            setLoading(false);
            setTimeout(() => otpInputRef.current?.focus(), 100);
        }, 1500);
    };

    const handleVerifyOTP = () => {
        if (otp.length !== 6 || loading) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#f8f8f8]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md"
            >
                <Card className="w-full shadow-lg bg-white">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold text-[#6b8e23]">
                            Welcome
                        </CardTitle>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={showOTPField ? "otp-title" : "phone-title"}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="text-[#6b8e23]/80"
                            >
                                {showOTPField
                                    ? "Enter your verification code"
                                    : "Sign in with your phone number"}
                            </motion.p>
                        </AnimatePresence>
                    </CardHeader>

                    <CardContent>
                        <AnimatePresence mode="wait">
                            {!showOTPField ? (
                                <motion.div
                                    key="phone-form"
                                    initial={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <div className="mb-6">
                                        <motion.label
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                            className="block text-sm font-medium mb-2 text-[#556b2f]"
                                        >
                                            Phone Number
                                        </motion.label>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            <PhoneInput
                                                international
                                                defaultCountry="IN"
                                                value={phone}
                                                onChange={setPhone}
                                                className={`w-full p-3 rounded-md border ${
                                                    phoneError
                                                        ? "border-red-500"
                                                        : "border-[#6b8e23]/50"
                                                }`}
                                                ref={phoneInputRef}
                                                onKeyDown={(e) =>
                                                    e.key === "Enter" &&
                                                    handleSendOTP()
                                                }
                                            />
                                        </motion.div>
                                        <AnimatePresence>
                                            {phoneError && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                    className="flex items-center mt-2 text-red-500 text-sm"
                                                >
                                                    <AlertCircle className="h-4 w-4 mr-2" />
                                                    {phoneError}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Button
                                            className="w-full h-12 text-base bg-[#6b8e23] hover:bg-[#556b2f]"
                                            onClick={handleSendOTP}
                                            disabled={
                                                loading || !phone || phoneError
                                            }
                                        >
                                            {loading ? (
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            ) : (
                                                "Send OTP"
                                            )}
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="otp-form"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <motion.div
                                        className="flex items-center mb-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() =>
                                                setShowOTPField(false)
                                            }
                                            className="text-[#6b8e23] hover:bg-[#6b8e23]/10"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </Button>
                                        <h3 className="text-lg font-medium text-[#556b2f]">
                                            Verify OTP
                                        </h3>
                                    </motion.div>

                                    <motion.p
                                        className="text-sm text-[#6b8e23]/80 mb-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.15 }}
                                    >
                                        Enter the 6-digit code sent to {phone}
                                    </motion.p>

                                    <motion.div
                                        className="relative mb-6"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            value={otp}
                                            onChange={(e) =>
                                                setOtp(e.target.value)
                                            }
                                            placeholder="Enter OTP"
                                            className="pr-12 border-[#6b8e23]/50"
                                            ref={otpInputRef}
                                            onKeyDown={(e) =>
                                                e.key === "Enter" &&
                                                handleVerifyOTP()
                                            }
                                        />
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-0 top-0 text-[#6b8e23]/70 hover:text-[#6b8e23]"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeOff className="h-5 w-5" />
                                            ) : (
                                                <Eye className="h-5 w-5" />
                                            )}
                                        </Button>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                    >
                                        <Button
                                            className="w-full h-12 text-base bg-[#6b8e23] hover:bg-[#556b2f]"
                                            onClick={handleVerifyOTP}
                                            disabled={
                                                loading || otp.length !== 6
                                            }
                                        >
                                            {loading ? (
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            ) : (
                                                "Verify OTP"
                                            )}
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default Login;
