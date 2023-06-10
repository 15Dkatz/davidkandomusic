import { useEffect } from 'react';

export const useScrollIntoView = (element) => {
  useEffect(() => {
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [element]);
}
