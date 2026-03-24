import React from 'react';
import { motion } from 'framer-motion';

const links = [
    { name: 'Home', url: 'https://example.com/home' },
    { name: 'About', url: 'https://example.com/about' },
    { name: 'Services', url: 'https://example.com/services' },
    { name: 'Contact', url: 'https://example.com/contact' }
];

const Links = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {links.map(link => (
                <motion.a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 bg-white rounded-lg shadow-md transition transform hover:scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-lg font-semibold">{link.name}</h3>
                </motion.a>
            ))}
        </div>
    );
};

export default Links;