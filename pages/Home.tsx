
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left hover:text-[#ff6b35] transition-colors"
      >
        <span className="font-heading font-bold uppercase text-sm tracking-widest">{question}</span>
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-500 leading-relaxed text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://i.pinimg.com/736x/83/6a/99/836a99a7394b2452b2d8e2d74c9ebb1c.jpg',
    'https://i.pinimg.com/736x/de/ca/d2/decad2c855235bbf77d38f71a341b2ec.jpg',
    'https://i.pinimg.com/736x/93/cd/3b/93cd3bb78d5d18e300ffdcbc6c81a467.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      title: "Roof Construction",
      desc: "Complete structural building from framing to sheeting using high-end SABS materials.",
      icon: "fa-house-chimney",
      link: "/services/construction"
    },
    {
      title: "Design & Installation",
      desc: "Modern and classic roofing designs tailored to your specific home architecture.",
      icon: "fa-pencil-ruler",
      link: "/services/design"
    },
    {
      title: "Louver Installation",
      desc: "Improve airflow and ventilation with custom roof louvers and structural venting.",
      icon: "fa-wind",
      link: "/services/louvers"
    },
    {
      title: "Roof Leak Repairs",
      desc: "Fast and effective repairs for leaks, joints, and damaged roof sheets.",
      icon: "fa-faucet-drip",
      link: "/services/leakage"
    },
    {
      title: "Roof Tile Painting",
      desc: "Restore and protect your roof tiles with high-durability aesthetic coatings.",
      icon: "fa-fill-drip",
      link: "/services/painting"
    }
  ];

  const homeProjectImages = [
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.31.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.51%20%281%29.jpeg',
    'https://raw.githubusercontent.com/CoolnessUploadss/surprise-arts-gallery/ea3601224dff078189a166c487fa43669f50dad8/WhatsApp%20Image%202026-01-05%20at%2021.06.51.jpeg',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1a1c23]">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${index === currentSlide ? 'opacity-60' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${slide}')` }}
          ></div>
        ))}
        
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="text-center mb-12">
            <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-lg">
              Best Roofing Company in Malamulele & Surrounding Areas
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-md">
              Professional Roofing Design, Repair, and Installation You Can Trust in Malamulele and Surrounding Areas
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <a 
                href="https://wa.me/27815692291"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff6b35] text-white px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-[#e85a20] transition-all shadow-xl"
              >
                Get a Free Roofing Quote
              </a>
              <a 
                href="tel:0815692291" 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-heading font-bold text-lg hover:bg-white hover:text-[#1a1c23] transition-all backdrop-blur-sm"
              >
                Call +27 81 569 2291
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto transform translate-y-12">
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center flex flex-col items-center">
              <div className="text-[#ff6b35] text-4xl mb-4">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3 className="text-[#2b5a8e] font-heading font-bold text-xl mb-2">Fast & Reliable Service</h3>
              <p className="text-gray-500 text-sm">Quick response times and reliable service for all your roofing needs</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center flex flex-col items-center">
              <div className="text-[#ff6b35] text-4xl mb-4">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-[#2b5a8e] font-heading font-bold text-xl mb-2">Quality Guaranteed</h3>
              <p className="text-gray-500 text-sm">High-quality materials and expert workmanship on every project</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center flex flex-col items-center">
              <div className="text-[#ff6b35] text-4xl mb-4">
                <i className="fa-solid fa-award"></i>
              </div>
              <h3 className="text-[#2b5a8e] font-heading font-bold text-xl mb-2">Trusted Locally</h3>
              <p className="text-gray-500 text-sm">Serving Malamulele and surrounding areas with excellence</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-24 bg-white"></div>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[#1a1c23] font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-tight">
              ROOFING <span className="text-[#ff6b35]">QUALITY SERVICES</span>
            </h2>
            <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="group bg-gray-50 p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#ff6b35] text-4xl mb-8 shadow-md group-hover:bg-[#ff6b35] group-hover:text-white transition-colors duration-300">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h4 className="font-heading font-bold text-xl uppercase mb-4 text-[#1a1c23] tracking-tight group-hover:text-[#ff6b35]">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-200 w-full">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff6b35]">Professional Result</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a1c23]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-white font-heading font-extrabold text-3xl md:text-4xl uppercase tracking-tight">
              LATEST <span className="text-[#ff6b35]">COMPLETED PROJECTS</span>
            </h2>
            <div className="w-20 h-1 bg-[#ff6b35] mx-auto mt-4 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#1a1c23]">
            {homeProjectImages.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden h-[400px] border-2 border-[#1a1c23] bg-[#2a2c35]">
                <img 
                  src={img} 
                  alt={`Success Work ${idx + 1}`} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 opacity-0"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800';
                    e.currentTarget.style.opacity = '1';
                  }}
                />
                <div className="absolute inset-0 bg-[#ff6b35]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="text-center p-6">
                    <h5 className="text-white font-heading font-bold uppercase mb-2">Work Success</h5>
                    <p className="text-white text-xs font-semibold uppercase tracking-widest">Aki Construction Standard</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/projects" className="inline-block bg-[#ff6b35] text-white px-12 py-5 rounded-full font-heading font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#ff6b35] transition-all shadow-xl">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#1a1c23] font-heading font-extrabold text-3xl uppercase tracking-tight mb-4">
            WHAT OUR <span className="text-[#ff6b35]">CLIENTS SAY</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6b35] mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg italic text-gray-600 border-l-4 border-[#ff6b35] text-left">
              "Aki Construction did an amazing job on our new home's roof. Professional and on time!"
              <div className="mt-4 not-italic font-bold text-[#1a1c23] uppercase tracking-widest text-xs">— T. Maluleke</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg italic text-gray-600 border-l-4 border-[#ff6b35] text-left">
              "They fixed a leak that had been bothering us for months. Highly recommended."
              <div className="mt-4 not-italic font-bold text-[#1a1c23] uppercase tracking-widest text-xs">— S. Baloyi</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg italic text-gray-600 border-l-4 border-[#ff6b35] text-left">
              "Great service and affordable prices. My roof looks brand new after the painting."
              <div className="mt-4 not-italic font-bold text-[#1a1c23] uppercase tracking-widest text-xs">— J. Khoza</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-[#1a1c23] font-heading font-extrabold text-3xl uppercase tracking-tighter">
              FREQUENTLY ASKED <span className="text-[#ff6b35]">QUESTIONS</span>
            </h2>
            <div className="w-16 h-1 bg-[#ff6b35] mx-auto mt-4"></div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <FAQItem 
              question="How long does a typical roof installation take?"
              answer="A standard residential roof installation typically takes between 3 to 7 days, depending on the complexity of the design and weather conditions."
            />
            <FAQItem 
              question="Do you provide emergency roof repairs?"
              answer="Yes, we offer fast response times for critical roof leaks and storm damage in Malamulele and surrounding areas."
            />
            <FAQItem 
              question="Can you paint my existing roof tiles?"
              answer="Absolutely. We specialize in roof tile painting and restoration, which protects your tiles and makes them look brand new."
            />
            <FAQItem 
              question="Do you offer custom roofing designs?"
              answer="Yes, we can design custom roofs (modern or classic) tailored to your home's unique style and structure."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1c23] text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-white font-heading font-extrabold text-3xl md:text-5xl uppercase mb-8">SUBMIT YOUR HOME TO THE <br/><span className="text-[#ff6b35]">ROOFING EXPERTS</span></h2>
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

export default Home;
