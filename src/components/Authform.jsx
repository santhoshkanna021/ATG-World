import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/atg_illustration.svg";

const AuthModal = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleSocialSignUp = (platform) => {
    console.log(`Sign up with ${platform}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1 shadow-md"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="w-full p-4 border-b border-gray-200 text-center bg-[#EFFFF4]">
          <h1 className="text-sm font-medium text-gray-900">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
          </h1>
        </div>

        {/* Form Section */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {isSignIn ? "Welcome back!" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isSignIn && (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  required
                />
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white pr-12 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isSignIn && (
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-200 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white pr-12 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-full mt-4"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Social Buttons */}
          {!isSignIn && (
            <div className="mt-4 space-y-3">
              <button
                onClick={() => handleSocialSignUp("Facebook")}
                className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="text-gray-700">Sign Up with Facebook</span>
              </button>
              <button
                onClick={() => handleSocialSignUp("Google")}
                className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-gray-700">Sign Up with Google</span>
              </button>
            </div>
          )}

          {isSignIn && (
            <p className="text-center text-sm text-gray-500 mt-4">
              Forgot Password?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Reset it
              </a>
            </p>
          )}

          <p className="text-center text-sm text-gray-500 mt-4">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-blue-600 hover:text-blue-700 font-medium ml-1"
            >
              {isSignIn ? "Create new for free!" : "Sign In"}
            </button>
          </p>
        </div>

        {/* Footer Terms */}
        <div className="p-4 text-center text-xs text-gray-500">
          By {isSignIn ? "signing in" : "signing up"}, you agree to our{" "}
          <a href="#" className="underline text-blue-600">
            Terms & conditions
          </a>
          ,{" "}
          <a href="#" className="underline text-blue-600">
            Privacy policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default AuthModal;