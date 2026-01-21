import { Users, Star } from "lucide-react";

const RoomCard = ({ room, amenityIcons, onBookNow }) => {

  const API_BASE = import.meta.env.VITE_APP_API_URL;
  const imgSrc = `${API_BASE}/storage/${room.image}`;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={(e) => onBookNow(e, room)}
    >
      {/* Room Image */}
      <div className="relative">
        <img
          src={imgSrc}
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
              {room.category} • {room.size} sqft
            </span>
            <span className="text-sm text-cyan-600 font-medium capitalize">
              {room.type}
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
              <div
                key={amenity}
                className="flex items-center gap-1 text-gray-500"
                title={amenityIcons[amenity]?.label}
              >
                <AmenityIcon className="w-4 h-4" />
              </div>
            ) : null;
          })}
          {room.amenities.length > 3 && (
            <span className="text-xs text-gray-500">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {renderStars(room.rating)}
          </div>
          <span className="text-sm text-gray-600">
            ({room.reviews} reviews)
          </span>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-2xl font-bold text-gray-900">
                KSh {room?.price ? Number(room.price).toLocaleString() : "0"}
              </span>
              {room.original_price && (
                <span className="text-sm text-gray-500 line-through">
                  KSh {room?.original_price ? Number(room.original_price).toLocaleString() : "0"}
                </span>
              )}
            </div>
            <span className="text-gray-600 text-sm">per night</span>
          </div>
          <button
            onClick={(e) => onBookNow(e, room)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;