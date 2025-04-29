
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/about" },
    { text: "Training Programs", to: "/programs" },
    { text: "Exam Vouchers", to: "/vouchers" },
    { text: "Blog", to: "/blog" },
    { text: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ntil-700">ntil.in</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-gray-600 hover:text-ntil-700 transition-colors font-medium"
              >
                {link.text}
              </Link>
            ))}
            <Button className="bg-ntil-600 hover:bg-ntil-700">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((link, index) => (
              <div key={index} className="block">
                <Link
                  to={link.to}
                  className="block py-2 text-gray-600 hover:text-ntil-700 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              </div>
            ))}
            <Button className="w-full bg-ntil-600 hover:bg-ntil-700">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
