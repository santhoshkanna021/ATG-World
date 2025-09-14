import React, { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import Image from "../assets/atg_illustration.svg";

const AuthForm = ({ isSignUpInitial = false, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(!isSignUpInitial);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Dummy credentials for login
  const dummyCredentials = {
    email: "test@example.com",
    password: "password123",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      // Validate login with dummy credentials
      if (
        formData.email === dummyCredentials.email &&
        formData.password === dummyCredentials.password
      ) {
        // Redirect to home page
        window.location.href = "/";
      } else {
        console.log("Invalid credentials");
        alert("Invalid email or password");
      }
    } else {
      // Handle sign-up (for now, just log and simulate success)
      console.log("Sign-up submitted:", formData);
      // Redirect to home page
      window.location.href = "/";
    }
  };

  const handleSocialSignUp = (platform) => {
    console.log(`Sign up with ${platform}`);
    // Simulate social login success and redirect to home page
    window.location.href = "/";
  };

  const handleClose = () => {
    console.log("Close button clicked"); // Debug log
    if (onClose) onClose(); // Ensure onClose is called only if defined
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-transparent rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1 shadow-md z-60"
          style={{ zIndex: 60 }} // Inline z-index for emphasis
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row w-full bg-transparent">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 max-h-[calc(90vh-2rem)] md:max-h-[80vh] overflow-y-auto bg-white rounded-l-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
              {isSignIn ? "Sign In" : "Create Account"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              {!isSignIn && (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-sm"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-sm"
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
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none text-sm"
                required
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white pr-10 outline-none text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
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
                    className="w-full p-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white pr-10 outline-none text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded-full mt-3 text-sm"
              >
                {isSignIn ? "Sign In" : "Create Account"}
              </button>

              <div className="mt-3 space-y-2">
                <button
                  onClick={() => handleSocialSignUp("Facebook")}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                >
                  <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-gray-700">{isSignIn ? "Sign In with Facebook" : "Sign Up with Facebook"}</span>
                </button>
                <button
                  onClick={() => handleSocialSignUp("Google")}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-gray-700">{isSignIn ? "Sign In with Google" : "Sign Up with Google"}</span>
                </button>
              </div>

              {isSignIn && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  Forgot Password?{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Reset it
                  </a>
                </p>
              )}
            </form>

            {/* Switch Section for Mobile */}
            <div className="mt-3 block md:hidden text-center">
              <p className="text-center text-sm text-gray-500">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsSignIn(!isSignIn)}
                  className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                >
                  {isSignIn ? "Create new for free!" : "Sign In"}
                </button>
              </p>
            </div>
          </div>

          {/* Illustration Section for md and up */}
          <div className="hidden md:flex md:w-1/2 p-4 flex-col items-end justify-center bg-white rounded-r-xl">
            <p className="text-center text-sm text-gray-500 mb-4">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsSignIn(!isSignIn)}
                className="text-blue-600 hover:text-blue-700 font-medium ml-1"
              >
                {isSignIn ? "Create new for free!" : "Sign In"}
              </button>
            </p>
            <div>
              <img src={Image} alt="Illustration" className="max-w-[240px] mx-auto" />
            </div>
            <h1 className="text-xs text-center mt-4">By signing up, you agree to our Terms & conditions, Privacy policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;