
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ icon: string; title: string; link: string; desc: string }> = ({ icon, title, link, desc }) => (
  <Link to={link} className="group p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">
    <div className="w-20 h-20 bg-gray-50 text-[#1a1c23] group-hover:bg-[#ff6b35] group-hover:text-white rounded-2xl flex items-center justify-center text-4xl mb-8 transition-colors">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="font-heading font-black uppercase text-xl text-[#1a1c23] mb-4 group-hover:text-[#ff6b35] transition-colors tracking-tighter">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
    <span className="text-[#ff6b35] font-heading font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
      View Our Process <i className="fa-solid fa-arrow-right text-[8px]"></i>
    </span>
  </Link>
);

const ServiceMain: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#1a1c23] py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase tracking-tighter leading-none mb-6">
            OUR <span className="text-[#ff6b35]">SERVICES</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto uppercase text-[10px] tracking-[0.3em] font-black leading-loose">
            Specialized engineering for the Limpopo residential and commercial landscape.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard 
              icon="fa-pencil-ruler" 
              title="Design & Installation" 
              link="/services/design"
              desc="Comprehensive structural planning and execution for new high-end residential builds."
            />
            <ServiceCard 
              icon="fa-faucet-drip" 
              title="Leakage Repair" 
              link="/services/leakage"
              desc="Surgical precision in identifying and sealing critical water ingress points."
            />
            <ServiceCard 
              icon="fa-wind" 
              title="Louver Installation" 
              link="/services/louvers"
              desc="Sophisticated ventilation systems designed to protect your timber and regulate heat."
            />
            <ServiceCard 
              icon="fa-fill-drip" 
              title="Tile Painting" 
              link="/services/painting"
              desc="Restorative UV-blocking coatings that bring life back to weathered roofing tiles."
            />
            <ServiceCard 
              icon="fa-shield-check" 
              title="Maintenance Check" 
              link="/services/maintenance"
              desc="Preventative 50-point audits to secure your home's legacy before the storm hits."
            />
            
            <div className="p-10 bg-[#1a1c23] rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#ff6b35] rounded-full flex items-center justify-center text-white text-2xl mb-6 shadow-lg animate-pulse">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <h3 className="text-white font-heading font-black uppercase text-xl mb-4 tracking-tight">Need a Consultation?</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed italic">Our engineering team is standing by to evaluate your property's needs today.</p>
              <a href="tel:0815692291" className="bg-[#ff6b35] text-white px-8 py-3 rounded-full font-heading font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-[#1a1c23] transition-all">
                Call Expert Team
              </a>
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

export default ServiceMain;
