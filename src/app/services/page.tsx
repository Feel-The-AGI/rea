"use client";

import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "AI Lead Generation",
      description: "Our AI algorithms identify and qualify potential leads with 96% accuracy, saving you countless hours of prospecting.",
      icon: "/images/icon-lead.svg",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Automated Property Matching",
      description: "Match clients with properties that meet their exact criteria through our advanced machine learning algorithms.",
      icon: "/images/icon-matching.svg",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Virtual Property Touring",
      description: "Offer immersive virtual tours of properties to clients, regardless of their location or time constraints.",
      icon: "/images/icon-virtual.svg", 
      color: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 4,
      title: "Market Analytics Dashboard",
      description: "Access real-time market data and predictive analytics to make informed decisions and advise clients with confidence.",
      icon: "/images/icon-analytics.svg",
      color: "bg-gradient-to-br from-amber-400 to-amber-600"
    },
    {
      id: 5,
      title: "Smart CRM Integration",
      description: "Seamlessly integrate with your existing CRM systems to maintain a single source of truth for all client interactions.",
      icon: "/images/icon-crm.svg",
      color: "bg-gradient-to-br from-rose-400 to-rose-600"
    },
    {
      id: 6,
      title: "Automated Follow-ups",
      description: "Never miss an opportunity with our intelligent follow-up system that nurtures leads through every stage of the sales funnel.",
      icon: "/images/icon-followup.svg",
      color: "bg-gradient-to-br from-teal-400 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1D2530] to-[#2A3441] text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 slide-in">
              <span className="text-white">Our Services</span>
            </h1>
            <p className="text-lg text-[#B1C2D3] slide-in max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
              We combine cutting-edge AI technology with deep real estate expertise to streamline your sales process and maximize your business potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden service-card group"
              >
                <div className={`h-2 ${service.color} group-hover:h-3 transition-all duration-300`}></div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110`}>
                      {service.id === 1 && (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                      )}
                      {service.id === 2 && (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                        </svg>
                      )}
                      {service.id === 3 && (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                        </svg>
                      )}
                      {service.id === 4 && (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      )}
                      {service.id === 5 && (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5 5 0 00-1.5-3.5M4 15v-1a5 5 0 011.5-3.5"></path>
                        </svg>
                      )}
                      {service.id === 6 && (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2A3441] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Real Estate Business?</h2>
            <p className="text-[#B1C2D3] mb-8">
              Join the hundreds of agents and brokers who have revolutionized their approach with our AI-powered platform.
            </p>
            <Link 
              href="/contact" 
              className="btn btn-primary inline-flex items-center"
            >
              <span>SCHEDULE A DEMO</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}