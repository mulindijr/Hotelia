import Hero from "../components/Hero";
import HotelFeatures from "../components/HotelFeatures";
import AboutSection from "../components/AboutSection";
import HotelStats from "../components/HotelStats";
import FeaturedRooms from "../components/FeaturedRooms";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <HotelFeatures />
      <AboutSection />
      <HotelStats />
      <FeaturedRooms />
      <Testimonials />
    </div>
  );
};

export default Home;