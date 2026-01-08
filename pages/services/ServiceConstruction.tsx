
import React from 'react';

const ServiceConstruction: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Service Overview */}
      <section className="bg-[#1a1c23] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-none">
            Roof <span className="text-[#ff6b35]">Construction</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed text-center">
            <p>
              Our Roof Construction service is the ultimate solution for building a high-end, durable roof from scratch. We handle everything from raw timber framing to the final sheeting, ensuring a structure that stands strong against the elements.
            </p>
            <p>
              This service is for homeowners building new properties or replacing entire roof systems. It is needed to ensure that your building has a solid, engineered foundation that provides lifelong security and modern architectural appeal.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What This Service Includes */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-black text-[#1a1c23] text-2xl uppercase mb-10 text-center">What This <span className="text-[#ff6b35]">Service Includes</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Full structural timber roof framing</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> High-quality roof sheeting or tile installation</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Precision installation of ridge caps and valleys</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Professional flashing and waterproofing application</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Final structural audit for safety and compliance</li>
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
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-2">Unsafe Framing</h4>
              <p className="text-gray-500 text-sm">We replace weak, old frames with engineered timber that meets safety standards.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-2">Severe Roof Failure</h4>
              <p className="text-gray-500 text-sm">We solve issues where the entire roof has collapsed or is beyond simple repair.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-2">Incomplete Builds</h4>
              <p className="text-gray-500 text-sm">We step in to finish projects where other contractors have failed or left mid-build.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-2">Poor Engineering</h4>
              <p className="text-gray-500 text-sm">Our builds solve sagging and drainage problems caused by bad original designs.</p>
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
              <h4 className="font-bold uppercase text-xs mb-2">Blueprint</h4>
              <p className="text-gray-500 text-[11px]">Finalizing structural engineering and measurements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold uppercase text-xs mb-2">Framing</h4>
              <p className="text-gray-500 text-[11px]">Setting the timber trusses and frame skeleton.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold uppercase text-xs mb-2">Sheeting</h4>
              <p className="text-gray-500 text-[11px]">Installing the roof skin and protective layers.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold uppercase text-xs mb-2">Sealing</h4>
              <p className="text-gray-500 text-[11px]">Applying final flashing and waterproofing audits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Aki Construction */}
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

      {/* 6. Call to Action */}
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

export default ServiceConstruction;
