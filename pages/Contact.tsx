
import React, { useState } from 'react';

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

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxsejYhNgr2jo1Bo2_aJevJS4xHf2SJf9oY6FLY8AUwYNfL8d3ECwLxbHwhLrCa34o/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Error!', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#1a1c23] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white font-heading font-extrabold text-4xl md:text-6xl uppercase tracking-tighter">
            Get In <span className="text-[#ff6b35]">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto uppercase text-xs tracking-[0.3em] font-bold">
            Free roofing quotes for Malamulele & Surrounding Areas.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info & Form */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h3 className="font-heading font-bold uppercase text-[#1a1c23] mb-4 text-sm tracking-widest">Call Directly</h3>
                  <a href="tel:0815692291" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#ff6b35] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase">Phone Number</div>
                      <div className="text-xl font-heading font-extrabold text-[#1a1c23]">+27 81 569 2291</div>
                    </div>
                  </a>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <h3 className="font-heading font-bold uppercase text-[#1a1c23] mb-4 text-sm tracking-widest">WhatsApp Quote</h3>
                  <a href="https://wa.me/27815692291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase">Send a Message</div>
                      <div className="text-xl font-heading font-extrabold text-[#1a1c23]">Chat With Us</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-50 relative overflow-hidden">
                {status === 'success' ? (
                  <div className="py-12 text-center animate-fadeIn">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h2 className="text-[#1a1c23] font-heading font-extrabold text-2xl uppercase mb-4">Request Received!</h2>
                    <p className="text-gray-500 mb-8">Thank you for contacting Aki Construction. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="bg-[#1a1c23] text-white font-heading font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:bg-[#ff6b35] transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-[#1a1c23] font-heading font-extrabold text-2xl uppercase mb-8">
                      Request a <span className="text-[#ff6b35]">Quote</span>
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b35]" 
                            placeholder="Your Name" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b35]" 
                            placeholder="Your Phone Number" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b35]" 
                          placeholder="yourname@email.com" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
                        <div className="relative">
                          <select 
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b35] appearance-none cursor-pointer"
                          >
                            <option value="">Select a Service</option>
                            <option value="Roofing Construction">Roofing Construction</option>
                            <option value="Roofing Design & Installation">Roofing Design & Installation</option>
                            <option value="Roof Leak Repairs">Roof Leak Repairs</option>
                            <option value="Louver Installation">Louver Installation</option>
                            <option value="Roof Tile Painting">Roof Tile Painting</option>
                            <option value="General Maintenance">General Maintenance</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                            <i className="fa-solid fa-chevron-down text-xs"></i>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Details / Message</label>
                        <textarea 
                          name="message"
                          required
                          rows={4} 
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff6b35]" 
                          placeholder="Describe what you need..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full bg-[#1a1c23] text-white font-heading font-bold uppercase tracking-widest py-4 rounded-lg transition-all flex items-center justify-center gap-3 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#ff6b35] hover:text-white'}`}
                      >
                        {status === 'submitting' ? (
                          <>
                            <i className="fa-solid fa-circle-notch animate-spin"></i>
                            Sending Quote...
                          </>
                        ) : 'Send Request Now'}
                      </button>
                      {status === 'error' && (
                        <p className="text-center text-xs text-red-500 font-bold uppercase tracking-tighter">Something went wrong. Please try again or call us directly.</p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:w-1/3">
              <div className="space-y-12">
                <div>
                  <h3 className="font-heading font-extrabold text-xl uppercase mb-6 flex items-center gap-3">
                    <div className="w-1 h-8 bg-[#ff6b35]"></div> Business Hours
                  </h3>
                  <ul className="space-y-3 text-sm font-medium">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500 uppercase">Mon - Fri</span>
                      <span className="text-[#1a1c23]">08:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-500 uppercase">Saturday</span>
                      <span className="text-[#1a1c23]">09:00 - 15:00</span>
                    </li>
                    <li className="flex justify-between text-red-600 font-bold uppercase">
                      <span>Repairs</span>
                      <span>24 / 7 Response</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl uppercase mb-6 flex items-center gap-3">
                    <div className="w-1 h-8 bg-[#ff6b35]"></div> Areas Served
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Malamulele', 'Waterval', 'Elim', 'Giyani', 'Louis Trichardt', 'Vhembe'].map(area => (
                      <span key={area} className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold uppercase tracking-tight hover:bg-[#ff6b35] hover:text-white transition-colors cursor-default">{area}</span>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-[#ff6b35] rounded-2xl text-white">
                  <h3 className="font-heading font-extrabold text-xl uppercase mb-4">Urgent Leak?</h3>
                  <p className="text-sm font-bold mb-6 opacity-90 leading-relaxed">Don't wait for internal damage to worsen. Call Aki Construction immediately for fast roof repair.</p>
                  <a href="tel:0815692291" className="block text-center bg-[#1a1c23] text-white py-3 rounded font-heading font-black uppercase tracking-widest hover:bg-white hover:text-[#1a1c23] transition-all">
                    Call 081 569 2291
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <FAQItem 
              question="Do you guarantee your workmanship?"
              answer="We pride ourselves on high-quality workmanship and provide a guarantee on all new installations and restoration projects."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
