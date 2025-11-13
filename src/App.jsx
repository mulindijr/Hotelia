import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/accomodation" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;