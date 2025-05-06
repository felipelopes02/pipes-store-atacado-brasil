
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-pattern py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Atacado de Produtos Importados para o seu Negócio
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A Pipes Store é uma importadora e distribuidora de produtos inovadores com estoque próprio no Brasil. 
              Oferecemos uma ampla variedade de utilidades domésticas, eletrônicos e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-pipes-600 hover:bg-pipes-700 text-white px-8 py-6 text-lg">
                <Link to="/products">Ver Produtos</Link>
              </Button>
              <Button asChild variant="outline" className="border-pipes-600 text-pipes-600 hover:bg-pipes-600 hover:text-white px-8 py-6 text-lg">
                <Link to="/contact" className="flex items-center">
                  Fale Conosco <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <div className="bg-pipes-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Atacado para Lojistas</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-pipes-600 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Pedido mínimo de R$500,00</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pipes-600 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Estoque próprio no Brasil</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pipes-600 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Envio em até 72h após confirmação do pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-pipes-600 rounded-full p-1 mt-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Produtos inovadores e criativos</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-pipes-600 hover:bg-pipes-700">Solicitar Orçamento</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
