import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, MessageCircle, User, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    purpose: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hotel contact information
  const contactInfo = {
    address: {
      street: "Upper Hill Road",
      city: "Nairobi",
      country: "Kenya",
      fullAddress: "Hotelia Hotel, Kenya"
    },
    phone: {
      main: "+254 00 000 0000",
      reservations: "+254 00 000 0000",
      emergency: "+254 000 000 000"
    },
    email: {
      general: "info@hotelia.com",
      reservations: "reservations@hotelia.com",
      support: "support@hotelia.com"
    },
    hours: {
      reception: "24/7",
      restaurant: "6:30 AM - 11:00 PM",
      spa: "8:00 AM - 9:00 PM",
      businessCenter: "7:00 AM - 10:00 PM"
    }
  };

  // Departments for contact form
  const contactPurposes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'reservation', label: 'Room Reservation' },
    { value: 'event', label: 'Event & Conference' },
    { value: 'restaurant', label: 'Restaurant Booking' },
    { value: 'spa', label: 'Spa & Wellness' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'partnership', label: 'Business Partnership' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        purpose: 'general'
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-cyan-600 to-blue-600 text-white py-20 mt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to help. Get in touch with our team for any inquiries or assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                {/* Address */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">{contactInfo.address.fullAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Phone Numbers</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-gray-600 font-medium">Main Desk</p>
                          <p className="text-cyan-600">{contactInfo.phone.main}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Reservations</p>
                          <p className="text-cyan-600">{contactInfo.phone.reservations}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Emergency</p>
                          <p className="text-red-600">{contactInfo.phone.emergency}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Email Addresses</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-gray-600 font-medium">General Inquiries</p>
                          <p className="text-cyan-600">{contactInfo.email.general}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Reservations</p>
                          <p className="text-cyan-600">{contactInfo.email.reservations}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 font-medium">Support</p>
                          <p className="text-cyan-600">{contactInfo.email.support}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Operating Hours</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Front Desk</span>
                          <span className="font-medium text-gray-900">{contactInfo.hours.reception}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Restaurant</span>
                          <span className="font-medium text-gray-900">{contactInfo.hours.restaurant}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Spa & Wellness</span>
                          <span className="font-medium text-gray-900">{contactInfo.hours.spa}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Business Center</span>
                          <span className="font-medium text-gray-900">{contactInfo.hours.businessCenter}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We have received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose of Contact *
                      </label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      >
                        {contactPurposes.map((purpose) => (
                          <option key={purpose.value} value={purpose.value}>
                            {purpose.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                        placeholder="Enter the subject of your message"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Emergency Contact Card */}
              <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Contact</h3>
                    <p className="text-red-700 mb-3">
                      For urgent matters requiring immediate assistance, please call our 24/7 emergency line.
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-600" />
                      <span className="text-red-900 font-bold text-lg">{contactInfo.phone.emergency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">{contactInfo.address.fullAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Reception Hours</p>
                      <p className="text-gray-600">24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-cyan-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Parking</p>
                      <p className="text-gray-600">Complimentary valet parking available</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 lg:h-auto">
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-cyan-100 to-blue-100">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Google Maps integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Car icon component
const Car = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default ContactUs;