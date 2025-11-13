import React, { useState } from 'react';
import { Users, Star, Wifi, Coffee, Car, Utensils, Snowflake, Shield } from 'lucide-react';

const Rooms = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Room categories
  const roomCategories = [
    { id: 'all', label: 'All Rooms' },
    { id: 'luxe', label: 'Luxe Suites' },
    { id: 'standard', label: 'Standard' },
    { id: 'economy', label: 'Economy' },
    { id: 'family', label: 'Family Rooms' },
    { id: 'business', label: 'Business Class' }
  ];

  // Room data
  const roomsData = [
    {
      id: 1,
      name: "Presidential Suite",
      category: "luxe",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      occupants: 2,
      size: "85 m²",
      price: 10000,
      originalPrice: 14999,
      rating: 5.0,
      reviews: 128,
      amenities: ["wifi", "coffee", "air-conditioning", "parking"],
      description: "Ultimate luxury with private balcony, premium services, and exclusive amenities",
      featured: true
    },
    {
      id: 2,
      name: "Deluxe Ocean View",
      category: "luxe",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
      occupants: 2,
      size: "45 m²",
      price: 8000,
      originalPrice: 12000,
      rating: 4.8,
      reviews: 256,
      amenities: ["wifi", "coffee", "air-conditioning"],
      description: "Luxurious room with stunning ocean views and premium amenities",
      featured: true
    },
    {
      id: 3,
      name: "Executive Suite",
      category: "standard",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      occupants: 3,
      size: "55 m²",
      price: 39999,
      originalPrice: 44999,
      rating: 4.9,
      reviews: 189,
      amenities: ["wifi", "coffee", "air-conditioning", "parking"],
      description: "Spacious suite with separate living area and workspace",
      featured: false
    },
    {
      id: 4,
      name: "Family Room",
      category: "family",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      occupants: 4,
      size: "60 m²",
      price: 12345,
      originalPrice: 39999,
      rating: 4.7,
      reviews: 1345,
      amenities: ["wifi", "coffee", "air-conditioning"],
      description: "Perfect for families with extra space and child-friendly amenities",
      featured: false
    },
    {
      id: 5,
      name: "Business Class",
      category: "business",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      occupants: 2,
      size: "40 m²",
      price: 20000,
      originalPrice: 37000,
      rating: 4.6,
      reviews: 203,
      amenities: ["wifi", "coffee", "air-conditioning", "parking"],
      description: "Designed for business travelers with enhanced connectivity",
      featured: false
    },
    {
      id: 6,
      name: "Economy Double",
      category: "economy",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      occupants: 2,
      size: "30 m²",
      price: 2000,
      originalPrice: 4500,
      rating: 4.4,
      reviews: 145,
      amenities: ["wifi", "air-conditioning"],
      description: "Comfortable and affordable accommodation with essential amenities",
      featured: false
    },
    {
      id: 7,
      name: "Honeymoon Suite",
      category: "luxe",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=400&h=300&fit=crop",
      occupants: 2,
      size: "50 m²",
      price: 30000,
      originalPrice: 49999,
      rating: 4.9,
      reviews: 98,
      amenities: ["wifi", "coffee", "air-conditioning"],
      description: "Romantic getaway with special amenities and privacy",
      featured: true
    },
    {
      id: 8,
      name: "Standard Queen",
      category: "standard",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      occupants: 2,
      size: "35 m²",
      price: 3400,
      originalPrice: 6400,
      rating: 4.5,
      reviews: 178,
      amenities: ["wifi", "coffee", "air-conditioning"],
      description: "Comfortable standard room with all essential amenities",
      featured: false
    }
  ];

  // Amenity icons mapping
  const amenityIcons = {
    wifi: { icon: Wifi, label: 'Free WiFi' },
    coffee: { icon: Coffee, label: 'Coffee Maker' },
    parking: { icon: Car, label: 'Parking' },
    'air-conditioning': { icon: Snowflake, label: 'Air Conditioning' },
    breakfast: { icon: Utensils, label: 'Breakfast' },
    security: { icon: Shield, label: '24/7 Security' }
  };

  // Filter rooms based on active tab
  const filteredRooms = activeTab === 'all' 
    ? roomsData 
    : roomsData.filter(room => room.category === activeTab);

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  const handleRoomClick = (roomId) => {
    // Navigate to room details
    console.log(`Navigating to room details: ${roomId}`);
  };

  const handleBookNow = (e, roomId) => {
    e.stopPropagation();
    console.log(`Booking room: ${roomId}`);
  };

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-cyan-600 to-blue-600 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Rooms & Suites</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the perfect accommodation for your stay, from luxurious suites to comfortable economy rooms
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Sort Section */}
          <div className="mb-12">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {roomCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === category.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 shadow-md'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort and Results Info */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div className="text-gray-600">
                Showing <span className="font-semibold">{sortedRooms.length}</span> rooms
                {activeTab !== 'all' && ` in ${roomCategories.find(cat => cat.id === activeTab)?.label}`}
              </div>
              
              <div className="flex items-center gap-4">
                <label className="text-gray-700 font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          {sortedRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  amenityIcons={amenityIcons}
                  onRoomClick={handleRoomClick}
                  onBookNow={handleBookNow}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No rooms found
              </h3>
              <p className="text-gray-600">
                No rooms available in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Room Card Component
const RoomCard = ({ room, amenityIcons, onRoomClick, onBookNow }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onRoomClick(room.id)}
    >
      {/* Room Image */}
      <div className="relative">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        
        {/* Featured Badge */}
        {room.featured && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-gray-700">
            {room.rating}
          </span>
        </div>

        {/* Occupants Badge */}
        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>{room.occupants}</span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6">
        {/* Room Name and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-cyan-600 transition-colors">
            {room.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-cyan-600 font-medium capitalize">
              {room.category} • {room.size}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity) => {
            const AmenityIcon = amenityIcons[amenity]?.icon;
            return AmenityIcon ? (
              <div key={amenity} className="flex items-center gap-1 text-gray-500" title={amenityIcons[amenity]?.label}>
                <AmenityIcon className="w-4 h-4" />
              </div>
            ) : null;
          })}
          {room.amenities.length > 3 && (
            <span className="text-xs text-gray-500">+{room.amenities.length - 3} more</span>
          )}
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {renderStars(room.rating)}
          </div>
          <span className="text-sm text-gray-600">({room.reviews} reviews)</span>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                KSh {room.price}
              </span>
              {room.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  KSh {room.originalPrice}
                </span>
              )}
            </div>
            <span className="text-gray-600 text-sm">per night</span>
          </div>
          <button
            onClick={(e) => onBookNow(e, room.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;