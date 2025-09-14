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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleSocialSignUp = (platform) => {
    console.log(`Sign up with ${platform}`);
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative flex flex-col md:flex">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute  right-4 top-4 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1 shadow-md"
        >
          <X size={20} />
        </button>

        {/* Header (Common) */}
        <div className="w-full p-4 border-b border-gray-200 bg-[#EFFFF4] hidden md:flex justify-start">
          <h1 className="text-sm font-medium text-gray-900">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now! 🤘🏼
          </h1>
        </div>
           <div className="flex">

            {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 max-h-[70vh] overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">
            {isSignIn ? "Sign In" : "Create Account"}
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
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
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
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white pr-12 outline-none"
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
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white pr-12 outline-none"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-4"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>

            <div className="mt-4 space-y-3">
              <button
                onClick={() => handleSocialSignUp("Facebook")}
                className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="text-gray-700">{isSignIn ? "Sign In with Facebook" : "Sign Up with Facebook"}</span>
              </button>
              <button
                onClick={() => handleSocialSignUp("Google")}
                className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-gray-700">{isSignIn ? "Sign In with Google" : "Sign Up with Google"}</span>
              </button>
            </div>

            {isSignIn && (
              <p className="text-center text-sm text-gray-500 mt-4">
                Forgot Password?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Reset it
                </a>
              </p>
            )}
          </form>

         
        </div>
{/* Illustration Section */}
<div className="hidden md:flex md:w-1/2 bg-white p-4 flex-col items-end text-end justify-start space-y-4 mt-5">
  
  {/* Sign In / Sign Up Switch */}
  <p className="text-center text-sm text-gray-500">
    {isSignIn ? "Don't have an account?" : "Already have an account?"}
    <button
      onClick={() => setIsSignIn(!isSignIn)}
      className="text-blue-600 hover:text-blue-700 font-medium ml-1"
    >
      {isSignIn ? "Create new for free!" : "Sign In"}
    </button>
  </p>

  {/* Illustration */}
  <div >
    <img src={Image} alt="Illustration" className="max-w-[240px] mx-auto" />
  </div>

  
<h1 className="text-xs">By signing up, you agree to our Terms & conditions, Privacy policy</h1>

</div>




           </div>
      </div>
    </div>
  );
};

export default AuthForm;
