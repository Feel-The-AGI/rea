export default function PortfolioCompanies() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center gradient-text-blue">Portfolio Companies</h1>
        
        <div className="max-w-5xl mx-auto">
          <p className="text-xl mb-10 text-center text-[var(--text-dark)]">
            Explore our successful partnerships and the companies we&lsquo;ve helped transform through our automation solutions.
          </p>
          
          {/* Portfolio companies will be listed here */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This is a placeholder for portfolio companies */}
            <div className="premium-card p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 gradient-text-gold">Company One</h3>
              <p className="mb-4 text-[var(--text-dark)]">
                Brief description of the company and how our services helped them achieve their goals.
              </p>
            </div>
            
            <div className="premium-card p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 gradient-text-gold">Company Two</h3>
              <p className="mb-4 text-[var(--text-dark)]">
                Brief description of the company and how our services helped them achieve their goals.
              </p>
            </div>
            
            <div className="premium-card p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 gradient-text-gold">Company Three</h3>
              <p className="mb-4 text-[var(--text-dark)]">
                Brief description of the company and how our services helped them achieve their goals.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <section className="bg-[var(--beacham-blue)] text-white py-12 rounded-lg text-center mt-16">
          <h2 className="text-2xl font-bold mb-6 gradient-text-gold">Join Our Success Stories</h2>
          <p className="max-w-3xl mx-auto mb-8 text-[var(--text-light)]">
            Our proven track record speaks for itself. Let us help you achieve similar results.
          </p>
          <a 
            href="/contact" 
            className="btn btn-secondary inline-block"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </div>
  );
}
