
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

// Mock data for products
const products = [
  {
    id: 1,
    title: 'Kit Organizador Multiuso Premium',
    category: 'Utilidades Domésticas',
    image: 'https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 20
  },
  {
    id: 2,
    title: 'Fones de Ouvido Bluetooth à Prova D\'água',
    category: 'Eletrônicos',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 10
  },
  {
    id: 3,
    title: 'Conjunto de Panelas Antiaderentes',
    category: 'Casa e Cozinha',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 5
  },
  {
    id: 4,
    title: 'Kit Skin Care Premium',
    category: 'Saúde e Beleza',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 12
  },
  {
    id: 5,
    title: 'Conjunto de Talheres Inox',
    category: 'Casa e Cozinha',
    image: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 15
  },
  {
    id: 6,
    title: 'Massageador Corporal Elétrico',
    category: 'Saúde e Beleza',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 8
  },
  {
    id: 7,
    title: 'Cama para Pet Premium',
    category: 'Produtos para Pets',
    image: 'https://images.unsplash.com/photo-1567612529009-5149472cc7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 10
  },
  {
    id: 8,
    title: 'Squeeze Esportiva 1L',
    category: 'Esporte e Lazer',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    minQuantity: 25
  },
];

// List of categories
const categories = [
  'Todos',
  'Utilidades Domésticas',
  'Eletrônicos',
  'Casa e Cozinha',
  'Saúde e Beleza',
  'Esporte e Lazer',
  'Produtos para Pets',
];

const Products = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-pipes-50 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">Catálogo de Produtos</h1>
            <p className="text-gray-600 max-w-2xl">
              Explore nossa ampla variedade de produtos para revenda. Todos os itens possuem estoque no Brasil para pronta entrega.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-64 space-y-8">
              {/* Search */}
              <div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar produtos..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="font-medium text-lg mb-3">Categorias</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="rounded text-pipes-600 focus:ring-pipes-500 mr-2"
                          defaultChecked={category === 'Todos'} 
                        />
                        {category}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Min Quantity */}
              <div>
                <h3 className="font-medium text-lg mb-3">Quantidade Mínima</h3>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent">
                  <option>Qualquer quantidade</option>
                  <option>Até 10 unidades</option>
                  <option>11-20 unidades</option>
                  <option>Mais de 20 unidades</option>
                </select>
              </div>
              
              {/* Clear Filters */}
              <Button variant="outline" className="w-full">Limpar Filtros</Button>
            </div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filter Bar */}
              <div className="md:hidden flex items-center justify-between mb-6">
                <Button variant="outline" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent">
                  <option>Mais recentes</option>
                  <option>Maior quantidade</option>
                  <option>Menor quantidade</option>
                </select>
              </div>
              
              {/* Products Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">{products.length} produtos encontrados</p>
                <div className="hidden md:block">
                  <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent">
                    <option>Mais recentes</option>
                    <option>Maior quantidade</option>
                    <option>Menor quantidade</option>
                  </select>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    minQuantity={product.minQuantity}
                  />
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" className="border-pipes-600 text-pipes-600 hover:bg-pipes-600 hover:text-white">
                  Carregar Mais Produtos
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Wholesale Banner */}
        <div className="bg-pipes-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Precisa de produtos específicos?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para solicitar um orçamento personalizado conforme as necessidades do seu negócio.
            </p>
            <Button variant="secondary" className="bg-white text-pipes-700 hover:bg-gray-100">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
