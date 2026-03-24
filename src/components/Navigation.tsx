import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">Logo</div>
                <div className="menu-icon" onClick={toggleMenu}>☰</div>
                <motion.ul
                    className={`nav-links ${isOpen ? 'open' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </motion.ul>
            </div>
        </nav>
    );
};

export default Navigation;