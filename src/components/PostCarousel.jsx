import React from "react";
import Authform from "../components/Authform"; // use Authform instead of AuthModal

// Mock images for demo
const Img1 = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop";
const Img2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop";
const Img3 = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop";

const recommendedGroups = [
  { name: "Leisure", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=40&h=40&fit=crop&crop=center" },
  { name: "Activism", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=40&h=40&fit=crop&crop=center" },
  { name: "MBA", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=center" },
  { name: "Philosophy", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=40&h=40&fit=crop&crop=center" },
];

const similarPosts = [
  { id: 1, type: "✍️ Article", title: "What if famous brands had regular fonts? Meet RegulaBrands!", description: "I've worked in UX for the better part of a decade. From now on, I plan to rel...", author: "Sarthak Kamra", image: Img1, views: "1.4k" },
  { id: 2, type: "🔬️ Education", title: "Tax Benefits for Investment under National Pension Scheme launched by Government", description: "I've worked in UX for the better part of a decade. From now on, I plan to rel...", author: "Siddharth Goyal", image: Img2, views: "1.4k" },
];

const uniquePosts = [
  { id: 3, type: "🗓️ Meetup", title: "Finance & Investment Elite Social Mixer @Lujiazui", description: "Visit website Report", author: "Ronak Jones", date: "Fri, 12 Oct 2018", location: "Ahmedabad, India", image: Img3, views: "1.4k" },
  { id: 4, type: "💼 Job", title: "Software Developer", description: "Innovaccer Analytics Private Ltd. Noida, India", author: "Joseph Gray", date: "Innovaccer Analytics Private Ltd", location: "Noida, India", image: Img3, views: "1.4k" },
];

const PostCarousel = () => {
  const [showAuthForm, setShowAuthForm] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(false);

  return (
    <div className="min-h-screen bg-white border-t border-gray-300 w-full relative">

      {/* Mobile Floating Button - Open Authform */}
      <button 
        onClick={() => { setShowAuthForm(true); setIsSignUp(true); }}
        className="fixed bottom-6 right-6 sm:hidden bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>

      {/* Authform Modal */}
      {showAuthForm && (
        <Authform isSignUp={isSignUp} onClose={() => setShowAuthForm(false)} />
      )}

      {/* Posts Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4 px-4 max-w-5xl mx-auto">
        {/* Posts List */}
        <div className="flex-1 space-y-6 w-full sm:w-auto">
          {similarPosts.concat(uniquePosts).map((post) => (
            <div key={post.id} className="bg-white rounded-md shadow-sm overflow-hidden min-h-[29rem]">
              <img src={post.image} alt={post.title} className="w-full h-54 object-cover" />
              <div className="p-5">
                <p className="text-3xl text-black font-medium">{post.type}</p>
                <h2 className="text-2xl font-medium mt-1 mb-2">{post.title}</h2>
                <p className="text-sm text-black mt-5">{post.description}</p>
                {post.date || post.location ? (
                  <div className="flex text-lg text-black gap-4 mt-2">
                    {post.date && <span>{post.date}</span>}
                    {post.location && <span>{post.location}</span>}
                  </div>
                ) : null}
                <div className="flex items-center justify-between mt-4 pt-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/40" alt={post.author} className="w-6 h-6 rounded-full" />
                    <span className="text-lg text-black">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-black text-sm">{post.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="hidden sm:block w-64 p-4 ">
          <div className="bg-white p-4 rounded-lg mb-4">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center text-gray-500 ">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">Enter your location</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 ">
              Your location will help us serve better and upload a personalised experience.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg  ">
            <h3 className="text-sm font-semibold mb-3">RECOMMENDED GROUPS</h3>
            <div className="space-y-3 mt-10">
              {recommendedGroups.map((group, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={group.image} alt={group.name} className="w-8 h-8 rounded-full object-cover" />
                    <span className="text-sm text-gray-700">{group.name}</span>
                  </div>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors">Follow</button>
                </div>
              ))}
            </div>
            <div className="mt-10 text-sm text-blue-500 text-end cursor-pointer hover:underline ">See More...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;
