import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import Wedding from './components/Wedding.js';

function App() {
  useEffect(() => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const colors = ['#FFB6C1', '#FFC0CB', '#FFF0F5', '#FFE4E1']; // tons florais

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
        scalar: 1.2,
        ticks: 200, 
        shapes: ['circle'], 
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
        scalar: 1.2,
        ticks: 200,
        shapes: ['circle'],
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);
  return <Wedding />;
}

export default App;
