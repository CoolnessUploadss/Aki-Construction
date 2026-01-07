
import React from 'react';

const ServiceLouver: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Service Overview */}
      <section className="bg-[#1a1c23] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tighter mb-8 leading-none">
            Louver <span className="text-[#ff6b35]">Installation</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Louver installation is a critical ventilation service involving placing specialized vents in your roof structure to improve airflow. This service is for homeowners who want to regulate house temperature naturally.
            </p>
            <p>
              In the Limpopo heat, roof spaces can reach dangerous temperatures. Proper ventilation ensures your home stays cool and your structural timber remains dry and strong for decades. It is needed when attics become stuffy or moisture builds up.
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
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Custom structural louver design and sizing</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Selection of weather-resistant ventilation blades</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Precision cutting and fitting into roof gables</li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Integration of bird and pest-proof screening</li>
              <li className="flex items-start gap-3 text-gray-600 text-sm"><i className="fa-solid fa-check text-[#ff6b35] mt-1"></i> Waterproof flashing around the installation site</li>
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
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-2">Stuffy Attics</h4>
              <p className="text-gray-500 text-sm">We solve heat trap issues that make upper rooms uncomfortably hot.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-[#1a1c23] uppercase text-sm mb-2">High Cooling Costs</h4>
              <p className="text-gray-500 text-sm">By cooling the roof naturally, we solve the issue of high AC electricity bills.</p>
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
              <h4 className="font-bold uppercase text-xs mb-2">Audit</h4>
              <p className="text-gray-500 text-[11px]">Identifying heat trap zones.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h4 className="font-bold uppercase text-xs mb-2">Design</h4>
              <p className="text-gray-500 text-[11px]">Selecting the right vent size.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h4 className="font-bold uppercase text-xs mb-2">Install</h4>
              <p className="text-gray-500 text-[11px]">Secure fitting and mesh placement.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#1a1c23] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h4 className="font-bold uppercase text-xs mb-2">Seal</h4>
              <p className="text-gray-500 text-[11px]">Final waterproofing finish.</p>
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

export default ServiceLouver;
