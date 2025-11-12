import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, Star } from 'lucide-react';

const FeaturedRooms = () => {
  const scrollContainerRef = useRef(null);

  // Sample room data
  const rooms = [
    {
      id: 1,
      name: "Deluxe Ocean View",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
      occupants: 2,
      price: 299,
      rating: 4.8,
      description: "Luxurious room with stunning ocean views and premium amenities"
    },
    {
      id: 2,
      name: "Executive Suite",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      occupants: 3,
      price: 399,
      rating: 4.9,
      description: "Spacious suite with separate living area and workspace"
    },
    {
      id: 3,
      name: "Family Room",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      occupants: 4,
      price: 349,
      rating: 4.7,
      description: "Perfect for families with extra space and child-friendly amenities"
    },
    {
      id: 4,
      name: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      occupants: 2,
      price: 599,
      rating: 5.0,
      description: "Ultimate luxury with private balcony and premium services"
    },
    {
      id: 5,
      name: "Business Class",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      occupants: 2,
      price: 329,
      rating: 4.6,
      description: "Designed for business travelers with enhanced connectivity"
    },
    {
      id: 6,
      name: "Honeymoon Suite",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400&h=300&fit=crop",
      occupants: 2,
      price: 459,
      rating: 4.9,
      description: "Romantic getaway with special amenities and privacy"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleRoomClick = (roomId) => {
    // Navigate to room details page
    console.log(`Navigating to room details: ${roomId}`);
    // navigate(`/rooms/${roomId}`);
  };

  const handleBookNow = (e, roomId) => {
    e.stopPropagation(); // Prevent triggering the room click
    console.log(`Booking room: ${roomId}`);
    // Handle booking logic here
  };

  return (
    <section className="bg-cyan-50 -mt-28 sm:-mt-10 px-4 pb-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 pt-36 sm:pt-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Best Rooms
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium accommodations designed for your comfort and luxury.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer mt-6 p-2 sm:p-3 text-base sm:text-lg text-white font-semibold rounded-full w-40 mx-auto sm:mx-0">
            View All Rooms
          </button>
        </div>

        {/* Rooms Grid/Scroll Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide gap-6 pb-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex-none w-80 snap-start bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleRoomClick(room.id)}
              >
                {/* Room Image */}
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">
                      {room.rating}
                    </span>
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  {/* Room Name and Occupants */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {room.name}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        Up to {room.occupants} {room.occupants === 1 ? 'person' : 'people'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Price and Book Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        ${room.price}
                      </span>
                      <span className="text-gray-600 text-sm ml-1">/night</span>
                    </div>
                    <button
                      onClick={(e) => handleBookNow(e, room.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end mt-6 space-x-3">
            <button
              onClick={scrollLeft}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;