import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gameInfo } from '../utils/gpasarticles';
import AnimatedImage from './AnimatedImage';

const GamePresentation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  const images = [
    "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    "https://images.pexels.com/photos/2693212/pexels-photo-2693212.png",
    "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg"
  ];
  
  return (
    <motion.div 
      id="game"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ opacity }}
    >
      <div className="noise-bg"></div>
      
      <AnimatedImage images={images} className="absolute inset-0 z-0" />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            style={{ y: y1 }}
          >
            <motion.h2
              className="huge-text mb-4 text-primary"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {gameInfo.title}
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl mb-6 max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {gameInfo.description}
            </motion.p>
            
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h4 className="text-primary font-semibold mb-2">Release</h4>
                <p>{gameInfo.releaseYear}</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold mb-2">Genre</h4>
                <p>{gameInfo.genre.join(", ")}</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold mb-2">Developer</h4>
                <p>{gameInfo.developer}</p>
              </div>
              <div>
                <h4 className="text-primary font-semibold mb-2">Platforms</h4>
                <p>{gameInfo.platforms.join(", ")}</p>
              </div>
            </motion.div>
            
            <motion.button
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary/80 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            style={{ y: y2 }}
          >
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Vincere Colors Game"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 border-4 border-primary/50 rounded-lg pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GamePresentation;