import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHospital
} from "react-icons/fa";
import MapSection from "./MapSection";

const whatsappNumber = "918392957807";

const defaultFormData = {
  name: "",
  email: "",
  phone: "8392957807",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = encodeURIComponent(
      `Hello Coaching Team,\n\n` +
        `Full Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "8392957807"}\n` +
        `Message: ${formData.message}\n`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing quality education and expert guidance to help students build strong foundations, achieve academic excellence, and confidently prepare for a brighter future.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">

            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
              <FaHospital className="text-blue-600" />
            Dream High Coaching Zone®
            </h2>

            {/* Address */}
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  2A-65/20 LIG, Avas Vikas - 1 Colony, Near Indian Gas Agency, D.M Road, Bulandshahr, Uttar Pradesh -203001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>

                <a
                  href="tel:+98392957807"
                  className="block text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  +91 8392957807
                </a>

                <a
                  href="tel:+915732458616"
                  className="block text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  +91 5732458616
                </a>
              </div>

            </div>

            {/* Email */}
            <div className="flex gap-4">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">dreamhighcoachingzone@gmail.com</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex gap-4">
              <FaClock className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                
                <p className="text-gray-600">10:00 AM - 5:00 PM </p>
                <p className="text-gray-600">Monday to Saturday </p>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Send Us a Message
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Google Map */}
        <MapSection />
      </div>
    </section>
  );
}

export default Contact;
