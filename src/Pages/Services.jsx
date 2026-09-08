import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ccu from "../assets/Services/image2.jpeg";
import icu from "../assets/Services/image1.jpeg";
import HDU from "../assets/Services/image3.jpeg";
import NICU from "../assets/Services/image4.jpeg";
import  Ventilator from "../assets/Services/image5.jpeg";
import  BiPAP from "../assets/Services/image6.jpeg";
import  ECG from "../assets/Services/image7.jpeg";
import  ABG from "../assets/Services/image8.jpeg";
import  PFT from "../assets/slideimg/slide1.jpeg";

import {
  FaChalkboardTeacher,
  FaLaptop,
  FaBookOpen,
  FaClipboardCheck,
  FaQuestionCircle,
  FaUserFriends,
  FaBullseye,
  FaCompass,
  FaTrophy,
  FaTimes
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Expert Faculty",
    icon: <FaChalkboardTeacher />,
    shortDesc: "Learn from the best, become your best.",
    image: icu,
    fullDesc:
      "Learn from experienced and qualified teachers who make every concept simple and easy to understand."
  },
  {
    id: 2,
    name: "Smart Classes",
    icon: <FaLaptop />,
    shortDesc: "Learn smarter, achieve faster.",
    image: ccu,
    fullDesc:
      "Interactive and technology-enabled classes designed to make learning engaging, practical, and effective."
  },
  {
    id: 3,
    name: "Study Material",
    icon: <FaBookOpen />,
    shortDesc: "Prepare better, perform better.",
    image: HDU,
    fullDesc:
      "Well-structured notes, practice sheets, and quality resources for complete and effective preparation."
  },
  {
    id: 4,
    name: "Regular Test Series",
    icon: <FaClipboardCheck />,
    shortDesc: "Practice today, succeed tomorrow.",
    image: NICU,
    fullDesc:
      "Regular tests help you measure your preparation, improve accuracy, and build exam confidence."
  },
  {
    id: 5,
    name: "Doubt Solving",
    icon: <FaQuestionCircle />,
    shortDesc: "Clear your doubts, strengthen your concepts.",
    image: Ventilator,
    fullDesc:
      "Get clear and quick solutions to your doubts with dedicated support from experienced faculty."
  },
  {
    id: 6,
    name: "Personalized Guidance",
    icon: <FaUserFriends />,
    shortDesc: "Your goal, our guidance, your success.",
    image: BiPAP,
    fullDesc:
      "Individual attention and performance-based guidance help every student improve and achieve their goals.."
  },
  {
    id: 7,
    name: "Competitive Exam Preparation",
    icon: <FaBullseye />,
    shortDesc: "Dream big, prepare with purpose.",
    image: ECG,
    fullDesc:
      "Exam-oriented classes, practice questions, and smart strategies designed to help students perform their best."
  },
  {
    id: 8,
    name: "Career Guidance",
    icon: <FaCompass />,
    shortDesc: "Choose the right path for a brighter future.",
    image: ABG,
    fullDesc:
      "Expert guidance to help students understand their options and choose the right path for their future."
  },
  {
    id: 9,
    name: "Proven Results",
    icon: <FaTrophy />,
    shortDesc: "Hard work today creates success tomorrow.",
    image: PFT,
    fullDesc:
      "Consistent guidance, focused preparation, and effective learning strategies help students achieve their academic goals."
  }
  
];



function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-600 mb-3">
           Our Coaching Services
          </h1>
          <p className="text-gray-600">
          “We provide the right guidance, quality education, and personalized support to help every student succeed.”
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedService(service)}
              className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-600 text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {service.name}
              </h3>

              <p className="text-gray-600 text-sm">
                {service.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div
            data-aos="zoom-in"
            className="bg-white max-w-lg w-full mx-4 rounded-2xl overflow-hidden relative"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 text-black text-xl hover:text-red-500"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <img
            loading="lazy"
              src={selectedService.image}
              alt={selectedService.name}
              className="block w-full h-auto max-h-[70vh] object-contain bg-gray-100"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                {selectedService.name}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
