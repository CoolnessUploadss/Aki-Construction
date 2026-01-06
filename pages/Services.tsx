
import React from 'react';

const ServiceSection: React.FC<{
  title: string;
  problem: string;
  seriousness: string;
  solution: string;
  benefit: string;
  icon: string;
  isReversed?: boolean;
}> = ({ title, problem, seriousness, solution, benefit, icon, isReversed }) => (
  <div className={`flex flex-col lg:flex-row gap-12 items-center py-24 ${isReversed ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="container mx-auto px-4">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
        {/* Text Content */}
        <div className="lg:w-3/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-[#ff6b35]"></div>
            <h4 className="font-heading font-black text-[#ff6b35] uppercase text-xs tracking-[0.3em]">Specialized Solution</h4>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-[#1a1c23] uppercase mb-10 tracking-tighter leading-none">
            {title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-[#1a1c23] uppercase text-[10px] tracking-widest mb-2 opacity-50">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{problem}</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-red-600 uppercase text-[10px] tracking-widest mb-2">Critical Risk</h4>
                <p className="text-gray-600 leading-relaxed text-sm italic">{seriousness}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-bold text-[#1a1c23] uppercase text-[10px] tracking-widest mb-2 opacity-50">Our Expertise</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{solution}</p>
              </div>
              <div className="bg-[#1a1c23] p-5 rounded-xl border-l-4 border-[#ff6b35]">
                <h4 className="font-heading font-bold text-[#ff6b35] uppercase text-[10px] tracking-widest mb-2">Long-term Value</h4>
                <p className="text-white text-sm font-medium leading-snug">{benefit}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="tel:0815692291" className="bg-[#1a1c23] text-white px-10 py-4 font-heading font-black uppercase tracking-widest hover:bg-[#ff6b35] transition-all text-xs">
              Book Service
            </a>
            <a href="https://wa.me/27815692291" className="border-2 border-[#1a1c23] text-[#1a1c23] px-10 py-4 font-heading font-black uppercase tracking-widest hover:bg-[#1a1c23] hover:text-white transition-all text-xs">
              WhatsApp Quote
            </a>
          </div>
        </div>

        {/* Icon Illustration (Replaces Image) */}
        <div className="lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff6b35] blur-[100px] opacity-10 rounded-full"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white border border-gray-100 rounded-[40px] shadow-2xl flex items-center justify-center text-[#1a1c23] group">
              <div className="absolute top-6 right-6 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-check text-[#ff6b35]"></i>
              </div>
              <i className={`fa-solid ${icon} text-8xl md:text-9xl transition-transform duration-500 group-hover:scale-110 text-[#1a1c23]`}></i>
              <div className="absolute -bottom-4 -right-4 bg-[#ff6b35] text-white px-6 py-3 rounded-xl font-heading font-black uppercase text-[10px] tracking-widest shadow-lg">
                Certified Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#1a1c23] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#ff6b35]/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h4 className="text-[#ff6b35] font-heading font-black uppercase tracking-[0.4em] text-xs mb-4">Precision Engineering</h4>
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase mb-6 tracking-tighter leading-none">
            OUR ROOFING <span className="text-[#ff6b35]">SPECIALTIES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase text-[10px] tracking-[0.4em] font-black leading-loose">
            Premium infrastructure solutions for the Limpopo residential and commercial landscape.
          </p>
        </div>
      </section>

      <section>
        <ServiceSection 
          title="Modern Design & Full Installation"
          problem="Older homes often suffer from outdated roofing structures that lack modern aesthetic appeal and structural efficiency."
          seriousness="Poor roof design can lead to water pooling, excessive heat retention, and a significant decrease in your property's overall market value."
          solution="Aki Construction provides custom modern and classic roofing designs tailored to your specific architectural style and structural needs."
          benefit="A beautiful, structurally sound roof that enhances your home's curb appeal and provides maximum protection for decades."
          icon="fa-pencil-ruler"
        />

        <ServiceSection 
          title="Advanced Roof Leak Repairs"
          problem="Damaged sheets, loose joints, or cracked tiles allow rainwater to seep into your ceiling and walls unexpectedly."
          seriousness="Roof leaks cause internal rot, electrical hazards, and mold growth, which can lead to expensive internal renovations if not addressed immediately."
          solution="We provide fast, reliable repairs for all leak sources, securing joints and replacing damaged roofing materials with high-grade alternatives."
          benefit="Complete protection from the elements, stopping internal damage and providing peace of mind during heavy rains."
          icon="fa-faucet-drip"
          isReversed
        />

        <ServiceSection 
          title="Structural Louver Installation"
          problem="Stuffy attics and poor roof ventilation trap heat and moisture, leading to higher cooling costs and timber decay."
          seriousness="Excessive moisture buildup in your roof space can weaken the structural integrity of your home's frame and promote rot."
          solution="We install high-quality custom roof louvers designed to improve airflow and temperature regulation throughout your property."
          benefit="Lower energy bills, a cooler home environment, and a longer lifespan for your roofing substructure."
          icon="fa-wind"
        />

        <ServiceSection 
          title="Professional Roof Tile Painting"
          problem="Roof tiles become porous and faded over time due to UV exposure, looking old and absorbing moisture."
          seriousness="Faded and porous tiles are more likely to crack and allow moss growth, which eventually leads to widespread roofing failure."
          solution="Our restoration process includes deep cleaning and painting with specialized UV-resistant, waterproof tile coatings."
          benefit="A roof that looks brand new for a fraction of the cost of replacement, with added protection against the harsh sun."
          icon="fa-fill-drip"
          isReversed
        />

        <ServiceSection 
          title="Integrity Maintenance Check"
          problem="Neglected roofs accumulate debris in gutters and valleys, leading to blockage and eventual structural rusting."
          seriousness="Minor issues like blocked gutters can overflow and flood your foundation, causing massive long-term structural instability."
          solution="Comprehensive maintenance checks to clean, seal, and reinforce all critical points of your roofing system."
          benefit="Avoid catastrophic failure and extend the life of your investment through regular professional care."
          icon="fa-shield-check"
        />
      </section>

      {/* Final Service CTA */}
      <section className="py-24 bg-[#1a1c23] text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-heading font-extrabold text-3xl md:text-5xl uppercase mb-8 tracking-tighter">
            READY TO GET YOUR <br />
            <span className="text-[#ff6b35]">ROOF FIXED?</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            No job is too complex for our engineering team. Contact Aki Construction today for a professional, no-obligation site assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:0815692291" className="bg-[#ff6b35] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest hover:bg-white hover:text-[#1a1c23] transition-all shadow-2xl">
              Call +27 81 569 2291
            </a>
            <a href="https://wa.me/27815692291" className="bg-[#25D366] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest hover:bg-white hover:text-[#25D366] transition-all shadow-2xl">
              <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
