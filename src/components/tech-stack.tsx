"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import the TechStackWithIcons component for lazy loading
const TechStackWithIcons = dynamic(() => import("./tech-stack-with-icons"), {
  loading: () => (
    <div className="mb-20 mt-10 rounded-lg overflow-auto">
      <div className="animate-pulse">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:w-5/6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-2xl bg-gray-200 border border-gray-300"
            />
          ))}
        </div>
      </div>
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
        <div className="mb-20 mt-10 rounded-lg overflow-auto">
          <div className="text-center py-16 text-gray-500">
            <div className="text-lg">Loading tech stack...</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechStack;
