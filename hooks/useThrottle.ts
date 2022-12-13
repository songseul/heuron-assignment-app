import { useRef } from 'react';

function useThrottle<T extends any[]>(func: (...args: T) => void, ms: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  let throttled = false;
  return (...args: T) => {
    if (!timer.current) {
      throttled = true;
      timer.current = setTimeout(() => {
        func(...args);
        timer.current = null;
        throttled = false;
      }, ms);
    }
  };
}

export default useThrottle;
