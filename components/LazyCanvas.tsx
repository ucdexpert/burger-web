"use client";

import { useEffect, useRef, useState } from "react";

export const LazyCanvas = ({ children, className, aspectRatio = "1/1" }: { children: React.ReactNode, className?: string, aspectRatio?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ aspectRatio }}>
      {isVisible ? children : <div className="h-full w-full bg-black/50" />}
    </div>
  );
};
