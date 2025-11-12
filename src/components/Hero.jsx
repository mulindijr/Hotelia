import { useState } from "react";
import bgImage from "../assets/hero/hero.jpg";
import { Search } from "lucide-react";

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Ken Burns Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform origin-center animate-kenBurns"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-48 pb-20 mb-20">
        {/* Headings */}
        <div className="text-center mb-10 sm:mb-12 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to <span className="text-indigo-400">Hotelia</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Experience unmatched comfort and luxury in the heart of paradise.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
            {/* Check-in */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-in
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-out
              </label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              />
            </div>

            {/* Adults */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adults
              </label>
              <select
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Children
              </label>
              <select
                value={children}
                onChange={(e) => setChildren(parseInt(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-white"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 rounded-full hover:bg-indigo-700 transition duration-300">
              <Search className="w-5 h-5" />
              <span className="hidden md:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ken Burns keyframes */}
      <style jsx>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.05);
          }
        }

        .animate-kenBurns {
          animation: kenBurns 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;