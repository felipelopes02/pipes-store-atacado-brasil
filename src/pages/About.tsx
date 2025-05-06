
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Package, Truck, ShoppingCart } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-pipes-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Sobre a Pipes Store</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Importadora e distribuidora de produtos inovadores para o mercado brasileiro
            </p>
          </div>
        </div>

        {/* Company Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Armazém da Pipes Store" 
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <p className="text-gray-700 mb-4">
                  A Pipes Store é uma empresa especializada no comércio por atacado de utilidades domésticas, eletrônicos, 
                  itens para casa e cozinha, saúde e beleza, esporte e lazer, presentes e produtos para pets.
                </p>
                <p className="text-gray-700 mb-4">
                  Sediada em São Paulo, nossa empresa atua como importadora e distribuidora, oferecendo uma ampla variedade 
                  de produtos inovadores e criativos que visam proporcionar praticidade no dia a dia dos consumidores.
                </p>
                <p className="text-gray-700">
                  Trabalhamos com os melhores fornecedores do mundo para trazer ao Brasil produtos de qualidade, sempre 
                  buscando novidades que possam agregar valor ao portfólio de nossos revendedores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Conectar lojistas e revendedores brasileiros com produtos inovadores e de qualidade, 
              facilitando o acesso a itens internacionais com a conveniência de um estoque nacional e entrega rápida.
            </p>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como Trabalhamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pipes-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-10 w-10 text-pipes-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Estoque Local</h3>
                <p className="text-gray-600">
                  Todos os produtos anunciados estão disponíveis em nosso estoque no Brasil, 
                  permitindo pronta entrega e prazos de envio mais curtos.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pipes-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-10 w-10 text-pipes-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Logística Eficiente</h3>
                <p className="text-gray-600">
                  Nossos pedidos são despachados de São Paulo em até 72 horas após a confirmação do pagamento, 
                  com entregas realizadas via Correios ou transportadoras.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-pipes-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingCart className="h-10 w-10 text-pipes-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pedido Mínimo</h3>
                <p className="text-gray-600">
                  Trabalhamos com pedido mínimo de R$500,00, atendendo principalmente lojistas 
                  e revendedores que buscam produtos diferenciados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Qual é o pedido mínimo?</h3>
                <p className="text-gray-600">
                  Trabalhamos com pedido mínimo de R$500,00 para atender principalmente lojistas e revendedores.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Como é calculado o frete?</h3>
                <p className="text-gray-600">
                  O frete mínimo é de R$30,00, e o cálculo é realizado após a solicitação de orçamento, considerando o volume da entrega.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Qual o prazo de entrega?</h3>
                <p className="text-gray-600">
                  Os pedidos são despachados em até 72 horas após a confirmação do pagamento. O prazo de entrega varia conforme a região de destino.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Como solicitar um orçamento?</h3>
                <p className="text-gray-600">
                  Você pode entrar em contato conosco por WhatsApp, e-mail ou pelo formulário disponível em nosso site.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Vocês oferecem material para revenda?</h3>
                <p className="text-gray-600">
                  Sim, oferecemos imagens e descrições dos produtos para que nossos clientes possam utilizá-los em suas lojas físicas ou virtuais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-pipes-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para fazer negócio?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para conhecer nosso catálogo completo e solicitar um orçamento personalizado.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-pipes-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
