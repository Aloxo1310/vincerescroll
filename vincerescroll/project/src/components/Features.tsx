import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { features } from '../utils/gpasarticles';

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="features"
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-black"
      style={{ opacity }}
    >
      <div className="noise-bg"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="huge-text text-primary mb-4">Features</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the unique mechanics and innovations that make Vincere Colors an unforgettable gaming experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-black/40 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                
                <motion.button
                  className="mt-4 text-primary inline-flex items-center font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-20 bg-primary/10 border border-primary/20 rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience the Future of Gaming</h3>
              <p className="text-lg text-gray-300 mb-6">
                Vincere Colors pushes the boundaries of what's possible in interactive entertainment, 
                combining cutting-edge technology with innovative game design to create an experience 
                unlike anything you've played before.
              </p>
              <motion.button
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Trailer
              </motion.button>
            </div>
            <div className="md:w-1/3">
              <motion.div
                className="relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Vincere Colors Gameplay"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;