import { useEffect } from 'react';

export const useScrollIntoView = (ref) => {
  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [ref]);
}
