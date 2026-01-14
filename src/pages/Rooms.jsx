import { useState, useEffect } from "react";
import {
  Users,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Snowflake,
  Shield,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
//import { roomsData } from "../data/RoomsData";
import API from "../api/api";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const navigate = useNavigate();

  // Room categories
  const roomCategories = [
    { id: "all", label: "All Rooms" },
    { id: "luxe", label: "Luxe Suites" },
    { id: "standard", label: "Standard" },
    { id: "economy", label: "Economy" },
    { id: "family", label: "Family Rooms" },
    { id: "business", label: "Business Class" },
  ];

  // Amenity icons mapping
  const amenityIcons = {
    wifi: { icon: Wifi, label: "Free WiFi" },
    coffee: { icon: Coffee, label: "Coffee Maker" },
    parking: { icon: Car, label: "Parking" },
    "air-conditioning": { icon: Snowflake, label: "Air Conditioning" },
    breakfast: { icon: Utensils, label: "Breakfast" },
    security: { icon: Shield, label: "24/7 Security" },
  };

  // Fetch rooms data from API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await API.get("/rooms");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Filter rooms based on active tab
  const filteredRooms =
    activeTab === "all"
      ? rooms
      : rooms.filter((room) => room.category === activeTab);

  // Sort rooms
  const sortedRooms = [...filteredRooms].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "featured":
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  const handleBookNow = (e, room) => {
    e.stopPropagation();
    navigate("/booking", { state: { room } });
  };

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-cyan-600 to-blue-700 text-white py-20 mt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Rooms & Suites
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the perfect accommodation for your stay, from luxurious
            suites to comfortable economy rooms
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Sort Section */}
          <div className="mb-12">
            {/* Category Tabs */}
            <div className="flex sm:justify-center gap-3 mb-8 overflow-x-auto scroll-hide px-2 py-3">
              {roomCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer snap-start ${
                    activeTab === category.id
                      ? "bg-cyan-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 shadow-md"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort and Results Info */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
              <div className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{sortedRooms.length}</span>{" "}
                {sortedRooms.length > 1 ? "rooms" : "room"}
                {activeTab !== "all" &&
                  ` in ${
                    roomCategories.find((cat) => cat.id === activeTab)?.label
                  }`}
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
          {loading ? (
            <div className="text-center py-12 flex flex-col items-center">
            <Loader2 className="w-16 h-16 text-cyan-600 animate-spin" />
            <p className="mt-4 text-gray-600">Loading rooms...</p>
          </div>
          ) : sortedRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  amenityIcons={amenityIcons}
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
                No rooms available in this category. Please try another
                category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Rooms;