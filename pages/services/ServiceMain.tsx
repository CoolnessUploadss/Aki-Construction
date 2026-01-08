
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{ icon: string; title: string; link: string; desc: string }> = ({ icon, title, link, desc }) => (
  <Link to={link} className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
    <div className="w-16 h-16 bg-[#1a1c23] text-white group-hover:bg-[#ff6b35] rounded-xl flex items-center justify-center text-3xl mb-6 transition-colors">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="font-heading font-black uppercase text-lg text-[#1a1c23] mb-3 group-hover:text-[#ff6b35] transition-colors tracking-tight">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    <div className="text-[#ff6b35] font-heading font-black uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
      EXPLORE SERVICE <i className="fa-solid fa-arrow-right text-[8px]"></i>
    </div>
  </Link>
);

const ServiceMain: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Intro Section */}
      <section className="bg-[#1a1c23] py-24 md:py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase mb-6 tracking-tighter leading-none">
            ROOFING SERVICES <br/><span className="text-[#ff6b35]">IN MALAMULELE</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Aki Construction is Malamulele's premier roofing authority. We provide end-to-end roofing solutions for modern homes, commercial estates, and residential properties across the Limpopo province, ensuring every building we touch is protected by world-class engineering.
          </p>
        </div>
      </section>

      {/* 2. List of Roofing Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard 
              icon="fa-house-chimney" 
              title="Roof Construction" 
              link="/services/construction"
              desc="Comprehensive structural roof building using high-end timber and premium sheeting materials."
            />
            <ServiceCard 
              icon="fa-pencil-ruler" 
              title="Design & Installation" 
              link="/services/design"
              desc="Professional structural planning and installation for new high-end residential homes."
            />
            <ServiceCard 
              icon="fa-faucet-drip" 
              title="Roof Leak Repair" 
              link="/services/leakage"
              desc="Expert diagnostics and permanent sealing for all types of roof leaks and water damage."
            />
            <ServiceCard 
              icon="fa-wind" 
              title="Louver Installation" 
              link="/services/louvers"
              desc="Optimized ventilation systems to regulate temperature and prevent timber decay."
            />
            <ServiceCard 
              icon="fa-fill-drip" 
              title="Roof Tile Painting" 
              link="/services/painting"
              desc="Waterproof restoration coatings that give your old roof a factory-fresh finish."
            />
            <ServiceCard 
              icon="fa-shield-check" 
              title="Maintenance Check" 
              link="/services/maintenance"
              desc="Preventative 50-point inspections to ensure your roof is ready for storm season."
            />
          </div>
        </div>
      </section>

      {/* 3. Why Choose Aki Construction */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#1a1c23] font-heading font-black text-3xl uppercase tracking-tighter">WHY CHOOSE <span className="text-[#ff6b35]">AKI CONSTRUCTION</span></h2>
            <div className="w-16 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "fa-medal", title: "Quality Workmanship", desc: "We adhere to strict engineering standards and use only SABS-approved materials." },
              { icon: "fa-hand-holding-dollar", title: "Honest Pricing", desc: "No hidden fees or unexpected costs. We provide transparent, itemized roofing quotes." },
              { icon: "fa-clock", title: "Reliability", desc: "We show up on time and complete projects within the agreed timeframe, every time." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-[#ff6b35] text-4xl mb-4"><i className={`fa-solid ${item.icon}`}></i></div>
                <h4 className="font-heading font-bold text-[#1a1c23] uppercase mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process (Step 1-4) */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-[#1a1c23] font-heading font-black text-3xl uppercase tracking-tighter">OUR <span className="text-[#ff6b35]">4-STEP PROCESS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Assessment", desc: "We visit your property to evaluate the roof's condition and requirements." },
              { step: "02", title: "Strategic Quote", desc: "You receive a detailed plan and a fixed-price quotation for the work." },
              { step: "03", title: "Expert Execution", desc: "Our specialized team carries out the work with precision and safety." },
              { step: "04", title: "Final Handover", desc: "We perform a quality audit and ensure your property is left clean and secure." }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="text-5xl font-heading font-black text-[#ff6b35]/20 mb-[-25px] relative z-0">{item.step}</div>
                <h4 className="font-heading font-black text-[#1a1c23] uppercase text-sm mb-3 relative z-10">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-[#1a1c23] font-heading font-black text-2xl uppercase text-center mb-12">SERVICE <span className="text-[#ff6b35]">FAQS</span></h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-heading font-bold text-[#1a1c23] text-sm uppercase mb-3">Do you provide free quotes?</h4>
              <p className="text-gray-500 text-sm">Yes, we provide free consultations and quotes for all major roofing projects in Malamulele.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-heading font-bold text-[#1a1c23] text-sm uppercase mb-3">How long does a roof installation take?</h4>
              <p className="text-gray-500 text-sm">A typical residential installation takes 4-7 days depending on complexity and weather.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-[#1a1c23] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-heading font-extrabold text-3xl md:text-5xl uppercase mb-8">SECURE YOUR HOME <br /><span className="text-[#ff6b35]">WITH THE EXPERTS</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
             <a href="tel:0815692291" className="bg-[#ff6b35] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-[#ff6b35] transition-all">
                <i className="fa-solid fa-phone"></i> CALL 081 569 2291
             </a>
             <a href="https://wa.me/27815692291" className="bg-[#25D366] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#128c7e] transition-all shadow-xl">
                <i className="fa-brands fa-whatsapp"></i> WHATSAPP US
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMain;
