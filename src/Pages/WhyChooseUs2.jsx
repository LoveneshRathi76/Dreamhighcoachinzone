import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import doctor1 from "../assets/hispitalimage/image3.jpeg";
import emergency from "../assets/hispitalimage/img1.jpeg";
import technology from "../assets/hispitalimage/image2.jpeg";
import care from "../assets/hispitalimage/image4.jpeg";
import affordable from "../assets/hispitalimage/image5.jpeg";

const WhyChooseUs2 = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    {
      title: "Special Focus & Guidance ",
      desc: "Special Focus on Below-Average Students and Personalized Guidance We provide extra attention and dedicated support to help every student improve and achieve their academic goals.",
      img: doctor1,
    },
    {
      title: "100% Result-Oriented Preparation",
      desc: "100% Result in Board Examinations Focused and systematic preparation for Class 10th and 12th Board Examinations.",
      img: emergency,
    },
    {
      title: "Regular Practice Sessions & Assignments",
      desc: "Regular tests, practice sessions, worksheets, and assignments to strengthen students’ understanding and performance.",
      img: technology,
    },
    {
      title: "Free Notes & Study Material",
      desc: "Well-structured notes, important study material, and assignments provided to support effective learning.",
      img: care,
    },
    {
      title: "Regular Parent-Teacher Meetings",
      desc: "Regular interaction between parents, teachers, and students to monitor progress and ensure better coordination for the student’s overall development.",
      img: affordable,
    },
  
    
  ];

  return (
    <section className="w-full py-16 bg-[#0F2A44]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            data-aos="fade-up"
          >
            Why Choose Our Dream High Coaching Zone® 
          </h2>
          <p
            className="text-gray-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Providing quality education and expert guidance to help students build strong foundations, achieve academic excellence, and confidently prepare for a brighter future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <img
              loading="lazy"
                src={card.img}
                alt={card.title}
                className="block w-full h-auto"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs2;
