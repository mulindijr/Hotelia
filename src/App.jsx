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
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/accommodation" element={<Rooms />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;