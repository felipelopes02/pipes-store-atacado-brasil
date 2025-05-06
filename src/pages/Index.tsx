
import React from 'react';
import { Truck, Package, Users, Phone } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for featured products
const featuredProducts = [
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
];

// Supplier brands
const supplierBrands = [
  { name: 'Brand 1', logo: 'https://via.placeholder.com/150x80?text=Fornecedor+1' },
  { name: 'Brand 2', logo: 'https://via.placeholder.com/150x80?text=Fornecedor+2' },
  { name: 'Brand 3', logo: 'https://via.placeholder.com/150x80?text=Fornecedor+3' },
  { name: 'Brand 4', logo: 'https://via.placeholder.com/150x80?text=Fornecedor+4' },
  { name: 'Brand 5', logo: 'https://via.placeholder.com/150x80?text=Fornecedor+5' },
];

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Por que escolher a Pipes Store?</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Fornecemos produtos inovadores de alta qualidade para revendedores em todo o Brasil
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Package className="h-8 w-8" />}
                title="Estoque no Brasil"
                description="Produtos disponíveis imediatamente para entrega, sem a espera de importações."
              />
              <FeatureCard
                icon={<Truck className="h-8 w-8" />}
                title="Envio Rápido"
                description="Despachamos seus pedidos em até 72 horas após a confirmação do pagamento."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8" />}
                title="Atendimento Exclusivo"
                description="Suporte personalizado para lojistas e revendedores por WhatsApp e e-mail."
              />
              <FeatureCard
                icon={<Phone className="h-8 w-8" />}
                title="Suporte Pós-Venda"
                description="Acompanhamento do seu pedido e assistência após a compra."
              />
            </div>
          </div>
        </section>

        <CategorySection />

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Conheça alguns dos nossos produtos mais populares entre revendedores
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  category={product.category}
                  minQuantity={product.minQuantity}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild className="bg-pipes-600 hover:bg-pipes-700">
                <Link to="/products">Ver Todos os Produtos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Wholesale Info Section */}
        <section className="py-16 bg-pipes-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Vendas por Atacado</h2>
              <p className="text-lg text-gray-700 mb-8">
                A Pipes Store atende principalmente lojistas e revendedores. Trabalhamos com pedido mínimo de R$500,00 e
                oferecemos condições especiais para compras em grandes quantidades.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Como funciona:</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <div className="bg-pipes-600 rounded-full w-6 h-6 flex items-center justify-center text-white font-medium mt-0.5 mr-3">
                      1
                    </div>
                    <p className="text-gray-700">Escolha os produtos que deseja e solicite um orçamento</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pipes-600 rounded-full w-6 h-6 flex items-center justify-center text-white font-medium mt-0.5 mr-3">
                      2
                    </div>
                    <p className="text-gray-700">Nossa equipe retornará com preços e disponibilidade</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-pipes-600 rounded-full w-6 h-6 flex items-center justify-center text-white font-medium mt-0.5 mr-3">
                      3
                    </div>
                    <p className="text-gray-700">Confirmado o pedido, realizamos o envio em até 72h após pagamento</p>
                  </div>
                </div>
                <Button className="mt-8 bg-pipes-600 hover:bg-pipes-700">Solicitar Orçamento</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Suppliers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Fornecedores de Confiança</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Trabalhamos com os melhores fornecedores para garantir produtos de qualidade
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {supplierBrands.map((brand, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all">
                  <img src={brand.logo} alt={brand.name} className="h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-pipes-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para revender produtos inovadores?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer com nossos produtos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" className="text-pipes-800 bg-white hover:bg-gray-100 px-8 py-6 text-lg">
                <Link to="/contact">Entre em Contato</Link>
              </Button>
              <Button asChild className="bg-pipes-700 hover:bg-pipes-800 border border-white px-8 py-6 text-lg">
                <Link to="/products">Ver Catálogo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
