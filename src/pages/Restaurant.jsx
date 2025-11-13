import React, { useState } from "react";
import {
  Star,
  Clock,
  Users,
  MapPin,
  Phone,
  Heart,
  Share2,
  Utensils,
} from "lucide-react";

const RestaurantPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDish, setSelectedDish] = useState(null);

  // Restaurant information
  const restaurantInfo = {
    name: "Savanna Grill",
    description:
      "Welcome to our exquisite hotel restaurant, offering authentic African fusion cuisine with panoramic city views",
    rating: 4.7,
    reviews: 892,
    operatingHours: "6:30 AM - 11:00 PM",
    priceRange: "$$",
    hours: {
      Breakfast: "6:30 AM - 10:30 AM",
      Lunch: "12:00 PM - 3:00 PM",
      Dinner: "6:00 PM - 11:00 PM",
      "Weekend Brunch": "Sat & Sun: 7:00 AM - 2:00 PM",
    },
    contact: {
      phone: "+254 20 123 4567",
      address: "Hotelia Hotel",
    },
    features: [
      "City Views",
      "Live Music Fridays",
      "Wine Selection",
      "Chef's Table",
      "Outdoor Terrace",
    ],
  };

  // Menu categories
  const menuCategories = [
    { id: "all", label: "All Menu" },
    { id: "breakfast", label: "Breakfast" },
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "african", label: "African Specialties" },
    { id: "desserts", label: "Desserts" },
    { id: "beverages", label: "Beverages" },
  ];

  // Menu items data
  const menuItems = [
    {
      id: 1,
      name: "Mandazi with Kenyan Coffee",
      category: "breakfast",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=400&h=300&fit=crop",
      description:
        "Traditional Swahili doughnuts served with premium Kenyan AA coffee",
      ingredients: [
        "Wheat flour",
        "Coconut milk",
        "Cardamom",
        "Kenyan AA coffee",
      ],
      spicy: false,
      vegetarian: true,
      chefSpecial: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Samosas Trio",
      category: "appetizers",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
      description:
        "Crispy pastry filled with spiced beef, vegetable, and lentil fillings",
      ingredients: ["Pastry", "Ground beef", "Peas", "Potatoes", "Spices"],
      spicy: true,
      vegetarian: false,
      chefSpecial: false,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Nyama Choma Platter",
      category: "african",
      price: 28,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      description:
        "Traditional Kenyan grilled meat served with kachumbari and ugali",
      ingredients: [
        "Prime beef",
        "Goat meat",
        "Tomatoes",
        "Onions",
        "Maize flour",
      ],
      spicy: false,
      vegetarian: false,
      chefSpecial: true,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Grilled Tilapia",
      category: "mains",
      price: 22,
      image:
        "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400&h=300&fit=crop",
      description:
        "Fresh Lake Victoria tilapia with lemon herb dressing and sukuma wiki",
      ingredients: ["Fresh tilapia", "Lemon", "Herbs", "Sukuma wiki", "Spices"],
      spicy: false,
      vegetarian: false,
      chefSpecial: false,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Vegetable Pilau",
      category: "mains",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop",
      description:
        "Fragrant rice cooked with seasonal vegetables and traditional spices",
      ingredients: [
        "Basmati rice",
        "Mixed vegetables",
        "Pilau masala",
        "Onions",
      ],
      spicy: false,
      vegetarian: true,
      chefSpecial: false,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Mandazi Bread Pudding",
      category: "desserts",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop",
      description:
        "Traditional mandazi transformed into a warm bread pudding with vanilla sauce",
      ingredients: ["Mandazi", "Custard", "Vanilla", "Raisins", "Cinnamon"],
      spicy: false,
      vegetarian: true,
      chefSpecial: true,
      rating: 4.8,
    },
    {
      id: 7,
      name: "Dawa Mocktail",
      category: "beverages",
      price: 8,
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop",
      description:
        "Our signature non-alcoholic version of Kenya's famous Dawa cocktail",
      ingredients: ["Fresh lime", "Honey", "Ginger", "Mint", "Sparkling water"],
      spicy: false,
      vegetarian: true,
      chefSpecial: false,
      rating: 4.6,
    },
    {
      id: 8,
      name: "Chicken Biryani",
      category: "african",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
      description:
        "Fragrant basmati rice with spiced chicken and caramelized onions",
      ingredients: [
        "Basmati rice",
        "Chicken",
        "Biryani spices",
        "Yogurt",
        "Saffron",
      ],
      spicy: true,
      vegetarian: false,
      chefSpecial: false,
      rating: 4.7,
    },
  ];

  // Filter menu items based on active category
  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const openDishModal = (dish) => {
    setSelectedDish(dish);
  };

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-cyan-600 to-blue-600 text-white py-20 mt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Restaurant
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              {restaurantInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>
                  {restaurantInfo.rating} ({restaurantInfo.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Open: {restaurantInfo.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5" />
                <span>{restaurantInfo.priceRange}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Restaurant Info Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Contact & Location
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                    <span>{restaurantInfo.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-cyan-600" />
                    <span>{restaurantInfo.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Dining Hours
                </h3>
                <div className="space-y-2">
                  {Object.entries(restaurantInfo.hours).map(([meal, hours]) => (
                    <div
                      key={meal}
                      className="flex justify-between text-gray-700"
                    >
                      <span className="font-medium">{meal}:</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Restaurant Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {restaurantInfo.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Navigation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Menu
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-cyan-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 shadow-md"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onItemClick={openDishModal}
                />
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Utensils className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No items found
                </h3>
                <p className="text-gray-600">
                  No menu items available in this category. Please try another
                  category.
                </p>
              </div>
            )}
          </div>

          {/* Chef's Recommendation */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Chef's Recommendation
                </h3>
                <p className="text-gray-600">From Executive Chef Kamau</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic">
              "Our Nyama Choma Platter is prepared using traditional Kenyan
              techniques passed down through generations. We source our meat
              from local Maasai herders and grill it over acacia wood for that
              authentic smoky flavor that reminds you of home."
            </p>
          </div>
        </div>
      </section>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedDish.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-600">{selectedDish.rating}</span>
                    {selectedDish.chefSpecial && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                        Chef's Special
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-600">
                    KSh {selectedDish.price * 100}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{selectedDish.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ingredients:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDish.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-cyan-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-cyan-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ item, onItemClick }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div
        className="relative cursor-pointer"
        onClick={() => onItemClick(item)}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.chefSpecial && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Chef's Pick
            </span>
          )}
          {item.vegetarian && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Vegetarian
            </span>
          )}
          {item.spicy && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Spicy
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          {renderStars(item.rating)}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-600">
              KSh {item.price * 100}
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantPage;