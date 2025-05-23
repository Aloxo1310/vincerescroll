import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TowerControl as GameController } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  
  useEffect(() => {
    document.title = "Vincere Games - Vincere Colors";
  }, []);
  
  return (
    <motion.div 
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="noise-bg"></div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"
        style={{ opacity }}
      />
      
      <motion.div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2693212/pexels-photo-2693212.png?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"
        style={{ y, scale }}
      />
      
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center z-20"
        style={{ opacity }}
      >
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.3 
          }}
        >
          <GameController size={60} className="text-primary" />
        </motion.div>
        
        <motion.h1
          className="huge-text text-center mb-4 px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          VINCERE
          <span className="block text-primary">COLORS</span>
        </motion.h1>
        
        <motion.div
          className="h-1 w-24 bg-primary rounded-full mb-6"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        
        <motion.p
          className="text-xl md:text-2xl text-center max-w-xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          A vibrant gaming experience where colors shape reality
        </motion.p>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <motion.div 
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </motion.div>
          <p className="text-sm mt-2 text-center">Scroll Down</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;