
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-pipes-600">Pipes Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pipes-600 font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-pipes-600 font-medium">Produtos</Link>
            <Link to="/about" className="text-gray-700 hover:text-pipes-600 font-medium">Sobre</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pipes-600 font-medium">Contato</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-pipes-600 text-pipes-600 hover:bg-pipes-600 hover:text-white">
              Login
            </Button>
            <Button className="bg-pipes-600 hover:bg-pipes-700">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Orçamento
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t">
            <Link to="/" className="block py-2 text-gray-700 hover:text-pipes-600 font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-pipes-600 font-medium" onClick={toggleMenu}>Produtos</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-pipes-600 font-medium" onClick={toggleMenu}>Sobre</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-pipes-600 font-medium" onClick={toggleMenu}>Contato</Link>
            <div className="flex flex-col space-y-2 mt-2 pt-2 border-t">
              <Button variant="outline" className="border-pipes-600 text-pipes-600 hover:bg-pipes-600 hover:text-white">
                Login
              </Button>
              <Button className="bg-pipes-600 hover:bg-pipes-700">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
