import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Snowflake,
  Shield,
} from "lucide-react";
import RoomCard from "../components/RoomCard";
// import { roomsData } from "../data/RoomsData";
import API from "../api/api";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchFeaturedRooms = async () => {
      try {
        const response = await API.get("/rooms");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching featured rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedRooms();
  }, []);

  const handleBookNow = (e, room) => {
    e.stopPropagation();
    navigate("/booking", { state: { room } });
  };

  // Filter only featured rooms
  const featuredRooms = rooms.filter((room) => room.featured);

  // Amenity icons mapping
  const amenityIcons = {
    wifi: { icon: Wifi, label: "Free WiFi" },
    coffee: { icon: Coffee, label: "Coffee Maker" },
    parking: { icon: Car, label: "Parking" },
    "air-conditioning": { icon: Snowflake, label: "Air Conditioning" },
    breakfast: { icon: Utensils, label: "Breakfast" },
    security: { icon: Shield, label: "24/7 Security" },
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
            Discover our carefully curated selection of premium accommodations
            designed for your comfort and luxury.
          </p>
        </div>

        {/* Rooms Scroll Container */}
        <div className="relative">
          {loading ? (
            <div className="py-20 text-center">
              <p className="text-gray-600">Loading featured rooms...</p>
            </div>
          ) : (
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-8 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuredRooms.map((room) => (
                <div
                  key={room.id}
                  className="flex-none w-88 sm:w-96 snap-start"
                >
                  <RoomCard
                    room={room}
                    amenityIcons={amenityIcons}
                    onBookNow={handleBookNow}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-end mt-6 space-x-3">
            <button
              onClick={scrollLeft}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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