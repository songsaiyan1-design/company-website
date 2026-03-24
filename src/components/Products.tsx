import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', image: 'url-to-image-1' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', image: 'url-to-image-2' },
  { id: 3, name: 'Product 3', description: 'Description for product 3', image: 'url-to-image-3' },
  { id: 4, name: 'Product 4', description: 'Description for product 4', image: 'url-to-image-4' },
  { id: 5, name: 'Product 5', description: 'Description for product 5', image: 'url-to-image-5' },
  { id: 6, name: 'Product 6', description: 'Description for product 6', image: 'url-to-image-6' },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
      {products.map(product => (
        <motion.div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
