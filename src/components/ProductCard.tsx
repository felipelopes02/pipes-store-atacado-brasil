
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  minQuantity: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  minQuantity,
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <div className="text-sm text-pipes-600 font-medium mb-1">{category}</div>
        <h3 className="font-semibold text-lg line-clamp-2 h-14">{title}</h3>
        <div className="mt-2 text-sm text-gray-500">Mínimo: {minQuantity} unidades</div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full border-pipes-600 text-pipes-600 hover:bg-pipes-600 hover:text-white">
          Solicitar Cotação
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
