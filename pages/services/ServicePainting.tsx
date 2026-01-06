
import React from 'react';

const ServicePainting: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#1a1c23] py-24 text-center border-b-4 border-[#ff6b35]">
        <div className="container mx-auto px-4">
          <h4 className="text-[#ff6b35] font-heading font-black uppercase tracking-[0.4em] text-xs mb-4">Surface Restoration</h4>
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase tracking-tighter mb-4">
            TILE <span className="text-[#ff6b35]">PAINTING</span> & COATING
          </h1>
          <p className="text-gray-400 uppercase text-[10px] tracking-[0.3em] font-black">Premium UV-Blocking Technology</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12 order-2 lg:order-1">
              <div className="prose prose-lg text-gray-600">
                <h3 className="font-heading font-black text-[#1a1c23] text-3xl uppercase tracking-tighter mb-6">Restoring Structural Shielding</h3>
                <p className="mb-6 leading-relaxed">
                  Many homeowners view roof painting as a purely cosmetic choice, but at Aki Construction, we see it as a vital maintenance procedure. Over time, the protective factory finish of concrete tiles wears thin. When this happens, the tiles become porous—acting like sponges that soak up rainwater. This added weight puts strain on your trusses, and the moisture within the tiles leads to cracking during temperature shifts.
                </p>
                <p className="mb-6 leading-relaxed">
                  Our painting process starts with a high-pressure chemical wash to remove all algae, dirt, and loose material. We then apply a specialized primer that binds to the tile surface at a molecular level, followed by two thick coats of UV-resistant, acrylic-based roofing paint. This creates a waterproof "skin" over your entire roof.
                </p>
                <h3 className="font-heading font-black text-[#1a1c23] text-3xl uppercase tracking-tighter mb-6">Instant Property Transformation</h3>
                <p className="mb-6 leading-relaxed">
                  A faded, dirty roof can make even the most beautiful home look neglected. By choosing from our palette of modern industrial colors, you can instantly transform the aesthetic of your property. Not only does this increase your home's market value, but it also reflects heat more effectively, keeping your interior cooler during the harsh summer months.
                </p>
                <p className="mb-6 leading-relaxed font-bold text-[#1a1c23]">
                  Why replace your roof when you can restore it to a factory-fresh finish? Save tens of thousands with our premium restoration service.
                </p>
              </div>
            </div>
            <div className="flex justify-center sticky top-28 order-1 lg:order-2">
              <div className="w-80 h-80 bg-gray-50 border-2 border-dashed border-[#ff6b35]/20 rounded-full flex items-center justify-center relative">
                <i className="fa-solid fa-fill-drip text-[#1a1c23] text-9xl"></i>
                <div className="absolute -bottom-6 -left-6 bg-[#ff6b35] text-white p-6 rounded-3xl shadow-2xl font-heading font-black uppercase text-xs tracking-widest">
                  10-Year Finish
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

export default ServicePainting;
