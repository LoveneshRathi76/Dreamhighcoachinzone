import React from "react";

const studentImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80",
];

function Reviews() {
  const reviews = [
    {
      name: "Aarav Sharma",
      rating: 5,
      comment: "Coaching is excellent and the teachers explain every concept clearly. My confidence improved a lot.",
      image: studentImages[0],
    },
    {
      name: "Diya Verma",
      rating: 4,
      comment: "Very supportive environment and regular tests helped me stay focused and prepared.",
      image: studentImages[1],
    },
    {
      name: "Rohan Singh",
      rating: 5,
      comment: "The faculty is very helpful and the study strategy is perfect for board exam preparation.",
      image: studentImages[2],
    },
    {
      name: "Priya Agarwal",
      rating: 4,
      comment: "Strong guidance and friendly behavior by teachers made learning enjoyable and stress-free.",
      image: studentImages[3],
    },
    {
      name: "Karan Kumar",
      rating: 5,
      comment: "Best coaching center for academic growth. Highly recommended for serious students.",
      image: studentImages[4],
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-3">
            Student Reviews
          </h2>
          <p className="text-gray-600">
            What our students say about our coaching
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-3">
                <img
                loading="lazy"
                  src={r.image}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />

                <div>
                  <h3 className="font-semibold text-sm">{r.name}</h3>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(r.rating)}
                    {"☆".repeat(5 - r.rating)}
                  </div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {r.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
