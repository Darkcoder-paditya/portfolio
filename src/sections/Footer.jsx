const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Prashant Aditya</h3>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <p className="hover:text-blue-400 cursor-pointer">Terms & Conditions</p>
              <p className="hover:text-blue-400 cursor-pointer">Privacy Policy</p>
              <p className="hover:text-blue-400 cursor-pointer">Contact</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://github.com/Darkcoder-paditya" target="_blank" rel="noopener noreferrer" 
                className="hover:opacity-75 transition-opacity">
                <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
                <img src="/assets/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity">
                <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
