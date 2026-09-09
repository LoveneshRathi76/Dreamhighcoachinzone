import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import achieversVideo1 from "../assets/video/coaching 1.mp4";
import achieversVideo2 from "../assets/video/coaching 2.mp4";
import achieversVideo3 from "../assets/video/coaching 3.mp4";
import achieversVideo4 from "../assets/video/coaching 4.mp4";
import achieversImage from "../assets/Aboutimage/contact2.webp";
import achieverImage1 from "../assets/video/9.webp";
import achieverImage2 from "../assets/video/9 (2).webp";
import achieverImage3 from "../assets/video/5.webp";
import achieverImage4 from "../assets/video/11.webp";
import achieverImage5 from "../assets/video/10.webp";
import achieverImage6 from "../assets/video/10 (2).webp";


const achieversVideos = [
  achieversVideo1,
  achieversVideo2,
  achieversVideo3,
  achieversVideo4,
];

const achieversImages = [
  achieversImage,
  achieverImage1,
  achieverImage2,
  achieverImage3,
  achieverImage4,
  achieverImage5,
  achieverImage6,
];

function Doctors() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-linear-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-blue-600">
            Our Achievers
          </h1>
          <p className="text-gray-600 mt-3">
            Celebrating the hard work and success of our students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {achieversVideos.map((video, index) => (
            <div
              key={video}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <video
                controls
                preload="metadata"
                className="block aspect-4/3 w-full bg-gray-100 object-contain"
                src={video}
              >
                Your browser does not support the video tag.
              </video>
              <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold text-[#1D7A74]">
                  Achievers Video {index + 1}
                </h2>
                <p className="text-gray-600 mt-2">
                  Dream High Coaching Zone student highlights.
                </p>
              </div>
            </div>
          ))}

          {achieversImages.map((image, index) => (
            <div
              key={image}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <img
                loading="lazy"
                src={image}
                alt={`Dream High Coaching Zone achiever ${index + 1}`}
                className="block aspect-4/3 w-full bg-gray-100 object-contain"
              />
              <div className="flex-1 p-6">
                <h2 className="text-2xl font-bold text-[#1D7A74]">Achievers Gallery</h2>
                <p className="text-gray-600 mt-2">Our students&apos; academic achievements and proud moments.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
