import React from "react";

// Mock images for demo
const Img1 = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop";
const Img2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop";
const Img3 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop";

const recommendedGroups = [
  {
    name: "Leisure",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=40&h=40&fit=crop&crop=center",
  },
  {
    name: "Activism",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=40&h=40&fit=crop&crop=center",
  },
  {
    name: "MBA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=center",
  },
  {
    name: "Philosophy",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=40&h=40&fit=crop&crop=center",
  },
];

const similarPosts = [
  {
    id: 1,
    type: "✍️ Article",
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
    author: "Sarthak Kamra",
    image: Img1,
    views: "1.4k",
  },
  {
    id: 2,
    type: "🔬️ Education",
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I've worked in UX for the better part of a decade. From now on, I plan to rel...",
    author: "Siddharth Goyal",
    image: Img2,
    views: "1.4k",
  },
];

const uniquePosts = [
  {
    id: 3,
    type: "🗓️ Meetup",
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    description: "Visit website Report",
    author: "Ronak Jones",
    date: "Fri, 12 Oct 2018",
    location: "Ahmedabad, India",
    image: Img3,
    views: "1.4k",
  },
  {
    id: 4,
    type: "💼 Job",
    title: "Software Developer",
    description: "Innovaccer Analytics Private Ltd. Noida, India",
    author: "Joseph Gray",
    date: "Innovaccer Analytics Private Ltd",
    location: "Noida, India",
    image: Img3,
    views: "1.4k",
  },
];

const PostCarousel = () => {
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);

  return (
    <div className="min-h-screen bg-white border-t border-gray-300 w-full relative">
      {/* Mobile Floating Button - Positioned at bottom right corner */}
      <button 
        onClick={() => setShowAuthModal(true)}
        className="fixed bottom-6 right-6 sm:hidden bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <h1 className="text-xl font-medium text-black mb-6">
                {isSignUp ? "Create Account" : "Welcome back!"}
              </h1>

              <div className="space-y-3">
                {isSignUp && (
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="flex-1 p-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="flex-1 p-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm"
                    />
                  </div>
                )}
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm"
                />

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>

                {isSignUp && (
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full p-3 bg-gray-100 border-0 rounded-md focus:outline-none text-sm pr-12"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                )}

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium p-3 rounded-full transition-colors mt-4">
                  {isSignUp ? "Create Account" : "Sign In"}
                </button>
              </div>

              <div className="text-center mt-4">
                <span className="text-gray-500 text-sm">or, </span>
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-blue-500 hover:text-blue-600 font-medium text-sm underline"
                >
                  {isSignUp ? "Sign In" : "Create Account"}
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                  <span className="text-gray-700 text-sm">
                    {isSignUp ? "Sign up with Facebook" : "Sign in with Facebook"}
                  </span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">
                    {isSignUp ? "Sign up with Google" : "Sign in with Google"}
                  </span>
                </button>
              </div>

              {!isSignUp && (
                <div className="text-center mt-4">
                  <button className="text-gray-500 text-sm hover:text-gray-700">
                    Forgot Password?
                  </button>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed px-2">
                By signing {isSignUp ? "up" : "in"}, you agree to our{" "}
                <span className="text-blue-500 underline cursor-pointer">Terms & conditions</span>,{" "}
                <span className="text-blue-500 underline cursor-pointer">Privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4 px-4 max-w-5xl mx-auto">
        
        {/* Posts List */}
        <div className="flex-1 space-y-6 w-full sm:w-auto">
          {/* Similar Posts */}
          {similarPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md shadow-sm overflow-hidden min-h-[29rem]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-54 object-cover"
              />
              <div className="p-5">
                <p className="text-3xl text-black font-medium">{post.type}</p>
                <h2 className="text-2xl font-medium mt-1 mb-2">{post.title}</h2>
                <p className="text-sm text-black mt-5">{post.description}</p>
                <div className="flex items-center justify-between mt-4 pt-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-lg text-black">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-black text-sm">{post.views} views</span>
                    <button>
                      <svg className="w-8 h-8 py-2 px-2 rounded-lg bg-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Unique Posts */}
          {uniquePosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-md shadow-sm overflow-hidden min-h-[29rem]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-54 object-cover"
              />
              <div className="p-5">
                <p className="text-3xl text-black font-medium">{post.type}</p>
                <h2 className="text-2xl font-medium mt-1 mb-2">{post.title}</h2>
                <p className="text-sm text-black mt-5">{post.description}</p>
                {(post.date || post.location) && (
                  <div className="flex text-lg text-black gap-4 mt-2">
                    {post.date && <span>{post.date}</span>}
                    {post.location && <span>{post.location}</span>}
                  </div>
                )}
                <div className="mt-4">
                  <button className="border border-black w-full h-10 font-medium rounded-xl text-orange-600">
                    View Website
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2 pt-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://via.placeholder.com/40"
                      alt={post.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-lg text-black">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-black text-sm">{post.views} views</span>
                    <button>
                      <svg className="w-8 h-8 py-2 px-2 rounded-lg bg-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar — Hidden on mobile */}
        <div className="hidden sm:block w-64 p-4">
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center text-gray-500">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">Enter your location</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400">
              Your location will help us serve better and upload a personalised
              experience.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg sticky top-20">
            <div className="flex items-center mb-3">
              <h3 className="text-sm font-semibold">RECOMMENDED GROUPS</h3>
            </div>

            <div className="space-y-3">
              {recommendedGroups.map((group, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={group.image}
                      alt={group.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-700">{group.name}</span>
                  </div>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-blue-500 cursor-pointer hover:underline">
              See More...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;