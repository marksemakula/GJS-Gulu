// CollageBackground.jsx
import React, { useState, useEffect } from "react";
import "./CollageBackground.css";

// List of selected images for the collage
const images = [
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115155.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Academics/Classes/20260629_115602.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_162350.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Aerobics/20260617_163346.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260618_144040.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Elections/20260619_135314.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260529_163027.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/School%20Activities/Club%20Activities/20260615_162645.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162541.jpg",
  "/GOMBE%20JUNIOR%20SCHOOL%20-%20GULU/Student%20life/RELIGIOUS%20HOUR/20260602_162703.jpg"
];


// Number of images to show in foreground
const FOREGROUND_COUNT = 3;

const CollageBackground = () => {
  const [foregroundIndexes, setForegroundIndexes] = useState([]);
  const [colorIndexes, setColorIndexes] = useState([]);

  // Initialize foreground indexes
  useEffect(() => {
    setForegroundIndexes(Array.from({ length: FOREGROUND_COUNT }, (_, i) => i));
    setColorIndexes([]);
  }, []);

  // Animate foreground images cycling and color transition
  useEffect(() => {
    const interval = setInterval(() => {
      setForegroundIndexes(prev => {
        // Pick random indexes for foreground
        let newIndexes = [];
        while (newIndexes.length < FOREGROUND_COUNT) {
          let idx = Math.floor(Math.random() * images.length);
          if (!newIndexes.includes(idx)) newIndexes.push(idx);
        }
        return newIndexes;
      });
      setColorIndexes(prev => {
        // Pick one random foreground image to transition to color
        if (foregroundIndexes.length > 0) {
          const idx = foregroundIndexes[Math.floor(Math.random() * foregroundIndexes.length)];
          return [idx];
        }
        return [];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [foregroundIndexes]);

  return (
    <div className="collage-bg">
      {images.map((src, i) => {
        const isForeground = foregroundIndexes.includes(i);
        const isColor = colorIndexes.includes(i);
        return (
          <img
            key={i}
            src={src}
            alt="collage"
            className={`collage-img${isForeground ? " collage-img-foreground" : " collage-img-background"}${isColor ? " collage-img-color" : ""}`}
            style={{
              zIndex: isForeground ? 2 : 1,
              filter: isColor
                ? "none"
                : "grayscale(1) contrast(1.1) brightness(0.95)",
              opacity: isForeground ? (isColor ? 1 : 0.95) : 0.5,
              transition: "all 2s cubic-bezier(.77,0,.18,1)",
              transform: isForeground
                ? "scale(1.1) translateY(-10px)"
                : "scale(1) translateY(0)"
            }}
          />
        );
      })}
    </div>
  );
};

export default CollageBackground;
