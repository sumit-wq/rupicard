import React, { useEffect, useRef } from "react";

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className: string;
  wrapperClassName: string;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className,
  wrapperClassName,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${className}`);

        }
      });
    }, { threshold: 0.5 });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return <div className={wrapperClassName} ref={sectionRef}>{children}</div>;
};

export default ScrollAnimatedSection;
