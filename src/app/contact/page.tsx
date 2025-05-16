'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center gradient-text-blue">Contact Us</h1>
        
        {/* Contact Form Section */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="premium-card p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 gradient-text-blue">Get In Touch</h2>
                  <p className="mb-8 text-[#2A2A2A]">
                    Ready to begin your premium real estate journey? Complete the form, and our team will reach out to schedule your personalized consultation.
                  </p>
                  
                  {formSubmitted ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                      <strong className="font-bold">Thank you!</strong>
                      <span className="block sm:inline"> Your message has been sent successfully. We&lsquo;ll be in touch soon.</span>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-[#5D7189] mb-1">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#B1C2D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8599AC]" 
                        required 
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-[#5D7189] mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#B1C2D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8599AC]" 
                        required 
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="company" className="block text-sm font-medium text-[#5D7189] mb-1">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#B1C2D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8599AC]" 
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-[#5D7189] mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#B1C2D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8599AC]" 
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-[#5D7189] mb-1">Your Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-[#B1C2D3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#8599AC]" 
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-secondary w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                
                <div>
                  <div className="bg-gradient-to-b from-[#1D2530] to-[#2A3441] text-white p-8 rounded-lg h-full premium-border">
                    <h3 className="text-2xl font-bold mb-6 gradient-text-gold">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-[#F9DF74]">Office Address</h4>
                        <p className="mb-1 text-[#B1C2D3]">15 Independence Avenue</p>
                        <p className="mb-1 text-[#B1C2D3]">Airport Residential Area</p>
                        <p className="text-[#B1C2D3]">Accra, Africa</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-[#F9DF74]">Contact Details</h4>
                        <p className="mb-1 text-[#B1C2D3]">Phone: +233 50 123 4567</p>
                        <p className="mb-1 text-[#B1C2D3]">Email: info@beacham.com</p>
                        <p className="text-[#B1C2D3]">WhatsApp: +233 50 123 4567</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-[#F9DF74]">Business Hours</h4>
                        <p className="mb-1 text-[#B1C2D3]">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-[#B1C2D3]">Saturday: 9:00 AM - 3:00 PM</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-[#F9DF74]">Connect With Us</h4>
                        <div className="flex space-x-4">
                          <a href="#" className="text-[#B1C2D3] hover:text-[#F9DF74] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-[#B1C2D3] hover:text-[#F9DF74] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-[#B1C2D3] hover:text-[#F9DF74] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-[#B1C2D3] hover:text-[#F9DF74] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center gradient-text-blue">Visit Our Office</h2>
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden shadow-md premium-border">
              {/* This would be replaced with an actual map in a production environment */}
              <div className="h-full w-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-medium text-[#5D7189] mb-2">Interactive Map</p>
                  <p className="text-[#2A2A2A]">Map integration would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center gradient-text-blue">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="premium-card p-6">
                <h3 className="text-xl font-bold mb-2 text-[#5D7189]">What areas do you serve?</h3>
                <p className="text-[#2A2A2A]">We primarily serve the Greater Accra region, including premium neighborhoods such as Airport Residential, Cantonments, East Legon, and Trasacco Valley.</p>
              </div>
              
              <div className="premium-card p-6">
                <h3 className="text-xl font-bold mb-2 text-[#5D7189]">How quickly can I expect a response?</h3>
                <p className="text-[#2A2A2A]">Our team typically responds to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly.</p>
              </div>
              
              <div className="premium-card p-6">
                <h3 className="text-xl font-bold mb-2 text-[#5D7189]">Do you offer virtual consultations?</h3>
                <p className="text-[#2A2A2A]">Yes, we offer virtual consultations via Zoom or Google Meet for clients who prefer remote meetings or are currently located outside Africa.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
