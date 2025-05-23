import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Welcome = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{ opacity }}
    >
      <div className="noise-bg"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
      
      <motion.div 
        className="relative z-20 max-w-5xl mx-auto text-center px-4"
        style={{ y }}
      >
        <motion.h2
          className="medium-text mb-8 text-primary"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Bienvenidos a la presentación de
        </motion.h2>
        
        <motion.h3
          className="huge-text mb-8"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          VINCERE GAMES
        </motion.h3>
        
        <motion.div
          className="h-1 w-40 bg-primary mx-auto mb-10"
          initial={{ width: 0 }}
          whileInView={{ width: "10rem" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Sumérgete en un mundo donde los colores dan forma a la realidad. Vincere Colors desafía a los jugadores a navegar por un universo dinámico donde cada tono afecta la mecánica del juego.
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl text-primary font-semibold"
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Hecho por Alexis, Fran y Ian
          <span className="block text-sm text-gray-400 mt-1">SMX2D proyecto 2</span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;