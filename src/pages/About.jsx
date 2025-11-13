import { Award, Users, Heart, Clock, Star, Quote } from "lucide-react";
import f1 from "../assets/services/f-1.png";
import f2 from "../assets/services/f-2.png";
import f3 from "../assets/services/f-3.png";
import f4 from "../assets/services/f-4.png";

const About = () => {
  // Hotel features data
  const features = [
    {
      icon: f1,
      title: "Airport Transport",
      description: "Complimentary airport pickup and drop-off service",
    },
    {
      icon: f2,
      title: "All Inclusive",
      description: "Full board meals and premium beverages included",
    },
    {
      icon: f3,
      title: "Air-conditioned",
      description: "Climate-controlled rooms for ultimate comfort",
    },
    {
      icon: f4,
      title: "Under Protection",
      description: "24/7 security and surveillance for your safety",
    },
  ];

  // Management team data
  const managementTeam = [
    {
      name: "Sarah Mitchell",
      position: "General Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      quote:
        "Our commitment to excellence ensures every guest feels like royalty.",
      experience: "15+ years in hospitality",
    },
    {
      name: "James Rodriguez",
      position: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      quote:
        "We believe in creating memorable experiences that last a lifetime.",
      experience: "12+ years in hotel operations",
    },
    {
      name: "Emily Chen",
      position: "Guest Relations Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      quote: "Personalized service is at the heart of everything we do.",
      experience: "10+ years in customer service",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Michael Thompson",
      position: "Head Chef",
      image:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=150&h=150&fit=crop&crop=face",
      department: "Culinary",
    },
    {
      name: "Lisa Wang",
      position: "Head Housekeeper",
      image:
        "https://images.unsplash.com/photo-1551836026-d5c88ac5c73d?w=150&h=150&fit=crop&crop=face",
      department: "Housekeeping",
    },
    {
      name: "David Park",
      position: "Concierge Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      department: "Guest Services",
    },
    {
      name: "Maria Garcia",
      position: "Spa Director",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      department: "Wellness",
    },
    {
      name: "Robert Johnson",
      position: "Maintenance Supervisor",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      department: "Facilities",
    },
    {
      name: "Sophie Williams",
      position: "Event Coordinator",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      department: "Events",
    },
  ];

  // Stats data
  const stats = [
    { number: "50+", label: "Luxury Rooms", icon: Award },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "100+", label: "Team Members", icon: Users },
    { number: "98%", label: "Guest Satisfaction", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-cyan-500 to-cyan-200 text-white py-20 mt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Hotel
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where luxury meets comfort, and every stay becomes a cherished
            memory
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2008, our hotel has been a beacon of luxury and
                comfort in the heart of the city. What started as a small
                boutique hotel has grown into a premier destination for
                travelers seeking exceptional experiences and unparalleled
                service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our philosophy is simple: every guest deserves to feel special.
                From the moment you step through our doors, our dedicated team
                works tirelessly to ensure your stay exceeds expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
                alt="Hotel Lobby"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 font-semibold">
                  "Exceptional service and stunning accommodations"
                </p>
                <p className="text-sm text-gray-600 mt-2">- Travel Magazine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the exceptional services and amenities that set us apart
              in luxury hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white px-6 py-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-16 w-20 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-cyan-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((manager, index) => (
              <div
                key={index}
                className="bg-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <img
                    src={manager.image}
                    alt={manager.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    {manager.name}
                  </h3>
                  <p className="text-cyan-600 font-semibold">
                    {manager.position}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {manager.experience}
                  </p>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-cyan-200 absolute -top-2 -left-2" />
                  <blockquote className="text-gray-700 italic pl-4">
                    "{manager.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazing Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Amazing Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making your stay
              unforgettable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:border-cyan-200 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {member.name}
                </h3>
                <p className="text-cyan-600 text-xs font-medium">
                  {member.position}
                </p>
                <p className="text-gray-600 text-xs">{member.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cyan-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To create extraordinary experiences by providing impeccable
                service, luxurious accommodations, and personalized attention
                that exceeds our guests' expectations and creates lasting
                memories.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the most beloved and recommended luxury hotel destination,
                known for our unwavering commitment to excellence, innovation in
                hospitality, and genuine care for our guests and community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;