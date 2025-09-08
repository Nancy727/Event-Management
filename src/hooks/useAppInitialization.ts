import { useEffect, useState } from 'react';

export const useAppInitialization = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      // Simulate app initialization (fonts loading, initial data, etc.)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Wait for fonts to load
      if (document.fonts) {
        await document.fonts.ready;
      }
      
      // Set app as ready
      setIsReady(true);
      
      // Small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    initializeApp();
  }, []);

  return { isLoading, isReady };
};
