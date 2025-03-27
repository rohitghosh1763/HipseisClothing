import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";

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
    const [loading, setLoading] = useState(false);
    const nameInputRef = useRef(null);

    // Focus first input on mount
    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);

    // Simple email validation
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email) ? "" : "Please enter a valid email";
    };

    // Simple name validation
    const validateName = (name) => {
        return name.trim().length >= 2
            ? ""
            : "Name must be at least 2 characters";
    };

    // Handle field changes with validation
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate immediately
        if (name === "email") {
            setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        } else if (name === "name") {
            setErrors((prev) => ({ ...prev, name: validateName(value) }));
        }
    };

    const handlePhoneChange = (phone) => {
        setFormData((prev) => ({ ...prev, phone }));
        setErrors((prev) => ({
            ...prev,
            phone:
                phone && !isValidPhoneNumber(phone)
                    ? "Invalid phone number"
                    : "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Final validation
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
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
            >
                <Card className="w-full shadow-lg bg-white">
                    <CardHeader className="text-center py-6">
                        <CardTitle className="text-3xl font-bold text-[#6b8e23]">
                            Create Account
                        </CardTitle>
                        <p className="text-[#6b8e23]/80 mt-2">
                            Join us with your details
                        </p>
                    </CardHeader>

                    <CardContent className="px-6 pb-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Field */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[#556b2f]">
                                    Full Name
                                </label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
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
                            </div>

                            {/* Email Field */}
                            <div>
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
                            </div>

                            {/* Phone Field */}
                            <div>
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
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base bg-[#6b8e23] hover:bg-[#556b2f] mt-4"
                                disabled={loading || !isFormValid()}
                            >
                                {loading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    "Register"
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-[#6b8e23]/80">
                            Already have an account?{" "}
                            <button
                                onClick={() => navigate("/login")}
                                className="text-[#6b8e23] hover:underline font-medium"
                            >
                                Sign in
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default Register;
