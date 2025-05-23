import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Welcome from './components/Welcome';
import GamePresentation from './components/GamePresentation';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useScrollContext } from './context/ScrollContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { setLenisInstance } = useScrollContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [setLenisInstance]);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar />
            <Hero />
            <Welcome />
            <GamePresentation />
            <Features />
            <Team />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;