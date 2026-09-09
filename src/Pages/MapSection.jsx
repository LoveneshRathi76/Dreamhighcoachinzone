import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function MapSection() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT : MAP */}
          <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Sanskar Multispeciality Hospital location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.949670507849!2d77.84444017553486!3d28.420775475781056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca17fd24a968d%3A0xd83096a17f7142c4!2sDream%20High%20Coaching%20Zone!5e0!3m2!1sen!2sin!4v1788705978460!5m2!1sen!2sin"
              className="h-full w-full border-0 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

          {/* RIGHT : ADDRESS */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
             Dream High Coaching Zone®
            </h2>

            <p className="text-gray-600 mb-6">
              Providing quality education and expert guidance to help students build strong foundations, achieve academic excellence, and confidently prepare for a brighter future.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                <p>
                 2A-65/20 LIG, Avas Vikas - 1 Colony, Near Indian Gas Agency, D.M Road, Bulandshahr, Uttar Pradesh -203001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <p>+91 8392957807</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <p>dreamhighcoachingzone@gmail.com</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/bjHywH2Xbg57WmVAA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#1D7A74] text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              📍 Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MapSection;
