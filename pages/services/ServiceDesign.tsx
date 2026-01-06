
import React from 'react';

const ServiceDesign: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#1a1c23] py-24 text-center border-b-4 border-[#ff6b35]">
        <div className="container mx-auto px-4">
          <h4 className="text-[#ff6b35] font-heading font-black uppercase tracking-[0.4em] text-xs mb-4">Master Planning</h4>
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase tracking-tighter mb-4">
            MODERN <span className="text-[#ff6b35]">DESIGN</span> & INSTALLATION
          </h1>
          <p className="text-gray-400 uppercase text-[10px] tracking-[0.3em] font-black">Architectural Excellence in Limpopo</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="flex justify-center sticky top-28">
              <div className="w-80 h-80 bg-gray-50 border-2 border-dashed border-[#ff6b35]/20 rounded-full flex items-center justify-center relative">
                <i className="fa-solid fa-pencil-ruler text-[#1a1c23] text-9xl"></i>
                <div className="absolute -bottom-6 -right-6 bg-[#ff6b35] text-white p-6 rounded-3xl shadow-2xl font-heading font-black uppercase text-xs tracking-widest">
                  Engineering First
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="prose prose-lg text-gray-600">
                <h3 className="font-heading font-black text-[#1a1c23] text-3xl uppercase tracking-tighter mb-6">Our Design Philosophy</h3>
                <p className="mb-6 leading-relaxed">
                  At Aki Construction, we don't believe in one-size-fits-all roofing. Every home in Malamulele has its own character, and the roof is its crowning achievement. Our process begins with a rigorous structural analysis of your building's footprint. We consider wind loads, seasonal rainfall patterns, and the thermal properties of the materials to ensure that your new roof isn't just a covering, but a high-performance system.
                </p>
                <p className="mb-6 leading-relaxed">
                  Our team utilizes modern design principles to create silhouettes that define luxury. Whether you are looking for a sleek, contemporary flat-look profile or a traditional multi-gable masterpiece, we manage the geometry to ensure perfect water runoff and long-term stability. 
                </p>
                <h3 className="font-heading font-black text-[#1a1c23] text-3xl uppercase tracking-tighter mb-6">The Installation Standard</h3>
                <p className="mb-6 leading-relaxed">
                  The installation phase is where our craft truly shines. We use only industrial-grade timber trusses, treated to resist the specific biological and climate challenges of the Limpopo region. Our installers are trained to achieve millimeter-perfect alignments, ensuring that every sheet and tile sits exactly as intended.
                </p>
                <p className="mb-6 leading-relaxed font-bold text-[#1a1c23]">
                  When we hand over a completed installation, you aren't just getting a roof—you're getting a structural guarantee that your legacy is protected for generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Final CTA */}
      <section className="py-20 bg-[#1a1c23] text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-heading font-extrabold text-3xl md:text-5xl uppercase mb-8">SUBMIT YOUR HOME TO THE <br /><span className="text-[#ff6b35]">ROOFING EXPERTS</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">Contact us directly or message us on WhatsApp to start your next roofing project with Malamulele's finest construction experts.</p>
          <div className="flex flex-wrap justify-center gap-6">
             <a href="tel:0815692291" className="bg-[#ff6b35] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-[#ff6b35] transition-all">
                <i className="fa-solid fa-phone"></i> CALL +27 81 569 2291
             </a>
             <a 
               href="https://wa.me/27815692291" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="bg-[#25D366] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#128c7e] transition-all shadow-xl"
             >
                <i className="fa-brands fa-whatsapp"></i> MESSAGE ON WHATSAPP
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDesign;
