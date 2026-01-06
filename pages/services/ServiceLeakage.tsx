
import React from 'react';

const ServiceLeakage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#1a1c23] py-24 text-center border-b-4 border-red-600">
        <div className="container mx-auto px-4">
          <h4 className="text-red-600 font-heading font-black uppercase tracking-[0.4em] text-xs mb-4">Advanced Diagnostics</h4>
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase tracking-tighter mb-4">
            ADVANCED <span className="text-[#ff6b35]">LEAKAGE</span> REPAIR
          </h1>
          <p className="text-gray-400 uppercase text-[10px] tracking-[0.3em] font-black">24/7 Rapid Response Unit</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12 order-2 lg:order-1">
              <div className="prose prose-lg text-gray-600">
                <h3 className="font-heading font-black text-[#1a1c23] text-3xl uppercase tracking-tighter mb-6">Scientific Detection</h3>
                <p className="mb-6 leading-relaxed">
                  A roof leak is rarely where the water actually enters the building. Water travels along trusses, conduits, and ceiling boards before it ever drips on your floor. Our leakage specialists are trained in "pathway diagnostics"—the science of tracing moisture back to its absolute source. We don't just put a patch over a wet spot; we find the micro-fissure or failed joint that started the problem.
                </p>
                <p className="mb-6 leading-relaxed">
                  We use industrial-strength poly-sealants and specialized membrane reinforcements that are designed to expand and contract with the extreme temperature fluctuations of the Limpopo sun. This ensures that a repair done by Aki Construction isn't just for today, but for every storm to follow.
                </p>
                <h3 className="font-heading font-black text-[#1a1c23] text-3xl uppercase tracking-tighter mb-6">Total System Restoration</h3>
                <p className="mb-6 leading-relaxed">
                  When we arrive for a leakage repair, we perform a holistic check of all ridge cappings, valleys, and flashing. Often, a leak is a symptom of a larger structural shift or debris buildup. We clear the pathways, reinforce the fasteners, and ensure that your roof's integrity is restored to its original engineering specification.
                </p>
                <p className="mb-6 leading-relaxed font-bold text-red-600">
                  Every hour a leak is ignored, the internal damage to your home doubles. Trust us to stop the rot and secure your interior once and for all.
                </p>
              </div>
            </div>
            <div className="flex justify-center sticky top-28 order-1 lg:order-2">
              <div className="w-80 h-80 bg-gray-50 border-2 border-dashed border-red-600/20 rounded-full flex items-center justify-center relative">
                <i className="fa-solid fa-faucet-drip text-[#1a1c23] text-9xl"></i>
                <div className="absolute -top-6 -left-6 bg-red-600 text-white p-6 rounded-3xl shadow-2xl font-heading font-black uppercase text-xs tracking-widest">
                  Zero-Drip Policy
                </div>
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

export default ServiceLeakage;
