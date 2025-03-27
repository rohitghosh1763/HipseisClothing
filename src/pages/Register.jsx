import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";
import { supabase } from "../config/supabaseClient";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: location.state?.phone || "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const nameInputRef = useRef(null);

  // Focus first input on mount
  useEffect(() => {
    if (!otpSent) {
      nameInputRef.current?.focus();
    }
  }, [otpSent]);


  // Simple email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? "" : "Please enter a valid email";
  };

  // Simple name validation
  const validateName = (name) => {
    return name.trim().length >= 2 ? "" : "Name must be at least 2 characters";
  };

    // Enhanced name validation
    const validateName = (name) => {
        // Trim whitespace and check length
        const trimmedName = name.trim();
        if (trimmedName.length < 2) return "Name must be at least 2 characters";
        if (trimmedName.length > 50) return "Name cannot exceed 50 characters";

        // Check for leading/trailing spaces
        if (name !== trimmedName) return "Remove spaces before/after name";

        // Check for invalid characters
        const validCharsRegex = /^[\p{L}\s'-]+$/u;
        if (!validCharsRegex.test(trimmedName)) {
            return "Only letters, spaces, hyphens (-) and apostrophes (') allowed";
        }

        // Check for consecutive special characters
        if (/(--|''|\s{2})/.test(trimmedName)) {
            return "Cannot have consecutive special characters";
        }

        // Check for invalid start/end with special characters
        if (/^[-']|[-']$/.test(trimmedName)) {
            return "Name cannot start or end with special characters";
        }

        return ""; // Valid name
    };

    // Email validation
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email.trim()) ? "" : "Please enter a valid email";
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
      phone: phone && !isValidPhoneNumber(phone) ? "Invalid phone number" : "",
    }));
  };

  const handleSendOTP = async () => {
    if (!formData.phone || errors.phone) return;
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: formData.phone,
        options: {
          shouldCreateUser: true, // Allow new user creation
        },
      });

      if (error) throw error;

      setOtpSent(true);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        phone: error.message || "Failed to send OTP. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6 || loading) return;
    setLoading(true);
    setOtpError("");

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: formData.phone,
        token: otp,
        type: "sms",
      });

      if (error) throw error;

      const session = data.session;
      const jwtToken = session?.access_token;
      const user = session?.user;

      if (jwtToken && user) {
        Cookies.set("jwt_token", jwtToken, { expires: 7, secure: true });

        // Create user profile
        const { error: userTableError } = await supabase.from("users").upsert({
          id: user.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          updated_at: new Date().toISOString(),
        });

        if (userTableError) {
          console.error("Error creating profile:", userTableError);
        }

        navigate("/dashboard");
      }
    } catch (error) {
      setOtpError(error.message || "Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
<<<<<<< HEAD
      formData.name &&
      formData.email &&
      formData.phone &&
      !errors.name &&
      !errors.email &&
      !errors.phone
=======
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
>>>>>>> 3936a4cb754ad78f4ca71f68593f83b8b42cfe33
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
              {otpSent ? "Verify OTP" : "Create Account"}
            </CardTitle>
            <p className="text-[#6b8e23]/80 mt-2">
              {otpSent
                ? `Enter the code sent to ${formData.phone}`
                : "Join us with your details"}
            </p>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            {!otpSent ? (
              <div className="space-y-4">
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
                      errors.name ? "border-red-500" : "border-[#6b8e23]/50"
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
                      errors.email ? "border-red-500" : "border-[#6b8e23]/50"
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
                      errors.phone ? "border-red-500" : "border-[#6b8e23]/50"
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
                  className="w-full h-12 text-base bg-[#6b8e23] hover:bg-[#556b2f] mt-4"
                  onClick={handleSendOTP}
                  disabled={loading || !isFormValid()}
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Send OTP"
                  )}
                </Button>

                <div className="text-center text-sm text-[#6b8e23]/80">
                  Already have an account?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-[#6b8e23] hover:underline font-medium"
                  >
                    Login
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#556b2f]">
                    Verification Code
                  </label>
                  <Input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    className="border-[#6b8e23]/50"
                  />
                  {otpError && (
                    <div className="flex items-center mt-1 text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {otpError}
                    </div>
                  )}
                </div>

                <Button
                  className="w-full h-12 text-base bg-[#6b8e23] hover:bg-[#556b2f]"
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    "Complete Registration"
                  )}
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-12 text-base text-[#6b8e23] border-[#6b8e23] hover:bg-[#6b8e23]/10"
                  onClick={() => setOtpSent(false)}
                >
                  Back to Registration
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
