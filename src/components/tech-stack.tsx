"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import CircularLoader from "./lib/circular-loader";

// Dynamically import the TechStackWithIcons component for lazy loading
const TechStackWithIcons = dynamic(() => import("./tech-stack-with-icons"), {
  loading: () => (
    <div className="flex justify-center items-center h-full py-32">
      <CircularLoader size={40} />
    </div>
  ),
  // ssr: false, // Disable SSR for better performance
});

function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: "400px", // Start loading 50px before the section comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="" id="experience" ref={sectionRef}>
      <h1 className="black-chip">Tech Stack</h1>
      {isVisible ? (
        <TechStackWithIcons />
      ) : (
        <div className="flex justify-center items-center h-full py-32">
          <CircularLoader size={40} />
        </div>
      )}
    </div>
  );
}

export default TechStack;
