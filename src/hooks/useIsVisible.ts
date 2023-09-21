import { useState, useEffect, useMemo } from "react";

const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1,
};

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref])
  
  
    useEffect(() => {
      observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])
  
    return isIntersecting
  }
  