import { motion } from 'framer-motion';
import { TowerControl as GameController } from 'lucide-react';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-primary mb-6"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <GameController size={80} color="var(--primary)" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-2 tracking-tighter"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          WELCOM TO VINCERE GAMES PROYECTO SMIX2D
        </motion.h1>
        
        <motion.div 
          className="h-1 w-40 bg-primary rounded-full mb-4"
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="w-3 h-3 rounded-full bg-primary"
            animate={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-primary"
            animate={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
          />
          <motion.div 
            className="w-3 h-3 rounded-full bg-primary"
            animate={{ scale: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;