import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Eye, EyeOff, Loader2 } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [showOTPField, setShowOTPField] = useState(false);
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSendOTP = () => {
        setLoading(true);
        setTimeout(() => {
            setShowOTPField(true);
            setLoading(false);
        }, 1500);
    };

    const handleVerifyOTP = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
            <Card className="w-full max-w-md flex shadow-lg h-75        ">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-primary">
                        Welcome
                    </CardTitle>
                    <p className="text-muted-foreground">
                        Sign in with your phone number
                    </p>
                </CardHeader>

                <CardContent>
                    <AnimatePresence mode="wait">
                        {!showOTPField ? (
                            <motion.div
                                key="phone-form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-6">
                                    <label className="block text-sm font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        value={phone}
                                        onChange={setPhone}
                                        className="w-full p-3 rounded-md border border-input"
                                    />
                                </div>

                                <Button
                                    className="w-full h-12 text-base"
                                    onClick={handleSendOTP}
                                    disabled={loading || !phone}
                                >
                                    {loading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        "Send OTP"
                                    )}
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="otp-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center mb-4">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowOTPField(false)}
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </Button>
                                    <h3 className="text-lg font-medium">
                                        Verify OTP
                                    </h3>
                                </div>

                                <p className="text-sm text-muted-foreground mb-6">
                                    Enter the 6-digit code sent to {phone}
                                </p>

                                <div className="relative mb-6">
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                        className="pr-12"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-0 top-0"
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
                                </div>

                                <Button
                                    className="w-full h-12 text-base"
                                    onClick={handleVerifyOTP}
                                    disabled={loading || otp.length !== 6}
                                >
                                    {loading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        "Verify OTP"
                                    )}
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
