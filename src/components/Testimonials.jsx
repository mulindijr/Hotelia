import React from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Business Traveler",
      location: "New York, USA",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "The Executive Suite was perfect for my business trip. The attention to detail and premium amenities made my stay incredibly comfortable. Will definitely book again!",
      stay: "Stayed in Executive Suite",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Family Vacation",
      location: "Toronto, Canada",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Our family had an amazing time in the Family Room. The kids loved the space and the staff went above and beyond to make our vacation memorable.",
      stay: "Stayed in Family Room",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Honeymoon",
      location: "Miami, USA",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "The Honeymoon Suite was absolutely magical! Every detail was perfect, from the romantic setup to the stunning views. Truly a unforgettable experience.",
      stay: "Stayed in Honeymoon Suite",
      date: "January 2024",
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Couple Getaway",
      location: "London, UK",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Beautiful room with exceptional service. The Deluxe Ocean View room exceeded our expectations. The balcony overlooking the ocean was breathtaking.",
      stay: "Stayed in Deluxe Ocean View",
      date: "December 2023",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Anniversary Celebration",
      location: "Sydney, Australia",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      text: "Celebrated our 10th anniversary at the Presidential Suite and it was worth every penny. The luxury and attention to detail were beyond compare.",
      stay: "Stayed in Presidential Suite",
      date: "November 2023",
    },
    {
      id: 6,
      name: "David Park",
      position: "Business Conference",
      location: "Seoul, South Korea",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      text: "Perfect for business needs. Great connectivity, comfortable workspace, and professional staff. The Business Class room had everything I needed.",
      stay: "Stayed in Business Class",
      date: "October 2023",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read genuine reviews from our
            satisfied guests.
          </p>
        </div>

        {/* Main Testimonial Display - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Testimonial */}
            <div
              className={`transform transition-all duration-500 ease-in-out ${
                currentTestimonial === 0
                  ? "scale-100 opacity-100"
                  : currentTestimonial === 1
                  ? "scale-95 opacity-60 -translate-x-4"
                  : "scale-90 opacity-40 -translate-x-8"
              }`}
            >
              <TestimonialCard
                testimonial={
                  testimonials[
                    currentTestimonial === 0
                      ? testimonials.length - 1
                      : currentTestimonial - 1
                  ]
                }
              />
            </div>

            {/* Center Testimonial (Featured) */}
            <div className="transform scale-105 relative z-10">
              <div className="relative">
                <div className="absolute -top-4 -left-4 z-0">
                  <Quote className="w-24 h-24 text-blue-100 transform -rotate-12" />
                </div>
                <TestimonialCard
                  testimonial={testimonials[currentTestimonial]}
                  featured={true}
                />
              </div>
            </div>

            {/* Right Testimonial */}
            <div
              className={`transform transition-all duration-500 ease-in-out ${
                currentTestimonial === testimonials.length - 1
                  ? "scale-100 opacity-100"
                  : currentTestimonial === testimonials.length - 2
                  ? "scale-95 opacity-60 translate-x-4"
                  : "scale-90 opacity-40 translate-x-8"
              }`}
            >
              <TestimonialCard
                testimonial={
                  testimonials[
                    currentTestimonial === testimonials.length - 1
                      ? 0
                      : currentTestimonial + 1
                  ]
                }
              />
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Testimonial Display */}
        <div className="lg:hidden">
          <div className="relative">
            <TestimonialCard
              testimonial={testimonials[currentTestimonial]}
              featured={true}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-12 space-x-8">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full shadow-md transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, featured = false }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 h-full transition-all duration-300 ${
        featured
          ? "border-2 border-blue-200 shadow-xl"
          : "border border-gray-100"
      }`}
    >
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
        <span className="ml-2 text-sm text-gray-600">
          {testimonial.rating}.0
        </span>
      </div>

      {/* Testimonial Text */}
      <blockquote className="mb-6">
        <p className="text-gray-700 text-lg leading-relaxed italic">
          "{testimonial.text}"
        </p>
      </blockquote>

      {/* Guest Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.position}</div>
          <div className="text-xs text-gray-500 mt-1">
            {testimonial.stay} • {testimonial.date}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
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
          {testimonial.location}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;