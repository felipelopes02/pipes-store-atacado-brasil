
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div className="bg-pipes-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos aqui para atender sua empresa com produtos inovadores e de qualidade. Entre em contato conosco para saber mais.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-8">Fale Conosco</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                      <input 
                        type="text" 
                        id="company" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={4} 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pipes-500 focus:border-transparent"
                      placeholder="Descreva o que você precisa..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="wholesale" className="mr-2 rounded text-pipes-600 focus:ring-pipes-500" />
                    <label htmlFor="wholesale" className="text-gray-700">
                      Sou lojista/revendedor e tenho interesse em compras por atacado
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-pipes-600 hover:bg-pipes-700 py-6 text-lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
              
              <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-pipes-100 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-pipes-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Telefone/WhatsApp</h3>
                        <p className="text-gray-600">(11) 9xxxx-xxxx</p>
                        <p className="text-sm text-gray-500 mt-1">Segunda a sexta: 9h às 18h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-pipes-100 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-pipes-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">E-mail</h3>
                        <p className="text-gray-600">contato@pipesstore.com.br</p>
                        <p className="text-sm text-gray-500 mt-1">Respondemos em até 24 horas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-pipes-100 rounded-full p-3 mr-4">
                        <MapPin className="h-6 w-6 text-pipes-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Endereço</h3>
                        <p className="text-gray-600">São Paulo - SP, Brasil</p>
                        <p className="text-sm text-gray-500 mt-1">Sede e centro de distribuição</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-semibold text-xl mb-4">Política de Atacado</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-pipes-600 font-bold mr-2">•</span>
                        <span>Pedido mínimo de R$500,00</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pipes-600 font-bold mr-2">•</span>
                        <span>Frete mínimo de R$30,00</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pipes-600 font-bold mr-2">•</span>
                        <span>Envio em até 72 horas após confirmação do pagamento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pipes-600 font-bold mr-2">•</span>
                        <span>Atendimento exclusivo para lojistas e revendedores</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pipes-600 font-bold mr-2">•</span>
                        <span>Todos os produtos com estoque próprio no Brasil</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Banner */}
        <section className="py-12 bg-pipes-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Tem dúvidas?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Consulte nossa página de perguntas frequentes para encontrar respostas rápidas sobre pedidos, entregas e política de vendas.
            </p>
            <Button variant="outline" className="border-pipes-600 text-pipes-600 hover:bg-pipes-600 hover:text-white">
              Ver Perguntas Frequentes
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
