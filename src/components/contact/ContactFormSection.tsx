"use client";

import React, { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.agreed) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section py-24 sm:py-32 bg-white">
      <div className="container max-w-[1000px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-[540px] mx-auto">
          <h2 className="text-[#3E3226] mb-4">
            Contact <em className="wood-700-text font-cardo italic">form</em>
          </h2>
          <p className="large-paragraph text-[#7A6F64] leading-relaxed">
            Fill out the form below and let us help you plan your perfect getaway.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#FAF7F2] border border-[#E5DCCE] p-10 text-center">
            <h3 className="font-cardo text-2xl text-[#3E3226] mb-2">Thank you!</h3>
            <p className="font-urbanist text-[#8C7355] text-base">
              Your submission has been received! Our reservations team will reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Rakesh Shah"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 01234 56789"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-2">
                  Subject*
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-5 py-3.5 bg-white border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
                >
                  <option value="">Select one...</option>
                  <option value="Booking Enquiry">Booking Enquiry</option>
                  <option value="Room Availability">Room Availability</option>
                  <option value="Event & Celebration Booking">Event & Celebration Booking</option>
                  <option value="Dining Reservation">Dining Reservation</option>
                  <option value="Spa & Wellness Appointment">Spa & Wellness Appointment</option>
                  <option value="Corporate Partnership">Corporate Partnership</option>
                  <option value="Media & Collaboration">Media & Collaboration</option>
                  <option value="Feedback or Complaint">Feedback or Complaint</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#3E3226] mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-3.5 bg-white border border-[#E5DCCE] text-sm text-[#3E3226] focus:outline-none focus:border-[#8C7355] transition-colors"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="w-4 h-4 accent-[#8C7355] cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs sm:text-sm font-urbanist text-[#7A6F64] cursor-pointer select-none"
              >
                I agree with the <span className="text-[#3E3226] font-semibold underline">Terms & Conditions</span>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="webflow-button">
                <div className="btn-text-wrapper">
                  <span className="btn-text btn-text-1">Submit Message</span>
                  <span className="btn-text btn-text-2">Submit Message</span>
                </div>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
