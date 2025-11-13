import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Building, Utensils, Eye, Users, Mountain, Sparkles } from 'lucide-react';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery categories
  const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: Eye },
    { id: 'rooms', label: 'Rooms & Suites', icon: Building },
    { id: 'restaurant', label: 'Restaurant', icon: Utensils },
    { id: 'amenities', label: 'Amenities', icon: Sparkles },
    { id: 'events', label: 'Events', icon: Users },
    { id: 'views', label: 'City Views', icon: Mountain }
  ];

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      category: 'rooms',
      title: 'Presidential Suite',
      description: 'Luxurious presidential suite with panoramic city views',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      category: 'rooms',
      title: 'Deluxe Room',
      description: 'Spacious deluxe room with modern amenities',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      category: 'restaurant',
      title: 'Savanna Grill',
      description: 'Our main restaurant serving African fusion cuisine',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 4,
      category: 'restaurant',
      title: 'Dining Area',
      description: 'Elegant dining space with ambient lighting',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      category: 'amenities',
      title: 'Infinity Pool',
      description: 'Stunning infinity pool overlooking the city',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 6,
      category: 'amenities',
      title: 'Spa & Wellness',
      description: 'Relaxing spa treatment room',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 7,
      category: 'amenities',
      title: 'Fitness Center',
      description: 'State-of-the-art fitness facility',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 8,
      category: 'events',
      title: 'Wedding Ceremony',
      description: 'Beautiful wedding setup in our garden',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 9,
      category: 'events',
      title: 'Conference Room',
      description: 'Modern conference facility for business events',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 10,
      category: 'views',
      title: 'City Skyline',
      description: 'Breathtaking view of Nairobi skyline from our rooftop',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 11,
      category: 'views',
      title: 'Sunset View',
      description: 'Magnificent sunset over the city',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 12,
      category: 'rooms',
      title: 'Executive Suite',
      description: 'Executive suite with separate living area',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 13,
      category: 'restaurant',
      title: 'Outdoor Terrace',
      description: 'Al fresco dining on our beautiful terrace',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 14,
      category: 'amenities',
      title: 'Lobby Area',
      description: 'Grand hotel lobby with elegant decor',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 15,
      category: 'events',
      title: 'Banquet Hall',
      description: 'Spacious banquet hall for special occasions',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 16,
      category: 'views',
      title: 'Night View',
      description: 'City lights at night from our upper floors',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  // Filter images based on active category
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  // Featured images for the hero section
  const featuredImages = galleryImages.filter(image => image.featured);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-cyan-600 to-blue-700 text-white py-20 mt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hotel Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the beauty and luxury of Hotelia through our visual journey
          </p>
        </div>
      </section>

      {/* Featured Images Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {featuredImages.slice(0, 4).map((image, index) => (
              <div 
                key={image.id}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => {
                  const fullIndex = galleryImages.findIndex(img => img.id === image.id);
                  openLightbox(image, fullIndex);
                }}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {galleryCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-cyan-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-cyan-100 hover:text-cyan-700 shadow-md'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  {image.featured && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Eye className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                No photos available in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">{galleryImages.length}+</div>
              <div className="text-sm text-gray-600">Beautiful Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">{galleryCategories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Photo Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <div className="mt-2 text-sm text-gray-400">
                {currentIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto py-2">
            {filteredImages.map((image, index) => (
              <img
                key={image.id}
                src={image.image}
                alt=""
                className={`w-12 h-12 object-cover rounded cursor-pointer border-2 ${
                  index === currentIndex ? 'border-cyan-500' : 'border-transparent'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedImage(image);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;