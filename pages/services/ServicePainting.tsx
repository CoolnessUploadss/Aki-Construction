
import React from 'react';

const ServicePainting: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Service Overview */}
      <section className="bg-[#1a1c23] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tighter mb-8">
            Roof Tile <span className="text-[#ff6b35]">Painting</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Our professional roof tile painting service is a comprehensive restoration process designed to protect and beautify your property. This service involves deep cleaning, surface preparation, and the application of UV-resistant acrylic coatings. It is for homeowners with aging or faded roofs who want a brand-new look without the high cost of replacement.
            </p>
            <p>
              It is needed when tiles become porous and start absorbing moisture, which increases the structural weight of the roof. A fresh coat of specialized paint seals the tile surface, making it waterproof and reflective, which also helps to lower the internal temperature of your home in the Limpopo sun.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What This Service Includes */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-black text-[#1a1c23] text-2xl uppercase mb-10 text-center">What This <span className="text-[#ff6b35]">Service Includes</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> High-pressure industrial roof cleaning</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Minor tile repairs and capping reinforcement</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Application of deep-penetrating tile primer</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Multi-coat application of UV-resistant paint</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Final edge detailing and site cleanup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Common Problems This Service Solves */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-black text-[#1a1c23] text-2xl uppercase mb-10 text-center">Common Problems <span className="text-[#ff6b35]">This Service Solves</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Faded Aesthetics</h4>
              <p className="text-gray-500 text-sm">We restore the vibrant color of your roof, solving the problem of a tired and old-looking property.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Porous Tiles</h4>
              <p className="text-gray-500 text-sm">Our coatings solve the issue of tiles soaking up rainwater and becoming dangerously heavy.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Moss and Algae</h4>
              <p className="text-gray-500 text-sm">We eliminate the dirt and organisms that trap moisture and lead to premature tile failure.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">UV Damage</h4>
              <p className="text-gray-500 text-sm">Our specialized paint solves the problem of brittle tiles caused by constant sun exposure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Work Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-black text-[#1a1c23] text-2xl uppercase mb-12 text-center">Our <span className="text-[#ff6b35]">Work Process</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h4 className="font-bold uppercase text-xs mb-2">Wash</h4>
              <p className="text-gray-500 text-[11px]">High-pressure removal of dirt and debris.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold uppercase text-xs mb-2">Repair</h4>
              <p className="text-gray-500 text-[11px]">Replacing broken tiles and fixing cracks.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold uppercase text-xs mb-2">Coat</h4>
              <p className="text-gray-500 text-[11px]">Applying primer and specialized paint layers.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold uppercase text-xs mb-2">Finish</h4>
              <p className="text-gray-500 text-[11px]">Final inspection for even coverage and shine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Aki Construction (IDENTICAL) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading font-black text-[#1a1c23] text-2xl uppercase mb-10">Why Choose <span className="text-[#ff6b35]">Aki Construction</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex gap-4">
              <i className="fa-solid fa-check-double text-[#ff6b35] text-xl"></i>
              <div>
                <h4 className="font-bold uppercase text-sm mb-1 text-[#1a1c23]">Experienced local roofing specialists</h4>
                <p className="text-gray-500 text-xs">Deep knowledge of Limpopo construction standards and local climate challenges.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fa-solid fa-check-double text-[#ff6b35] text-xl"></i>
              <div>
                <h4 className="font-bold uppercase text-sm mb-1 text-[#1a1c23]">Quality workmanship and durable materials</h4>
                <p className="text-gray-500 text-xs">We use only SABS-approved materials and precision engineering techniques.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fa-solid fa-check-double text-[#ff6b35] text-xl"></i>
              <div>
                <h4 className="font-bold uppercase text-sm mb-1 text-[#1a1c23]">Honest pricing with no hidden costs</h4>
                <p className="text-gray-500 text-xs">Our quotes are comprehensive and transparent, ensuring no surprises during the build.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <i className="fa-solid fa-check-double text-[#ff6b35] text-xl"></i>
              <div>
                <h4 className="font-bold uppercase text-sm mb-1 text-[#1a1c23]">Reliable service and clear communication</h4>
                <p className="text-gray-500 text-xs">We keep you informed at every stage of the project and respect all timelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action (IDENTICAL) */}
      <section className="py-24 text-center bg-[#1a1c23]">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-heading font-extrabold text-3xl uppercase mb-6">Need professional roofing services you can trust?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Contact Aki Construction today for a free quote or expert advice.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:0815692291" className="bg-[#ff6b35] text-white px-10 py-4 rounded-full font-heading font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white hover:text-[#ff6b35] transition-all">
              <i className="fa-solid fa-phone"></i> Call Now
            </a>
            <a href="https://wa.me/27815692291" className="bg-[#25D366] text-white px-10 py-4 rounded-full font-heading font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePainting;
