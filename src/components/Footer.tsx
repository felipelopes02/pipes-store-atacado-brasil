
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl text-pipes-800 mb-4">Pipes Store</h3>
            <p className="text-gray-600 mb-4">
              Especialista em vendas por atacado de utilidades domésticas, eletrônicos, itens para casa 
              e muito mais. Oferecemos uma ampla variedade de produtos com pronta entrega.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pipes-600 hover:text-pipes-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-pipes-600 hover:text-pipes-800">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pipes-600">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pipes-600">Produtos</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pipes-600">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pipes-600">Contato</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pipes-600">Utilidades Domésticas</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pipes-600">Eletrônicos</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pipes-600">Casa e Cozinha</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pipes-600">Saúde e Beleza</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pipes-600">Produtos para Pets</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pipes-600" />
                <span className="text-gray-600">(11) 9xxxx-xxxx</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-pipes-600" />
                <a href="mailto:contato@pipesstore.com.br" className="text-gray-600 hover:text-pipes-600">contato@pipesstore.com.br</a>
              </li>
              <li className="text-gray-600 mt-2">
                São Paulo - SP, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Pipes Store. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
