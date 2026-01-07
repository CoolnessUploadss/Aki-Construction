
import React from 'react';

const ServiceDesign: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Service Overview */}
      <section className="bg-[#1a1c23] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tighter mb-8">
            Design & <span className="text-[#ff6b35]">Installation</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Our Design and Installation service is the foundation of any high-end property in Malamulele. We specialize in creating custom structural roof blueprints that prioritize both architectural beauty and long-term durability. This service is for homeowners building new residences or undertaking major structural renovations who require a roof that complements their home's modern design.
            </p>
            <p>
              It is needed from the earliest stages of construction to ensure that the truss layout and material selection are perfectly aligned with the building's engineering requirements. A professionally designed roof provides the necessary protection and ventilation for a lifetime of security.
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
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Custom structural roof design and planning</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Engineering of truss layouts for maximum strength</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Selection and supply of premium roofing materials</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Professional installation by specialized roofing teams</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Final structural audit and waterproofing verification</li>
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
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Architectural Mismatch</h4>
              <p className="text-gray-500 text-sm">We prevent the common issue of roofs looking out of place by designing structures that match modern home styles.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Structural Weakness</h4>
              <p className="text-gray-500 text-sm">Our designs solve issues related to sagging or unstable frames through precise engineering calculations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Poor Water Runoff</h4>
              <p className="text-gray-500 text-sm">We solve the problem of water pooling by ensuring perfect angles for drainage during installation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-3">Thermal Inefficiency</h4>
              <p className="text-gray-500 text-sm">Our installations include airflow considerations to prevent excessive heat buildup in your attic.</p>
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
              <h4 className="font-bold uppercase text-xs mb-2">Assessment</h4>
              <p className="text-gray-500 text-[11px]">We review your plans and site requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold uppercase text-xs mb-2">Design</h4>
              <p className="text-gray-500 text-[11px]">Creating the structural blueprint for your roof.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold uppercase text-xs mb-2">Execution</h4>
              <p className="text-gray-500 text-[11px]">Our team installs the structure with precision.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold uppercase text-xs mb-2">Handover</h4>
              <p className="text-gray-500 text-[11px]">Final quality check and clean site delivery.</p>
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

export default ServiceDesign;
