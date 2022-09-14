import { useEffect, useState, useCallback } from 'react';

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

function useIntersection(element, option) {
  const [isShowObserve, setIsShowObserve] = useState(false);

  const checkIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setIsShowObserve(true);
    } else {
      setIsShowObserve(false);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(checkIntersection, {
      ...defaultOption,
      ...option,
    });
    observer.observe(element);

    return () => {
      observer && observer.disconnect();
    };
  }, [element, checkIntersection, option]);

  return isShowObserve;
}

export default useIntersection;
