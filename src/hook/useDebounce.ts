import { useEffect } from 'react';

const useDebounce = (callback: () => void, delay: number, dependencies: string[]) => {
  useEffect(() => {
    const handler = setTimeout(callback, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay, ...dependencies]);
};

export default useDebounce;
