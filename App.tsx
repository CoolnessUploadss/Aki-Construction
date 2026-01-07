
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ServiceMain from './pages/services/ServiceMain';
import ServiceDesign from './pages/services/ServiceDesign';
import ServiceLeakage from './pages/services/ServiceLeakage';
import ServiceLouver from './pages/services/ServiceLouver';
import ServicePainting from './pages/services/ServicePainting';
import ServiceMaintenance from './pages/services/ServiceMaintenance';

const AkiLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md">
      <path d="M10 50 L50 15 L90 50 L90 85 L10 85 Z" fill="#1a1c23" />
      <path d="M50 15 L90 50 L82 50 L50 22 L18 50 L10 50 Z" fill="#ff6b35" />
    </svg>
    <span className="relative z-10 font-heading font-black text-white text-2xl mt-2 select-none">A</span>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="fixed w-full z-50 bg-[#1a1c23] text-white shadow-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center relative z-50">
        <Link to="/" className="flex items-center gap-3">
          <AkiLogo className="w-11 h-11" />
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-xl tracking-tighter uppercase text-white">AKI</span>
            <span className="font-heading font-bold text-[10px] tracking-[0.2em] uppercase text-[#ff6b35]">CONSTRUCTION</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex gap-8 font-heading text-xs font-semibold uppercase tracking-widest items-center">
          <Link to="/" className="hover:text-[#ff6b35] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#ff6b35] transition-colors">About Us</Link>
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link to="/services" className="hover:text-[#ff6b35] transition-colors flex items-center gap-2">
              Services <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
            </Link>
            <div className={`absolute top-full left-0 w-64 bg-[#1a1c23] border border-gray-800 shadow-2xl py-4 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <Link to="/services/design" className="block px-6 py-3 hover:bg-[#ff6b35] hover:text-white transition-colors">Design & Installation</Link>
              <Link to="/services/leakage" className="block px-6 py-3 hover:bg-[#ff6b35] hover:text-white transition-colors">Leakage Repair</Link>
              <Link to="/services/louvers" className="block px-6 py-3 hover:bg-[#ff6b35] hover:text-white transition-colors">Louver Installation</Link>
              <Link to="/services/painting" className="block px-6 py-3 hover:bg-[#ff6b35] hover:text-white transition-colors">Roof Tile Painting</Link>
              <Link to="/services/maintenance" className="block px-6 py-3 hover:bg-[#ff6b35] hover:text-white transition-colors">Maintenance Check</Link>
            </div>
          </div>

          <Link to="/projects" className="hover:text-[#ff6b35] transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-[#ff6b35] transition-colors">Contact Us</Link>
        </nav>

        <div className="flex gap-4 items-center">
          <a href="tel:0815692291" className="hidden lg:flex items-center gap-2 text-sm font-semibold hover:text-[#ff6b35] transition-colors">
            <i className="fa-solid fa-phone text-[#ff6b35]"></i> 081 569 2291
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl text-[#ff6b35] focus:outline-none">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 top-[60px] bg-[#1a1c23] z-40 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-y-auto`}>
        <nav className="flex flex-col items-center justify-start pt-12 pb-20 gap-8 font-heading text-lg font-bold uppercase tracking-[0.2em]">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <div className="flex flex-col items-center gap-4">
            <Link to="/services" className="text-[#ff6b35]">Services</Link>
            <div className="flex flex-col items-center gap-3 text-sm opacity-80 border-l border-gray-700 pl-4">
              <Link to="/services/design">Design & Installation</Link>
              <Link to="/services/leakage">Leakage Repair</Link>
              <Link to="/services/louvers">Louver Installation</Link>
              <Link to="/services/painting">Roof Painting</Link>
              <Link to="/services/maintenance">Maintenance</Link>
            </div>
          </div>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="tel:0815692291" className="flex items-center gap-3 text-[#ff6b35] mt-4"><i className="fa-solid fa-phone"></i> 081 569 2291</a>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-[#1a1c23] text-gray-400 pt-16 pb-8 border-t border-gray-800">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-800">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <AkiLogo className="w-10 h-10" />
          <h3 className="text-white font-heading font-black text-sm uppercase tracking-wider">AKI CONSTRUCTION</h3>
        </div>
        <p className="text-sm leading-relaxed mb-6">Malamulele’s specialized roofing authority. We build to last.</p>
        <div className="flex gap-4">
          <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-all"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://wa.me/27815692291" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-all"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
      <div>
        <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-wider underline decoration-[#ff6b35] decoration-2 underline-offset-8">Quick Links</h3>
        <ul className="space-y-3 text-sm">
          <li><Link to="/" className="hover:text-[#ff6b35]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#ff6b35]">About Us</Link></li>
          <li><Link to="/services" className="hover:text-[#ff6b35]">All Services</Link></li>
          <li><Link to="/projects" className="hover:text-[#ff6b35]">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-[#ff6b35]">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-wider underline decoration-[#ff6b35] decoration-2 underline-offset-8">Services</h3>
        <ul className="space-y-3 text-sm">
          <li><Link to="/services/design" className="hover:text-[#ff6b35]">Design & Installation</Link></li>
          <li><Link to="/services/leakage" className="hover:text-[#ff6b35]">Leakage Repair</Link></li>
          <li><Link to="/services/louvers" className="hover:text-[#ff6b35]">Louvers</Link></li>
          <li><Link to="/services/painting" className="hover:text-[#ff6b35]">Tile Painting</Link></li>
          <li><Link to="/services/maintenance" className="hover:text-[#ff6b35]">Maintenance</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-wider underline decoration-[#ff6b35] decoration-2 underline-offset-8">Contact Us</h3>
        <ul className="space-y-4 text-sm">
          <li className="flex gap-3"><i className="fa-solid fa-location-dot text-[#ff6b35]"></i> Malamulele, Limpopo</li>
          <li className="flex gap-3"><i className="fa-solid fa-phone text-[#ff6b35]"></i> 081 569 2291</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest gap-4">
      <p>&copy; 2024 Aki Construction.</p>
    </div>
  </footer>
);

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[60px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServiceMain />} />
          <Route path="/services/design" element={<ServiceDesign />} />
          <Route path="/services/leakage" element={<ServiceLeakage />} />
          <Route path="/services/louvers" element={<ServiceLouver />} />
          <Route path="/services/painting" element={<ServicePainting />} />
          <Route path="/services/maintenance" element={<ServiceMaintenance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/27815692291" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-2xl"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="tel:0815692291" className="w-14 h-14 bg-[#ff6b35] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-2xl"><i className="fa-solid fa-phone"></i></a>
      </div>
    </div>
  </Router>
);

export default App;
