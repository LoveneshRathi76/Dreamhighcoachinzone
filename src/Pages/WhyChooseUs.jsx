import React from "react";

// yahan apni images laga dena

import doctorImg from "../assets/slideimg/slide3.JPG";
import labImg from "../assets/slideimg/slide1.jpeg";
import emergencyImg from "../assets/Aboutimage/image3.jpeg";
import affordableImg from "../assets/slideimg/slide4.jpeg";

const features = [
 
  {
    icon: "👨‍🏫",
    title: "Expert Teachers, Better Learning",
    desc: "Learn from highly qualified and experienced teachers dedicated to helping students achieve academic excellence and build a successful future.",
    image: doctorImg,
  },
  {
    icon: "🎓",
    title: "Quality Education",
    desc: "Comprehensive study material, clear concepts, and effective teaching methods designed for better academic performance.",
    image: labImg,
  },
  {
    icon: "🤝",
    title: "Personalized Guidance",
    desc: "Individual attention and regular feedback help every student identify weaknesses and improve their performance..",
    image: emergencyImg,
  },
  {
    icon: "🏆",
    title: "Proven Results",
    desc: "Regular tests, performance analysis, and expert guidance help students stay prepared and achieve their academic goals.",
    image: affordableImg,
  }

  
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F4FAF9] py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Why Choose Our Hospital
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Dream High Coaching Zone is a dedicated educational institute committed to providing quality education, academic excellence, and comprehensive guidance to students. The institute was established on 15th October 2023 under the visionary guidance and leadership of Mr. Manish Palawat.

With a student-centred approach, Dream High Coaching Zone focuses not only on academic performance but also on developing confidence, discipline, problem-solving abilities, and a strong foundation for a successful future.

Under the guidance of Mr. Manish Palawat, who possesses more than seven years of experience in academics, competitive examination preparation, and student counselling, the institute strives to understand the individual needs of every child. His experience and dedication have helped students receive proper academic direction, career guidance, and motivation to achieve their goals..
          </p>
        </div>

        {/* Alternate Sections */}
        {features.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center
            ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* IMAGE */}
            <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="rounded-3xl shadow-2xl w-full h-auto object-contain lg:h-[420px] lg:object-cover"
              />
            </div>

            {/* TEXT */}
            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-3xl font-bold text-[#0F2A44]">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                {item.desc}
              </p>

              {/* small trust card */}
              <div className="mt-8 bg-white rounded-xl shadow-md p-5 w-fit">
                <p className="text-[#1D7A74] font-semibold">
                  ✔ Trusted by Hundreds of Students
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
