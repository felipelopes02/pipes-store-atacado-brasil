
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Utilidades Domésticas',
    image: 'https://images.unsplash.com/photo-1590006978500-83d916fdfa2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'utilidades-domesticas'
  },
  {
    id: 2,
    name: 'Eletrônicos',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'eletronicos'
  },
  {
    id: 3,
    name: 'Casa e Cozinha',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'casa-e-cozinha'
  },
  {
    id: 4,
    name: 'Saúde e Beleza',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'saude-e-beleza'
  },
  {
    id: 5,
    name: 'Esporte e Lazer',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'esporte-e-lazer'
  },
  {
    id: 6,
    name: 'Produtos para Pets',
    image: 'https://images.unsplash.com/photo-1550682290-d7c35084f5a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    slug: 'produtos-para-pets'
  },
];

const CategorySection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Categorias de Produtos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-gray-900 group-hover:text-pipes-600">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
