import { useState, useEffect } from 'react';

// Animated Background Component
export default function Background () {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
 const bubbleData = [
    { id: 1, size: 500, x: 10, y: 20, duration: 20 },
    { id: 2, size: 250, x: 70, y: 60, duration: 25 },
    { id: 3, size: 300, x: 30, y: 80, duration: 30 },
    { id: 4, size: 200, x: 80, y: 10, duration: 22 },
    { id: 5, size: 500, x: 50, y: 40, duration: 28 },
  ];
    setBubbles(bubbleData);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-30 animate-pulse"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animation: `float ${bubble.duration}s ease-in-out infinite`,
          }}
        />
      ))}
     
    </div>
  );
};