import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedImageProps {
  images: string[];
  className?: string;
}

const AnimatedImage = ({ images, className = '' }: AnimatedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to image index
  const imageIndex = useTransform(scrollYProgress, [0, 1], [0, images.length - 1]);
  
  // Transform for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className={`relative h-screen overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
      >
        {images.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            style={{
              opacity: useTransform(
                imageIndex,
                [index - 0.5, index, index + 0.5],
                [0, 1, 0]
              ),
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </motion.div>
  );
};

export default AnimatedImage;