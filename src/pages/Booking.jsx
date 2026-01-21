import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  ChevronRight,
  Bed,
  Users,
  Square,
  Star,
  Wifi,
  Coffee,
  Snowflake,
  Car,
  Calendar as CalendarIcon,
  User,
  Mail,
  Phone,
  CreditCard,
  Lock,
  MapPin,
  MessageSquare,
  Shield,
  Utensils,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import API from "../api/api";
import toast from "react-hot-toast";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state?.room;

  if (!room) return <p>No room selected.</p>;

  const [checkIn, setCheckIn] = useState(location.state?.checkIn || "");
  const [checkOut, setCheckOut] = useState(location.state?.checkOut || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewName, setReviewName] = useState("");
  const [review, setReview] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [submittedReviews, setSubmittedReviews] = useState([]);
  const [adults, setAdults] = useState(location.state?.adults || 1);
  const [children, setChildren] = useState(location.state?.children || 0);
  const [country, setCountry] = useState("Kenya");
  const [specialRequests, setSpecialRequests] = useState("");
  const [notes, setNotes] = useState("");
  const [checkInError, setCheckInError] = useState("");
  const [checkOutError, setCheckOutError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedRanges, setBookedRanges] = useState([]);

  const API_BASE = import.meta.env.VITE_APP_API_URL;
  const imgSrc = `${API_BASE}/storage/${room.image}`;

  // Calculate total nights
  const getTotalNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diffTime = new Date(checkOut) - new Date(checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const totalNights = getTotalNights();
  const totalPrice = totalNights * room.price;

  // Ensure check-in date is today or later
  const isValidCheckIn = (checkIn) => {
    if (!checkIn) return false;
    const today = new Date();
    const checkInDate = new Date(checkIn);
    today.setHours(0, 0, 0, 0); // reset time for comparison
    return checkInDate >= today;
  };

  // Ensure check-out is after check-in
  const isValidCheckOut = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) return false;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    return checkOutDate > checkInDate;
  };

  const handleCheckInChange = (e) => {
    const value = e.target.value;
    setCheckIn(value);

    if (!isValidCheckIn(value)) {
      setCheckInError("Check-in date cannot be in the past");
    } else {
      setCheckInError("");
    }

    // Re-validate check-out whenever check-in changes
    if (checkOut && !isValidCheckOut(value, checkOut)) {
      setCheckOutError("Check-out must be after check-in");
    } else {
      setCheckOutError("");
    }
  };

  const handleCheckOutChange = (e) => {
    const value = e.target.value;
    setCheckOut(value);

    if (!isValidCheckOut(checkIn, value)) {
      setCheckOutError("Check-out must be after check-in");
    } else {
      setCheckOutError("");
    }
  };

  // Simple email regex validation
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Accepts 07XXXXXXXX, 2547XXXXXXXX, or +2547XXXXXXXX
  const isValidPhone = (phone) => {
    const regex = /^(?:\+254|0|254)7\d{8}$/;
    return regex.test(phone);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!isValidEmail(value)) {
      setEmailError("Invalid Email Address");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (!isValidPhone(value)) {
      setPhoneError("Invalid Phone Number");
    } else {
      setPhoneError("");
    }
  };

  const isFormValid =
    name.trim() &&
    isValidEmail(email) &&
    isValidPhone(phone) &&
    isValidCheckIn(checkIn) &&
    isValidCheckOut(checkIn, checkOut) &&
    adults > 0 &&
    Number(adults) + Number(children) <= room.occupants;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const bookingPayload = {
      customer: {
        name,
        email,
        phone,
        country,
      },
      room_id: room.id,
      check_in: checkIn,
      check_out: checkOut,
      adults: Number(adults),
      children: Number(children),
      special_requests: specialRequests || null,
      notes: notes || null,
      payment_method: paymentMethod === "mpesa" ? "M-Pesa" : "Pay on Arrival",
      paid_amount: paymentMethod === "mpesa" ? totalPrice : 0,
    };

    try {
      setIsSubmitting(true);

      const response = await API.post("/bookings", bookingPayload);

      toast.success(response.data.message || "Booking successfull!");

      navigate("/booking-success", {
        state: {
          bookingData: response.data.data,
        },
      });
    } catch (error) {
      const backendMessage =
        error.response?.data?.error || error.response?.data?.message;
      console.error("Booking failed:", backendMessage);
      toast.error(backendMessage || "Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchAvailability = async () => {
      const res = await API.get(`/rooms/${room.id}/availability`);
      setBookedRanges(res.data.unavailable);
    };

    fetchAvailability();
  }, [room.id]);

  const isBookedDate = (date) => {
    return bookedRanges.some(({ start, end }) => {
      const d = date.setHours(0, 0, 0, 0);
      return (
        d >= new Date(start).setHours(0, 0, 0, 0) &&
        d < new Date(end).setHours(0, 0, 0, 0)
      );
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      name: reviewName,
      rating: reviewRating,
      comment: review,
      date: new Date().toLocaleDateString(),
    };

    setSubmittedReviews([newReview, ...submittedReviews]);
    setReviewName("");
    setReview("");
    setReviewRating(5);
    setShowReviewForm(false);
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="w-5 h-5" />;
      case "coffee":
        return <Coffee className="w-5 h-5" />;
      case "breakfast":
        return <Utensils className="w-5 h-5" />;
      case "ac":
        return <Snowflake className="w-5 h-5" />;
      case "parking":
        return <Car className="w-5 h-5" />;
      case "security":
        return <Shield className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : "button"}
            onClick={() =>
              interactive && onRatingChange && onRatingChange(star)
            }
            className={`focus:outline-none ${
              !interactive ? "cursor-default" : ""
            }`}
          >
            <Star
              className={`w-5 h-5 ${
                star <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cyan-50 py-8">
      <div className="max-w-6xl mx-auto px-4 mt-20">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center h-[60vh]">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-gray-800 capitalize">
              {room.name}
            </h2>

            <div className="bg-cyan-500 px-6 py-2 rounded-full inline-flex items-center space-x-2 text-white font-semibold text-lg mt-4">
              <Link
                to="/"
                className="flex items-center space-x-1 hover:text-gray-800"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>

              <ChevronRight className="w-4 h-4" />

              <Link to="/accommodation" className="hover:text-gray-800">
                Rooms
              </Link>

              <ChevronRight className="w-4 h-4" />

              <span className="capitalize text-gray-800">{room.category}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Room Details Section */}
          <div className="space-y-6">
            {/* Room Header */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {room.name}
              </h1>

              {/* Room Image */}
              <img
                src={imgSrc}
                alt={room.name}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />

              {/* Rating and Reviews */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-semibold">{room.rating}</span>
                  </div>
                  <span className="text-gray-600">
                    ({room.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Room Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-gray-600">
                    {room.occupants} Guests
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Square className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-gray-600">
                    {room.size} sqft
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-gray-600 capitalize">
                    {room.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {room.description}
              </p>

              {/* Amenities */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {getAmenityIcon(amenity)}
                      <span className="text-sm text-gray-700 capitalize">
                        {amenity.replace("-", " ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Room Availability
              </h3>

              <div className="flex justify-center">
                <Calendar
                  tileClassName={({ date }) =>
                    isBookedDate(date) ? "booked-tile" : null
                  }
                  tileDisabled={({ date }) => isBookedDate(date)}
                />
              </div>

              <div className="mt-4 text-sm text-gray-600 flex ml-20 items-center">
                <span className="inline-block w-3 h-3 bg-red-400 mr-2 rounded"></span>
                <p className="font-semibold">Booked dates</p>
              </div>
            </div>

            {/* Leave Review Button */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Guest Reviews
                </h3>
                <button
                  onClick={() => setShowReviewForm(!showReviewForm)}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  {showReviewForm ? "Cancel Review" : "Write a Review"}
                </button>
              </div>

              {/* Review Form */}
              {showReviewForm && (
                <form
                  onSubmit={handleReviewSubmit}
                  className="mt-6 p-4 bg-cyan-50 rounded-lg border border-cyan-200"
                >
                  <h4 className="text-lg font-semibold mb-4">
                    Leave Your Review
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={reviewName}
                        onChange={(e) => setReviewName(e.target.value)}
                        required
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Your Rating
                      </label>
                      {renderStars(reviewRating, true, setReviewRating)}
                      <span className="text-sm text-gray-600 ml-2">
                        {reviewRating} out of 5 stars
                      </span>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Your Review
                      </label>
                      <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Share your experience with this room..."
                        rows="4"
                        required
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              )}

              {/* Submitted Reviews */}
              <div className="mt-6 space-y-4">
                {submittedReviews.map((reviewItem) => (
                  <div
                    key={reviewItem.id}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="font-semibold text-gray-900">
                          {reviewItem.name}
                        </h5>
                        <div className="flex items-center space-x-2 mt-1">
                          {renderStars(reviewItem.rating)}
                          <span className="text-sm text-gray-500">
                            {reviewItem.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{reviewItem.comment}</p>
                  </div>
                ))}

                {submittedReviews.length === 0 && !showReviewForm && (
                  <p className="text-gray-500 text-center py-4">
                    No reviews yet. Be the first to share your experience!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Book Your Stay
              </h2>

              {/* Price Display */}
              <div className="mb-6 p-4 bg-cyan-50 rounded-lg">
                <div className="flex items-baseline space-x-2">
                  <span className="text-xl sm:text-3xl font-bold text-cyan-700">
                    KSh{" "}
                    {room?.price ? Number(room.price).toLocaleString() : "0"}
                  </span>
                  <span className="text-md sm:text-lg text-gray-500 line-through">
                    KSh{" "}
                    {room?.original_price ? Number(room.original_price).toLocaleString() : "0"}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {Math.round((1 - room.price / room.original_price) * 100)}%
                    OFF
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">per night</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-cyan-600" />
                      Check-in
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={handleCheckInChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    {checkInError && (
                      <p className="text-red-500 text-sm mt-1">
                        {checkInError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2 text-cyan-600" />
                      Check-out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={handleCheckOutChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    {checkOutError && (
                      <p className="text-red-500 text-sm mt-1">
                        {checkOutError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Guests */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-cyan-600" />
                      Adults
                    </label>
                    <input
                      type="number"
                      min="1"
                      max={room.occupants}
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-cyan-600" />
                      Children
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <User className="w-4 h-4 mr-2 text-cyan-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-cyan-600" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-cyan-600" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                    {phoneError && (
                      <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-600" />
                      Country
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Special Request & Notes */}
                <div className="mt-6">
                  <label className="text-sm font-medium mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-cyan-600" />
                    Special Requests
                  </label>
                  <textarea
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />

                  <label className="text-sm font-medium mb-2 flex items-center mt-4">
                    <MessageSquare className="w-4 h-4 mr-2 text-cyan-600" />
                    Additional Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Payment Options */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-cyan-600" />
                    Payment Method
                  </h3>

                  <div className="space-y-4">
                    {/* Payment Method Selection */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("mpesa")}
                        className={`p-4 border-2 rounded-lg text-center transition-colors cursor-pointer ${
                          paymentMethod === "mpesa"
                            ? "border-cyan-500 bg-cyan-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="w-8 h-8 mx-auto mb-2 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          M
                        </div>
                        <span className="font-medium">M-Pesa</span>
                        <p className="text-xs text-gray-600 mt-1">Pay Now</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("arrival")}
                        className={`p-4 border-2 rounded-lg text-center transition-colors cursor-pointer ${
                          paymentMethod === "arrival"
                            ? "border-cyan-500 bg-cyan-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <MapPin className="w-8 h-8 mx-auto mb-2 text-cyan-600" />
                        <span className="font-medium">Pay on Arrival</span>
                        <p className="text-xs text-gray-600 mt-1">
                          Pay at Hotel
                        </p>
                      </button>
                    </div>

                    {/* M-Pesa Instructions */}
                    {paymentMethod === "mpesa" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">
                          M-Pesa Payment Instructions
                        </h4>
                        <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
                          <li>Go to M-Pesa on your phone</li>
                          <li>Select Lipa Na M-Pesa</li>
                          <li>Select Pay Bill</li>
                          <li>Enter Business Number: 123456</li>
                          <li>Enter Account Number: {"Your phone"}</li>
                          <li>Enter Amount: KSh {totalPrice || room.price}</li>
                          <li>Enter your M-Pesa PIN</li>
                          <li>Press OK to complete payment</li>
                        </ol>
                        <div className="mt-3 p-3 bg-white rounded border">
                          <div className="text-sm font-semibold text-green-800">
                            Payment Details:
                          </div>
                          <div className="text-sm text-green-700 mt-1">
                            Business No:{" "}
                            <span className="font-mono">123456</span>
                          </div>
                          <div className="text-sm text-green-700">
                            Account No:{" "}
                            <span className="font-mono">
                              {phone || "Your Phone"}
                            </span>
                          </div>
                          <div className="text-sm text-green-700">
                            Amount:{" "}
                            <span className="font-mono">
                              KSh {totalPrice || room.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Pay on Arrival Instructions */}
                    {paymentMethod === "arrival" && (
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <h4 className="font-semibold text-amber-800 mb-2">
                          Pay on Arrival
                        </h4>
                        <ul className="text-sm text-amber-700 space-y-2">
                          <li className="flex items-start">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                            Pay when you check in at the hotel reception
                          </li>
                          <li className="flex items-start">
                            <CreditCard className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                            We accept cash, credit cards, and M-Pesa at
                            reception
                          </li>
                          <li className="flex items-start">
                            <Lock className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                            Your room will be held for 2 hours after check-in
                            time
                          </li>
                        </ul>
                        <div className="mt-3 p-3 bg-white rounded border">
                          <div className="text-sm font-semibold text-amber-800">
                            Reservation will be held until:
                          </div>
                          <div className="text-sm text-amber-700 mt-1">
                            {checkIn
                              ? `2 hours after ${new Date(
                                  checkIn,
                                ).toLocaleDateString()} check-in time`
                              : "Your selected check-in date"}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Total Price */}
                {totalNights > 0 && (
                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-semibold text-cyan-800">
                          KSh {totalPrice}
                        </p>
                        <p className="text-sm text-cyan-600">
                          {totalNights} night{totalNights > 1 ? "s" : ""} × KSh{" "}
                          {room.price}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Notice */}
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Lock className="w-4 h-4 mr-2" />
                  Your information is secure and encrypted
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 mt-4 cursor-pointer
                    ${
                      !isFormValid || isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-cyan-600 hover:bg-cyan-700 text-white"
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </span>
                  ) : paymentMethod === "mpesa" ? (
                    "Pay with M-Pesa"
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
