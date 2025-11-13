import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('hotel');
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  // Refs for each section
  const hotelRef = useRef(null);
  const paymentRef = useRef(null);
  const servicesRef = useRef(null);
  const termsRef = useRef(null);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const categories = [
    { id: 'hotel', label: 'Hotel & Accommodation', ref: hotelRef },
    { id: 'payment', label: 'Payment & Booking', ref: paymentRef },
    { id: 'services', label: 'Services & Amenities', ref: servicesRef },
    { id: 'terms', label: 'Terms & Conditions', ref: termsRef }
  ];

  // FAQ data
  const faqData = {
    hotel: [
      {
        id: 'hotel-1',
        question: 'What are your check-in and check-out times?',
        answer: 'Check-in time is from 3:00 PM, and check-out time is until 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability.'
      },
      {
        id: 'hotel-2',
        question: 'Do you offer room service?',
        answer: 'Yes, we offer 24-hour room service. Our menu includes a variety of international and local cuisine, available from 6:00 AM to 11:00 PM daily.'
      },
      {
        id: 'hotel-3',
        question: 'Are pets allowed in the hotel?',
        answer: 'We are a pet-friendly hotel! Pets up to 25 lbs are allowed with a non-refundable cleaning fee of $75 per stay. Please inform us in advance if you plan to bring a pet.'
      },
      {
        id: 'hotel-4',
        question: 'Is there parking available?',
        answer: 'Yes, we offer both valet parking ($45 per night) and self-parking ($35 per night). Electric vehicle charging stations are also available.'
      },
      {
        id: 'hotel-5',
        question: 'What is your cancellation policy?',
        answer: 'Cancellations made 48 hours or more before check-in are free. Cancellations within 48 hours will incur a one-night room charge plus tax.'
      }
    ],
    payment: [
      {
        id: 'payment-1',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and mobile payments like Apple Pay and Google Pay. We also accept cash for in-person payments.'
      },
      {
        id: 'payment-2',
        question: 'Do you require a security deposit?',
        answer: 'Yes, we require a security deposit of $100 per night upon check-in. This deposit will be refunded within 3-5 business days after check-out, provided there are no damages or incidental charges.'
      },
      {
        id: 'payment-3',
        question: 'Can I pay with multiple payment methods?',
        answer: 'Absolutely! You can split your payment between multiple credit cards or combine card and cash payments. Please inform our front desk staff at check-in.'
      },
      {
        id: 'payment-4',
        question: 'Do you offer payment plans for extended stays?',
        answer: 'For stays longer than 7 nights, we offer flexible payment plans. Please contact our reservations team to discuss available options.'
      },
      {
        id: 'payment-5',
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard SSL encryption to protect all payment transactions. Your financial information is never stored on our servers.'
      }
    ],
    services: [
      {
        id: 'services-1',
        question: 'What amenities are included in my stay?',
        answer: 'All stays include complimentary Wi-Fi, access to our fitness center and pool, daily housekeeping, and access to our business center. Premium amenities like spa access and premium Wi-Fi may require additional fees.'
      },
      {
        id: 'services-2',
        question: 'Do you have a swimming pool?',
        answer: 'Yes, we have both an indoor heated pool and an outdoor infinity pool. The pools are open from 6:00 AM to 10:00 PM daily. Pool towels are provided complimentary.'
      },
      {
        id: 'services-3',
        question: 'Is breakfast included?',
        answer: 'We offer complimentary continental breakfast for all guests from 6:30 AM to 10:30 AM. For extended breakfast options, our restaurant serves a full breakfast menu until 11:30 AM.'
      },
      {
        id: 'services-4',
        question: 'Do you have meeting facilities?',
        answer: 'Yes, we have 5 meeting rooms accommodating from 10 to 200 people, all equipped with state-of-the-art audiovisual equipment. Our events team can assist with planning and catering.'
      },
      {
        id: 'services-5',
        question: 'What business services are available?',
        answer: 'Our business center offers printing, scanning, copying services, and private workstations. We also provide video conferencing facilities and high-speed internet access.'
      }
    ],
    terms: [
      {
        id: 'terms-1',
        question: 'What is your smoking policy?',
        answer: 'We are a 100% non-smoking hotel. Smoking in rooms or public areas will result in a $250 cleaning fee. Designated smoking areas are available outside the building.'
      },
      {
        id: 'terms-2',
        question: 'What is the minimum age for check-in?',
        answer: 'The minimum age to check-in is 18 years. Guests under 18 must be accompanied by a parent or legal guardian.'
      },
      {
        id: 'terms-3',
        question: 'Are visitors allowed in guest rooms?',
        answer: 'Registered guests may have visitors until 10:00 PM. All visitors must present valid ID at the front desk and will be given a visitor pass. Overnight visitors must be registered and may incur additional charges.'
      },
      {
        id: 'terms-4',
        question: 'What is your lost and found policy?',
        answer: 'Items found in guest rooms or public areas are kept in our lost and found for 90 days. Please contact our front desk with a detailed description of the lost item. Shipping costs for returning items will be charged to the guest.'
      },
      {
        id: 'terms-5',
        question: 'Are there any restrictions on photography?',
        answer: 'Personal photography is permitted in public areas. Commercial photography and videography require prior management approval. Photography is not permitted in spa areas, fitness center, or other sensitive locations.'
      }
    ]
  };

  // Filter FAQs based on search term
  const filteredFAQs = Object.keys(faqData).reduce((acc, category) => {
    const filteredItems = faqData[category].filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = filteredItems;
    }
    return acc;
  }, {});

  const displayFAQs = searchTerm ? filteredFAQs : faqData;

  return (
    <div className="min-h-screen bg-cyan-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about your stay, services, and policies
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      scrollToSection(category.ref);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                      activeCategory === category.id
                        ? 'bg-cyan-100 text-cyan-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ))}
              </nav>

              {/* Contact CTA */}
              <div className="mt-8 p-4 bg-cyan-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our team is here to help you 24/7
                </p>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            {/* Hotel & Accommodation Section */}
            <section ref={hotelRef} className="mb-12 scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-cyan-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Hotel & Accommodation</h2>
                </div>
                <div className="p-6">
                  {displayFAQs.hotel ? (
                    displayFAQs.hotel.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItems[faq.id]}
                        onToggle={() => toggleItem(faq.id)}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 text-center py-4">
                      No questions found matching your search in this category.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Payment & Booking Section */}
            <section ref={paymentRef} className="mb-12 scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-cyan-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Payment & Booking</h2>
                </div>
                <div className="p-6">
                  {displayFAQs.payment ? (
                    displayFAQs.payment.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItems[faq.id]}
                        onToggle={() => toggleItem(faq.id)}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 text-center py-4">
                      No questions found matching your search in this category.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Services & Amenities Section */}
            <section ref={servicesRef} className="mb-12 scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-cyan-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Services & Amenities</h2>
                </div>
                <div className="p-6">
                  {displayFAQs.services ? (
                    displayFAQs.services.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItems[faq.id]}
                        onToggle={() => toggleItem(faq.id)}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 text-center py-4">
                      No questions found matching your search in this category.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Terms & Conditions Section */}
            <section ref={termsRef} className="mb-12 scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-cyan-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">Terms & Conditions</h2>
                </div>
                <div className="p-6">
                  {displayFAQs.terms ? (
                    displayFAQs.terms.map((faq) => (
                      <FAQItem
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openItems[faq.id]}
                        onToggle={() => toggleItem(faq.id)}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 text-center py-4">
                      No questions found matching your search in this category.
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* No Results Message */}
            {searchTerm && Object.keys(filteredFAQs).length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600">
                  No FAQs match your search for "{searchTerm}". Try different keywords or contact our support team.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 px-2 rounded-lg transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-cyan-600 shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 px-2">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQs;