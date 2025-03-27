import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion, AnimatePresence } from "framer-motion";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [showOTPField, setShowOTPField] = useState(false);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const nameInputRef = useRef(null);
    const otpInputRef = useRef(null);

    // Focus first input on mount
    useEffect(() => {
        if (!showOTPField) {
            nameInputRef.current?.focus();
        } else {
            otpInputRef.current?.focus();
        }
    }, [showOTPField]);

    // Enhanced name validation
    const validateName = (name) => {
        const trimmedName = name.trim();
        if (trimmedName.length < 2) return "Name must be at least 2 characters";
        if (trimmedName.length > 50) return "Name cannot exceed 50 characters";
        if (name !== trimmedName) return "Remove spaces before/after name";

        const validCharsRegex = /^[\p{L}\s'-]+$/u;
        if (!validCharsRegex.test(trimmedName)) {
            return "Only letters, spaces, hyphens (-) and apostrophes (') allowed";
        }
        if (/(--|''|\s{2})/.test(trimmedName)) {
            return "Cannot have consecutive special characters";
        }
        if (/^[-']|[-']$/.test(trimmedName)) {
            return "Name cannot start or end with special characters";
        }
        return "";
    };

    // Email validation
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email.trim()) ? "" : "Please enter a valid email";
    };

    // Phone validation
    useEffect(() => {
        if (formData.phone && !isValidPhoneNumber(formData.phone)) {
            setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
        } else {
            setErrors((prev) => ({ ...prev, phone: "" }));
        }
    }, [formData.phone]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") {
            setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        } else if (name === "name") {
            setErrors((prev) => ({ ...prev, name: validateName(value) }));
        }
    };

    const handlePhoneChange = (phone) => {
        setFormData((prev) => ({ ...prev, phone }));
    };

    const handleSendOTP = () => {
        // Final validation before sending OTP
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const phoneError = formData.phone ? "" : "Phone number is required";

        setErrors({
            name: nameError,
            email: emailError,
            phone: phoneError,
        });

        if (nameError || emailError || phoneError) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowOTPField(true);
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

    const isFormValid = () => {
        return (
            formData.name &&
            formData.email &&
            formData.phone &&
            !errors.name &&
            !errors.email &&
            !errors.phone
        );
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
                            {showOTPField ? "Verify OTP" : "Create Account"}
                        </CardTitle>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={
                                    showOTPField
                                        ? "otp-title"
                                        : "register-title"
                                }
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="text-[#6b8e23]/80"
                            >
                                {showOTPField
                                    ? `Enter the 6-digit code sent to ${formData.phone}`
                                    : "Join us with your details"}
                            </motion.p>
                        </AnimatePresence>
                    </CardHeader>

                    <CardContent>
                        <AnimatePresence mode="wait">
                            {!showOTPField ? (
                                <motion.div
                                    key="register-form"
                                    initial={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {/* Name Field */}
                                    <motion.div
                                        className="mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <label className="block text-sm font-medium mb-2 text-[#556b2f]">
                                            Full Name
                                        </label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. John Doe or Anne-Marie O'Connor"
                                            ref={nameInputRef}
                                            className={
                                                errors.name
                                                    ? "border-red-500"
                                                    : "border-[#6b8e23]/50"
                                            }
                                        />
                                        {errors.name && (
                                            <div className="flex items-center mt-1 text-red-500 text-sm">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.name}
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div
                                        className="mb-4"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                    >
                                        <label className="block text-sm font-medium mb-2 text-[#556b2f]">
                                            Email Address
                                        </label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className={
                                                errors.email
                                                    ? "border-red-500"
                                                    : "border-[#6b8e23]/50"
                                            }
                                        />
                                        {errors.email && (
                                            <div className="flex items-center mt-1 text-red-500 text-sm">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.email}
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Phone Field */}
                                    <motion.div
                                        className="mb-6"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-medium mb-2 text-[#556b2f]">
                                            Phone Number
                                        </label>
                                        <PhoneInput
                                            international
                                            defaultCountry="IN"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            className={`w-full p-3 rounded-md border ${
                                                errors.phone
                                                    ? "border-red-500"
                                                    : "border-[#6b8e23]/50"
                                            }`}
                                        />
                                        {errors.phone && (
                                            <div className="flex items-center mt-1 text-red-500 text-sm">
                                                <AlertCircle className="h-4 w-4 mr-1" />
                                                {errors.phone}
                                            </div>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                    >
                                        <Button
                                            className="w-full h-12 text-base bg-[#6b8e23] hover:bg-[#556b2f]"
                                            onClick={handleSendOTP}
                                            disabled={loading || !isFormValid()}
                                        >
                                            {loading ? (
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                            ) : (
                                                "CONTINUE"
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
                                        <h3 className="register-otp text-lg font-medium text-[#556b2f]">
                                            Verify OTP
                                        </h3>
                                    </motion.div>

                                    <motion.p
                                        className="text-sm text-[#6b8e23]/80 mb-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.15 }}
                                    >
                                        Enter the 6-digit code sent to{" "}
                                        {formData.phone}
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

                    <CardFooter className="flex justify-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Button
                                variant="link"
                                className="text-[#6b8e23] p-0 h-auto text-sm"
                                onClick={() => navigate("/login")}
                            >
                                Sign in
                            </Button>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
};

export default Register;
