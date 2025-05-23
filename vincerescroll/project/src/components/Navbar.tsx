import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TowerControl as GameController } from 'lucide-react';
import { useScrollContext } from '../context/ScrollContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollTo } = useScrollContext();
  
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { title: "Home", target: "hero" },
    { title: "Game", target: "game" },
    { title: "Features", target: "features" },
    { title: "Team", target: "team" },
  ];

  const handleNavClick = (target: string) => {
    scrollTo(document.getElementById(target) || 0);
    setIsOpen(false);
  };
  
  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GameController className="text-primary mr-2" size={24} />
          <span className="font-bold text-lg md:text-xl">VINCERE</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={index}
              className="text-white hover:text-primary font-medium underline-animation"
              onClick={() => handleNavClick(link.target)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {link.title}
            </motion.button>
          ))}
        </div>
        
        <motion.button
          className="block md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  className="text-white text-2xl font-bold"
                  onClick={() => handleNavClick(link.target)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.title}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;