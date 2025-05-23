import { createContext, useContext, useState, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';

interface ScrollContextType {
  lenisInstance: Lenis | null;
  setLenisInstance: (lenis: Lenis) => void;
  scrollTo: (target: string | HTMLElement | number) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  lenisInstance: null,
  setLenisInstance: () => {},
  scrollTo: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  const scrollTo = (target: string | HTMLElement | number) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target);
    }
  };

  return (
    <ScrollContext.Provider value={{ lenisInstance, setLenisInstance, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};