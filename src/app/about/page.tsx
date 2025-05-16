import PremiumMetalCard from '@/app/components/PremiumMetalCard';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f9f9f9]">
      {/* Hero Section with Background */}
      <section className="hero-container relative overflow-hidden pt-30 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-in-left">
                <span className="text-black">About</span>
                <span className="hero-gradient-text block">Real Estate</span>
                <span className="gradient-text-gold block">Agent</span>
              </h1>
              <p className="text-lg text-[#2A2A2A] mb-6 max-w-xl slide-in-left" style={{ animationDelay: "0.3s" }}>
                We&lsquo;re revolutionizing the real estate industry in Africa with cutting-edge AI automation and personalized client experiences.
              </p>
            </div>
            <div className="md:w-1/2 relative slide-in-right">
              <div className="h-72 aspect-video"> {/* Fixed height container */}
                <PremiumMetalCard
                  frontContent={
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text-gold mb-2">Est. 2025</p>
                      <p className="text-lg text-[#2A2A2A]">Accra, Africa</p>
                    </div>
                  }
                  backContent={
                    <div className="text-center">
                      <p className="text-2xl font-bold gradient-text-blue mb-2">Our Mission</p>
                      <p className="text-base text-[#2A2A2A]">Transforming Real Estate Sales with Intelligent Automation</p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Vision */}
        <section className="mb-20 animate-float-up">
          <div className="max-w-4xl mx-auto glass-premium rounded-[30px] premium-shadow p-10 hover-float">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow mr-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold gradient-text-gold">Our Vision</h2>
            </div>
            <div className="glass-light p-8 rounded-2xl">
              <p className="text-xl text-[#2A2A2A] leading-relaxed">
                Transforming Real Estate Sales in Africa with Intelligent Automation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="mb-20 animate-float-up" style={{ animationDelay: "0.2s" }}>
          <div className="max-w-4xl mx-auto glass-premium rounded-[30px] premium-shadow p-10 hover-float">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow mr-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold gradient-text-blue">Our Mission</h2>
            </div>
            <div className="glass-light p-8 rounded-2xl">
              <p className="text-lg text-[#2A2A2A] leading-relaxed">
                Precise details on automating lead generation, initial contacts, client qualification, property showings, negotiations, closing deals, and post-sale services.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#f9f9f9] to-white premium-shadow flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <p className="text-[#2A2A2A] font-medium">Lead Generation</p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#f9f9f9] to-white premium-shadow flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-[#2A2A2A] font-medium">Client Qualification</p>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#f9f9f9] to-white premium-shadow flex flex-col items-center text-center hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[#2A2A2A] font-medium">Closing Deals</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Introduction */}
        <section className="mb-20 animate-float-up" style={{ animationDelay: "0.4s" }}>
          <div className="max-w-6xl mx-auto glass-premium rounded-[30px] premium-shadow p-10 hover-float">
            <div className="flex items-center mb-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow mr-6">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold gradient-text-blue">Team Introduction</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              
              {/* Jason Card */}
              <div className="glass-light overflow-hidden rounded-xl premium-shadow hover-float transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#D4AF37] to-[#BF953F]"></div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center text-black text-2xl font-semibold premium-shadow mb-4 border-4 border-white">J</div>
                  <h3 className="text-xl font-bold text-[#5D7189] mb-1">Jason</h3>
                  <p className="gradient-text-gold font-medium text-center">CTO & Operations</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#BF953F] rounded-full my-3"></div>
                  <p className="text-[#2A2A2A] text-center text-sm mt-2">Expert in AI systems and business automation</p>
                </div>
              </div>
              
              {/* Edem Card */}
              <div className="glass-light overflow-hidden rounded-xl premium-shadow hover-float transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-[#D4AF37] to-[#BF953F]"></div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center text-black text-2xl font-semibold premium-shadow mb-4 border-4 border-white">E</div>
                  <h3 className="text-xl font-bold text-[#5D7189] mb-1">Edem</h3>
                  <p className="gradient-text-gold font-medium text-center">Lead Technical Engineer</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#BF953F] rounded-full my-3"></div>
                  <p className="text-[#2A2A2A] text-center text-sm mt-2">Specializes in integration and system architecture</p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mb-10 animate-float-up" style={{ animationDelay: "0.6s" }}>
          <div className="max-w-4xl mx-auto glass-premium rounded-[30px] premium-shadow p-10 hover-float">
            <div className="text-center">
              <h2 className="text-3xl font-bold gradient-text-blue mb-6">Join Our Mission</h2>
              <p className="text-lg text-[#2A2A2A] mb-8 max-w-2xl mx-auto">
                Ready to revolutionize real estate in Africa? Partner with us to transform your business with intelligent automation.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a 
                  href="/contact" 
                  className="premium-button-secondary text-lg hover-float flex items-center px-8 py-3 rounded-full"
                >
                  <span>Contact Our Team</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
