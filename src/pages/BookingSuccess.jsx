import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle,
  Home,
  Calendar,
  Users,
  CreditCard,
  MapPin,
  Star,
  ChevronRight,
  Download,
  Mail,
  Phone,
} from "lucide-react";

const BookingSuccess = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Booking Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't find your booking information.
          </p>
          <Link
            to="/"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-cyan-50 py-8">
      <div className="max-w-4xl mx-auto px-4 mt-20">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center h-[60vh] mb-8">
          <div className="bg-cyan-500 px-2 sm:px-6 py-4 sm:py-2 rounded-full inline-flex items-center space-x-2 text-white font-semibold text-md sm:text-lg">
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
            <span className="text-gray-800">Reservation Received</span>
          </div>
        </div>

        {/* Success Card */}
        <div id="printArea" className="bg-white rounded-xl shadow-sm p-8 mb-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Reservation Received!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your booking. Your reservation has been successfully
              processed.
            </p>
          </div>

          {/* Booking Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Booking Summary */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
                Booking Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Room Type:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {bookingData.room.type}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Booking Reference:</span>
                  <span className="font-mono text-cyan-600 font-semibold">
                    #{bookingData.id}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Nights:</span>
                  <span className="font-semibold text-gray-900">
                    {bookingData.nights} night
                    {bookingData.nights > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-xl font-bold text-cyan-600">
                    KSh {bookingData.total}
                  </span>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">
                Guest Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {bookingData.customer.name}
                    </p>
                    <p className="text-sm text-gray-600">Primary Guest</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {bookingData.customer.email}
                    </p>
                    <p className="text-sm text-gray-600">Email</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {bookingData.customer.phone}
                    </p>
                    <p className="text-sm text-gray-600">Phone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stay Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-cyan-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Check-in
                </h3>
              </div>
              <p className="text-2xl font-bold text-cyan-700">
                {new Date(bookingData.checkIn).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-600 mt-1">From 2:00 PM</p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-amber-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Check-out
                </h3>
              </div>
              <p className="text-2xl font-bold text-amber-700">
                {new Date(bookingData.checkOut).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-600 mt-1">Before 11:00 AM</p>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <CreditCard className="w-6 h-6 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Payment Information
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-semibold text-gray-900 capitalize">
                  {bookingData.paymentMethod === "M-Pesa"
                    ? "M-Pesa"
                    : "Pay on Arrival"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Payment Status:</span>
                <span
                  className={`font-semibold ${
                    bookingData.paymentMethod === "mpesa"
                      ? "text-green-600"
                      : "text-amber-600"
                  }`}
                >
                  {bookingData.paymentMethod === "mpesa" ? "Paid" : "Pending"}
                </span>
              </div>

              {bookingData.paymentMethod === "arrival" && (
                <div className="mt-4 p-4 bg-amber-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span className="font-semibold text-amber-800">
                      Payment Due on Arrival
                    </span>
                  </div>
                  <p className="text-sm text-amber-700">
                    Please bring your booking confirmation and payment method to
                    the reception.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              What's Next?
            </h3>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  Booking confirmation email sent to{" "}
                  <span className="text-sm sm:text-lg font-semibold sm:font-bold">
                    {bookingData.customer.email}
                  </span>
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>
                  Present this confirmation at reception during check-in
                </span>
              </li>
              {bookingData.paymentMethod === "arrival" && (
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span>Payment will be collected upon arrival</span>
                </li>
              )}
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>Contact us if you need to modify your booking</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handlePrint}
            className="flex items-center justify-center space-x-2 bg-white border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            <span>Print Confirmation</span>
          </button>

          <Link
            to="/"
            className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/accommodation"
            className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
          >
            <Star className="w-5 h-5" />
            <span>Book Another Room</span>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Our customer service team is here to assist you
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-600" />
              <span className="text-gray-700">+254 000 000 000</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-600" />
              <span className="text-gray-700">support@hotelia.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;