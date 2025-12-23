import React, { useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Background = () => {
  // 1. Mouse Tracking for Interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Move the large glows slightly based on mouse position
  const rotateX = useTransform(smoothY, [0, 1000], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1000], [-5, 5]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20, // Negative delay starts them mid-animation
    }));
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden"
    >
      {/* 2. Noise Texture Overlay (The "Premium" Look) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none brightness-100 contrast-150"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Structure filter='url(%23noiseFilter)'/%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E")` }}>
      </div>

      {/* 3. The Grid Layer */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 4. Small Drifting Light Objects */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-500/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 5. Interactive Glowing Orbs */}
      <motion.div
        style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ rotateX, rotateY }}
        className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-900/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -bottom-[20%] -right-[10%] h-[700px] w-[700px] rounded-full bg-indigo-900/20 blur-[120px]"
      />

      {/* 6. Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]" />
    </div>
  );
};

export default Background;