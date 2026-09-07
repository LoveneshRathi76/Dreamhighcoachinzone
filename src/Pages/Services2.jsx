import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "📚",
    title: "Academics",
    desc: "Classes VI to XII | CBSE & UP Board We provide comprehensive academic coaching for students from Class 6th to Class 12th for both CBSE and UP Board. Strong conceptual learning. Subject-wise academic support" 
  },
  {
    icon: "🎯",
    title: "COMPETITIVE EXAMS",
    desc: "Foundation Preparation for Young Achievers . We prepare students for competitive school-level examinations and foundation programs, including: Navodaya विद्यालय (NVS). Kendriya Vidyalaya Sangathan (KVS).Sainik School Entrance Preparation"
  },
  {
    icon: "🧑‍🏫👧",
    title: "COUNSELING SESSIONS",
    desc: "Personalized Academic Guidance . We provide counseling and guidance sessions for students who need additional support in their studies or academic development. Identification of weak subjects . Academic performance guidance"
  },
  {
    icon: "🚪",
    title: "ENTRANCE EXAMS",
    desc: "Preparing Students for New Opportunities. We provide preparation and guidance for various school entrance examinations at both state and national levels.KVS Entrance Preparation. NVS Entrance Preparation. Sainik School Entrance Preparation"
  },
  {
    icon: "📝",
    title: "TEACHING EXAMS",
    desc: "Empowering Future Educators. We provide specialized preparation for teaching eligibility and recruitment examinations after graduation. Examinations Covered: CTET UPTET Bihar TET Rajasthan TET Mathematics English Other relevant subjects as per examination requirements"
  }
  ,
  {
    icon: "👨‍👩‍👧‍👦",
    title: "PARENT–TEACHER MEETINGS",
    desc: "Together for Every Student’s Success. We conduct regular Parent–Teacher Meetings (PTMs) to ensure effective communication and coordination between parents and teachers.Regular discussion of student progress.Identification of academic strengths and weaknesses"
  },
];


const Services2 = () => {

  // 🔥 AOS Init
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3">
           “More Than Coaching - A Complete Pathway to Success.”
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-right"   // 👈 mobile me left → right
              className="bg-white p-8 rounded-xl shadow-md 
                         hover:shadow-xl hover:-translate-y-2 
                         transition-all duration-300"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services2;
