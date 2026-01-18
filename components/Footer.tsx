import React from 'react';

const Footer: React.FC = () => {
  const openSupport = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 text-slate-500 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">The Brain Song</h4>
            <p className="mb-4">Unlock your true potential through the power of sound frequency.</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="/privacy.html" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms.html" className="hover:text-white">Terms of Service</a></li>
              <li>
                <button 
                  onClick={openSupport}
                  className="hover:text-white focus:outline-none text-left"
                >
                  Support
                </button>
              </li>
              <li>
                <a 
                  href="https://brainsongofficial.com/Affiliates/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Disclaimer</h4>
            <p className="text-xs leading-relaxed">
              ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
            </p>
          </div>
        </div>
        <div className="text-center text-xs pt-8 border-t border-slate-900">
          <p>The content on this website is for informational purposes only and is not intended to substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;