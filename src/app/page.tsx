"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const carouselItems = useMemo(() => [
    {
      id: 1,
      image: "/images/carousel/carousel1.jpg",
      alt: "Real Estate Property 1",
      bgColor: "bg-[#BC8F8F]", // Rosy brown
      width: 150
    },
    {
      id: 2,
      image: "/images/carousel/carousel2.jpg",
      alt: "Real Estate Property 2",
      bgColor: "bg-[#6495ED]", // Cornflower blue
      width: 190
    },
    {
      id: 3,
      image: "/images/carousel/carousel3.jpg",
      alt: "Real Estate Property 3",
      bgColor: "bg-[#8FBC8F]", // Dark sea green
      width: 170
    },
    {
      id: 4,
      image: "/images/carousel/carousel4.jpg",
      alt: "Real Estate Property 4",
      bgColor: "bg-[#F4A460]", // Sandy brown
      width: 150
    },
    {
      id: 5,
      image: "/images/carousel/carousel5.jpg",
      alt: "Real Estate Property 5",
      bgColor: "bg-[#9370DB]", // Medium purple
      width: 190
    },
    {
      id: 6,
      image: "/images/carousel/carousel6.jpg",
      alt: "Real Estate Property 6",
      bgColor: "bg-[#20B2AA]", // Light sea green
      width: 170
    },
    {
      id: 7,
      image: "/images/carousel/carousel7.jpg", 
      alt: "Real Estate Property 7",
      bgColor: "bg-[#DB7093]", // Pale violet red
      width: 150
    }
  ], []);
  
  // Create a copy with duplicates to create the illusion of infinite scrolling
  // We need the first set at the end to create the seamless loop
  const displayItems = useMemo(() => [...carouselItems, ...carouselItems, ...carouselItems], [carouselItems]);
  
  useEffect(() => {
    if (isPaused) return;
    
    // Calculate the total width up to current index
    const calculateOffset = () => {
      let totalOffset = 0;
      for (let i = 0; i < currentIndex; i++) {
        const itemIndex = i % carouselItems.length;
        totalOffset += carouselItems[itemIndex].width + 20; // width + gap
      }
      return totalOffset;
    };
    
    // Set initial position
    if (scrollRef.current) {
      scrollRef.current.style.transition = 'none';
      scrollRef.current.style.transform = `translateX(-${calculateOffset()}px)`;
    }
    
    // Set up the interval to move every 2 seconds
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      
      // Get next index
      const nextIndex = currentIndex + 1;
      
      // Calculate the next offset
      const nextOffset = calculateOffset() + carouselItems[currentIndex % carouselItems.length].width + 20;
      
      // Animate to next position
      scrollRef.current.style.transition = 'transform 0.5s ease';
      scrollRef.current.style.transform = `translateX(-${nextOffset}px)`;
      
      // After animation completes
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        
        // If we've gone through one complete set (at the end of second set),
        // jump back to the equivalent position in the first set (invisible to user)
        if (nextIndex >= carouselItems.length * 2 && scrollRef.current) {
          const resetIndex = nextIndex % carouselItems.length;
          setCurrentIndex(resetIndex);
          
          // Calculate position in first set
          let resetOffset = 0;
          for (let i = 0; i < resetIndex; i++) {
            resetOffset += carouselItems[i].width + 20;
          }
          
          // Instantly jump back without animation
          scrollRef.current.style.transition = 'none';
          scrollRef.current.style.transform = `translateX(-${resetOffset}px)`;
        }
      }, 500); // Match the transition duration
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentIndex, carouselItems, isPaused]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-container relative overflow-hidden pt-30 pb-16">
        <div className="gradient-noise-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 slide-in-left">
                <span className="text-black">Real Estate</span>
                <span className="hero-gradient-text block">on</span>
                <span className="gradient-text-gold block">Autopilot</span>
              </h1>
              <p className="mb-4 text-lg text-[#B1C2D3] slide-in-left max-w-lg" style={{ animationDelay: "0.2s" }}>
                Empower your real estate business with our cutting-edge AI solutions designed to automate sales and lead generation.
              </p>
              
              <div className="flex justify-start gap-12 mt-8">
                <div className="feature-item flex items-center gap-3 slide-in-left hover-float" style={{ animationDelay: "0.4s" }}>
                  <div className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] p-2 shadow-lg">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#D4AF37] font-medium tracking-wide">AI-POWERED</span>
                </div>
                <div className="feature-item flex items-center gap-3 slide-in-left hover-float" style={{ animationDelay: "0.5s" }}>
                  <div className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] p-2 shadow-lg">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#D4AF37] font-medium tracking-wide">DATA-DRIVEN</span>
                </div>
                <div className="feature-item flex items-center gap-3 slide-in-left hover-float" style={{ animationDelay: "0.6s" }}>
                  <div className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] p-2 shadow-lg">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#D4AF37] font-medium tracking-wide">CLIENT-FOCUSED</span>
                </div>
              </div>
              
              <div className="mt-4 flex gap-3 slide-in-left" style={{ animationDelay: "0.6s" }}>
                <Link 
                  href="/contact" 
                  className="btn-primary px-4 py-2 rounded-md flex items-center hover-float"
                >
                  <span>PARTNER WITH US</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary text-[#2A2A2A] hover:text-[#1D2530] px-4 py-2 rounded-md flex items-center hover-float"
                >
                  <span>LEARN MORE</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Carousel */}
            <div 
              className="relative overflow-hidden mt-6 md:mt-0 mb-2 slide-in-right"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative overflow-hidden rounded-[30px] glass-premium" style={{ height: "280px" }}>
                <div 
                  className="flex gap-5 py-4 pl-1 pr-8 -mx-1 absolute"
                  ref={scrollRef}
                >
                  {displayItems.map((item, index) => (
                    <div 
                      key={`${item.id}-${index}`}
                      className={`h-[280px] relative rounded-[30px] overflow-hidden premium-shadow flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:premium-shadow-lg ${item.bgColor}`}
                      style={{ width: `${item.width}px` }}
                    >
                      <div className="w-full h-full relative">
                        <Image 
                          src={item.image} 
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 33vw, 25vw"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          className="transition-transform duration-700 hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 glass-light-section">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6 gradient-text-blue animate-float-up">The Problem</h2>
    <p className="text-xl max-w-3xl mx-auto mb-8 text-[#2A2A2A] animate-float-up" style={{ animationDelay: "0.1s" }}>
      Real estate businesses struggle with slow sales cycles and inefficient manual follow-ups.
    </p>
    <div className="max-w-4xl mx-auto animate-float-up" style={{ animationDelay: "0.2s" }}>
      <div className="glass-premium p-8 rounded-xl premium-shadow hover-float">
        <div className="text-center">
          <p className="font-semibold mb-6 text-[#5D7189]">Automated Workflow Visualization</p>
          <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] grid-rows-2 gap-y-4 items-center">
            {/* Circle 1: Lead */}
            <div className="col-start-1 row-start-1 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow group hover:scale-110 hover:from-[#FFF3B0] hover:to-[#D4AF37] transition-all duration-300">
                <svg className="w-5 h-5 text-black group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
            </div>
            {/* Connecting Line 1 */}
            <div className="col-start-2 row-start-1 h-1 gradient-premium self-center"></div>
            {/* Circle 2: Follow-up */}
            <div className="col-start-3 row-start-1 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow group hover:scale-110 hover:from-[#FFF3B0] hover:to-[#D4AF37] transition-all duration-300">
                <svg className="w-5 h-5 text-black group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            {/* Connecting Line 2 */}
            <div className="col-start-4 row-start-1 h-1 gradient-premium self-center"></div>
            {/* Circle 3: Close */}
            <div className="col-start-5 row-start-1 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow group hover:scale-110 hover:from-[#FFF3B0] hover:to-[#D4AF37] transition-all duration-300">
                <svg className="w-5 h-5 text-black group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            {/* Label 1: Lead */}
            <div className="col-start-1 row-start-2 flex justify-center">
              <div className="premium-gradient-text-pill bg-white px-4 py-1">Lead</div>
            </div>
            {/* Label 2: Follow-up */}
            <div className="col-start-3 row-start-2 flex justify-center">
              <div className="premium-gradient-text-pill bg-white px-4 py-1">Follow-up</div>
            </div>
            {/* Label 3: Close */}
            <div className="col-start-5 row-start-2 flex justify-center">
              <div className="premium-gradient-text-pill bg-white px-4 py-1">Close</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text-blue animate-float-up">Features Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-premium p-8 rounded-xl premium-shadow hover-float stagger-fade-in relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-20 rounded-bl-full"></div>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#5D7189] text-center">Lead Automation</h3>
              <p className="text-[#2A2A2A] text-center">Custom AI agents instantly engage leads, ensuring no opportunity is missed.</p>
            </div>
            <div className="glass-premium p-8 rounded-xl premium-shadow hover-float stagger-fade-in relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-20 rounded-bl-full"></div>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#5D7189] text-center">Seamless Integration</h3>
              <p className="text-[#2A2A2A] text-center">Effortless connection via Zapier & Make.com with your existing systems.</p>
            </div>
            <div className="glass-premium p-8 rounded-xl premium-shadow hover-float stagger-fade-in relative overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-transparent opacity-20 rounded-bl-full"></div>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center premium-shadow">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#5D7189] text-center">Conversion Optimization</h3>
              <p className="text-[#2A2A2A] text-center">AI-driven personalized client interactions that maximize your sales pipeline.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 testimonial-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text-gold animate-float-up">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-dark p-8 rounded-lg premium-shadow hover-float animate-float-up relative overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -top-4 -left-4 text-[80px] opacity-10 text-[#F9DF74]">&quot;</div>
              <div className="relative z-10">
                <p className="mb-6 italic text-[#000000] leading-relaxed">&ldquo;REA&rsquo;s automation doubled our lead response rate and helped us close 40% more deals in just three months.&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center mr-4 premium-shadow">
                    <span className="text-black font-bold">SJ</span>
                  </div>
                  <p className="font-bold text-[#F9DF74]">Sarah Johnson, Broker</p>
                </div>
              </div>
            </div>
            <div className="glass-dark p-8 rounded-lg premium-shadow hover-float animate-float-up relative overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <div className="absolute -top-4 -left-4 text-[80px] opacity-10 text-[#F9DF74]">&quot;</div>
              <div className="relative z-10">
                <p className="mb-6 italic text-[#000000] leading-relaxed">&ldquo;The AI follow-up system saved our team 20 hours per week while exponentially improving our client satisfaction rates.&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3B0] flex items-center justify-center mr-4 premium-shadow">
                    <span className="text-black font-bold">MO</span>
                  </div>
                  <p className="font-bold text-[#F9DF74]">Michael Osei, Sales Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 glass-light-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text-blue animate-float-up">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-[#2A2A2A] animate-float-up" style={{ animationDelay: "0.1s" }}>
            Take the first step towards automating your real estate business today.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link 
              href="/contact"
              className="premium-button-secondary text-lg hover-float animate-float-up flex items-center px-8 py-3 rounded-full" 
              style={{ animationDelay: "0.2s" }}
            >
              <span>Request a Free Automation Audit</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/services"
              className="btn-secondary text-lg hover-float animate-float-up flex items-center px-8 py-3 rounded-full" 
              style={{ animationDelay: "0.3s" }}
            >
              <span>Learn More</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
