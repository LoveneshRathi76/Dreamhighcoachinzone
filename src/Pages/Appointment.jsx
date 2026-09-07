import { useState } from "react";
import appointmentImg from "../assets/slideimg/slide1.jpeg";

function Appointment() {
  const [form, setForm] = useState({
    studentName: "",
    fatherName: "",
    className: "",
    phone: "",
    alternatePhone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "9536216777";

    const whatsappMessage = `
  📋 *New Admission Enquiry*

  👨‍🎓 Student Name: ${form.studentName}
  👨‍👧 Father Name: ${form.fatherName}
  🏫 Class: ${form.className}
📞 Phone: ${form.phone}
  📱 Alternate Phone: ${form.alternatePhone || "Not provided"}
  📧 Email: ${form.email || "Not provided"}
  🏠 Address: ${form.address}

  📝 Additional Details:
${form.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    // reset form
    setForm({
      studentName: "",
      fatherName: "",
      className: "",
      phone: "",
      alternatePhone: "",
      email: "",
      address: "",
      message: "",
    });
  };

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Contact us for admission
          </h1>
           <p className="text-gray-600 text-lg">
           <b>Take the First Step Towards Success.... </b> 
          </p>
          <p className="text-gray-600 text-lg">
            Book your seat easily via WhatsApp
          </p>
          
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Image */}
          <div className="md:w-1/2">
            <img
              loading="lazy"
              src={appointmentImg}
              alt="Dream High Coaching Zone admission"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                value={form.studentName}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={form.fatherName}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <select
                name="className"
                value={form.className}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              >
                <option value="">Select Class</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              />

              <input
                type="tel"
                name="alternatePhone"
                placeholder="Alternate Phone Number"
                value={form.alternatePhone}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg md:col-span-2"
              />

              <textarea
                name="message"
                placeholder="Additional Details (Optional)"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="border p-3 rounded-lg md:col-span-2"
              />

              <button
                type="submit"
                className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition"
              >
                📲 Book via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
