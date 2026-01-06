
import React from 'react';

const PillarCard: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-14 h-14 bg-[#1a1c23] group-hover:bg-[#ff6b35] text-white rounded-xl flex items-center justify-center text-2xl mb-6 transition-colors">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="font-heading font-black uppercase text-sm tracking-[0.2em] mb-4 text-[#1a1c23]">
      {title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed">
      {text}
    </p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header - Dark Hero */}
      <section className="bg-[#1a1c23] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff6b35]/5 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h4 className="text-[#ff6b35] font-heading font-black uppercase tracking-[0.4em] text-xs mb-6">Established Excellence</h4>
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-7xl uppercase tracking-tighter mb-6 leading-none">
            THE ART OF <br /> <span className="text-[#ff6b35]">ROOFING PRECISION</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Aki Construction is more than a building company. We are Malamulele’s specialized roofing authority, dedicated to structural integrity and architectural beauty.
          </p>
        </div>
      </section>

      {/* Our Mission Statement - Bold Typography */}
      <section className="py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <div className="w-12 h-1 bg-[#ff6b35] mb-6"></div>
                <h2 className="text-[#1a1c23] font-heading font-black text-3xl uppercase leading-tight tracking-tighter">
                  SERVING THE <br />
                  <span className="text-[#ff6b35]">LIMPOPO</span> HEARTLAND
                </h2>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-8 text-gray-600 text-lg leading-relaxed">
              <p className="font-bold text-[#1a1c23]">
                Founded in the heart of Malamulele, Aki Construction was born from a singular realization: Your roof is the most critical shield for your family and your investment.
              </p>
              <p>
                We noticed a gap in the local market—a need for a roofing specialist who combines traditional craftsmanship with modern engineering. Whether it's a sleek contemporary design or a classic tile restoration, we approach every square meter with uncompromising attention to detail.
              </p>
              <p>
                Today, we stand as the first choice for homeowners across Waterval, Elim, Giyani, and Louis Trichardt. We don't just "fix roofs"—we engineer peace of mind against the elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars - Icon Based */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#1a1c23] font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter">
              THE <span className="text-[#ff6b35]">AKI STANDARD</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black mt-2">Our commitment to every client</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <PillarCard 
              icon="fa-shield-halved" 
              title="Structural Integrity" 
              text="We use premium grade timber and sheeting that withstands the extreme Limpopo heat without warping or cracking."
            />
            <PillarCard 
              icon="fa-compass-drafting" 
              title="Aesthetic Mastery" 
              text="Our designs don't just protect; they elevate. We specialize in modern roof profiles that increase your property value."
            />
            <PillarCard 
              icon="fa-stopwatch-20" 
              title="Rapid Response" 
              text="In construction, timing is everything. We pride ourselves on meeting deadlines and responding to emergencies within 24 hours."
            />
            <PillarCard 
              icon="fa-handshake-angle" 
              title="Honest Pricing" 
              text="No hidden costs. No shortcuts. We provide transparent quotes that reflect the true quality of the materials and labor provided."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Text Blocks */}
      <section className="py-24 bg-[#1a1c23] text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
              <div className="flex-1">
                <h3 className="font-heading font-black text-3xl uppercase text-[#ff6b35] mb-6">A QUALITY-DRIVEN PHILOSOPHY</h3>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We believe that a roof is only as strong as its weakest joint. That is why our technicians are trained to double-check every fastener, every seal, and every cut. 
                  </p>
                  <p>
                    When you choose Aki Construction, you are choosing a partner who understands the local climate, the local soil, and the local architecture. We are Malamulele's own, and we build to last.
                  </p>
                </div>
              </div>
              <div className="w-px h-32 bg-gray-700 hidden md:block"></div>
              <div className="flex-none text-center">
                <div className="text-5xl font-heading font-black text-[#ff6b35] mb-2">100%</div>
                <div className="uppercase tracking-widest text-[10px] font-bold">Client Satisfaction</div>
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="text-5xl font-heading font-black text-[#ff6b35] mb-2">24/7</div>
                  <div className="uppercase tracking-widest text-[10px] font-bold">Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[#1a1c23] font-heading font-black text-3xl md:text-5xl uppercase mb-8 tracking-tighter">
            TRUST YOUR HOME TO THE <br />
            <span className="text-[#ff6b35]">ROOFING EXPERTS</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Join hundreds of satisfied homeowners across Malamulele who have secured their legacy with an Aki Construction roof.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:0815692291" className="bg-[#1a1c23] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest hover:bg-[#ff6b35] transition-all">
              Call 081 569 2291
            </a>
            <a href="https://wa.me/27815692291" className="bg-white border-2 border-[#1a1c23] text-[#1a1c23] px-12 py-5 rounded-full font-heading font-black uppercase tracking-widest hover:bg-[#1a1c23] hover:text-white transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
