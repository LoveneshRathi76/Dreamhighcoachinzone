import React from "react";
import aboutImg from "../assets/Aboutimage/about.jpeg"; // apni image yaha rakho
import WhyChooseUs from "../Pages/WhyChooseUs";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2">
            <img
            loading="lazy"
              src={aboutImg}
              alt="About Hospital"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              ABOUT DREAM HIGH COACHING ZONE® 
            </h2>

            <p className="text-gray-600 text-lg mb-4">
             Dream High Coaching Zone®  is a dedicated educational institute committed to providing quality education, academic excellence, and comprehensive guidance to students. <b>The institute was established on 15th October 2023 under the visionary guidance and leadership of Mr. Manish Plawat.</b> 
            </p>

            <p className="text-gray-600 mb-4">
              With a student-centred approach, Dream High Coaching Zone®  focuses not only on academic performance but also on developing confidence, discipline, problem-solving abilities, and a strong foundation for a successful future.
            </p>

            <div className="mb-4">
             
              <p className="text-gray-600">
                Under the guidance of Mr. Manish Plawat, who possesses more than seven years of experience in academics, competitive examination preparation, and student counselling, the institute strives to understand the individual needs of every child. His experience and dedication have helped students receive proper academic direction, career guidance, and motivation to achieve their goals.
              </p>
            </div>

            <div>
             
              <p className="text-gray-600">
               At Dream High Coaching Zone, we believe that every student has unique potential. Our responsibility is to identify that potential, nurture it with the right guidance, and help every child transform their dreams into achievements.<br></br>
              </p>
            </div>
             <div>
             
              <p className="text-gray-600">
               <br />
 <b>FROM THE CHAIRMAN’S DESK

“Failure is not the end; it is a new beginning in life. It gives you the opportunity to start again with renewed spirit and confidence by learning from the mistakes that led to failure.”
<br />
— Mr. Manish Plawat,<br /> (Founder and Chairman) <br />
 Dream High Coaching Zone®  </b>
              </p>
            </div>

          </div>
        </div>

      </div>
      <WhyChooseUs/>
    </section>
    
  );
};

export default About;
