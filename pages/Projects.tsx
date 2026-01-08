import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const allProjectImages = [
    // Existing images
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.31.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.51%20%281%29.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.51.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.52.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.07.31%20%281%29.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.07.31.jpeg',

    // ✅ NEW WhatsApp images (RAW)
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.20.47.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.20.48.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.20.49.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.20.53.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.20.55.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.20.56.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.21.16.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.21.17.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.21.18.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/main/Gallery/WhatsApp%20Image%202026-01-07%20at%2021.21.19.jpeg'
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#1a1c23] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl uppercase mb-4 tracking-tighter">
            OUR <span className="text-[#ff6b35]">PROJECTS</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto uppercase text-xs tracking-[0.3em] font-bold">
            Showcasing our expert roofing work across Limpopo.
          </p>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjectImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg h-[500px] bg-[#2a2c35]"
              >
                <img
                  src={img}
                  alt={`Aki Construction Project ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-0"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800';
                    e.currentTarget.style.opacity = '1';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform pointer-events-none">
                  <h4 className="text-white font-heading font-black uppercase text-xl mb-1 tracking-wider">
                    Aki Construction Work
                  </h4>
                  <p className="text-[#ff6b35] font-bold uppercase text-xs tracking-[0.2em]">
                    Quality Roofing Solution
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-[#1a1c23] text-[#1a1c23] px-10 py-4 font-heading font-black uppercase tracking-widest hover:bg-[#1a1c23] hover:text-white transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
