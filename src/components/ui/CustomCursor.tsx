import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Use springs for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const dotX = useSpring(0, springConfig);
  const dotY = useSpring(0, springConfig);

  const outlineX = useSpring(0, { ...springConfig, damping: 35, stiffness: 400 });
  const outlineY = useSpring(0, { ...springConfig, damping: 35, stiffness: 400 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Update spring values for smoother movement
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      outlineX.set(e.clientX);
      outlineY.set(e.clientY);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(Boolean(isClickable));
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [dotX, dotY, outlineX, outlineY]);

  // Don't render on server-side
  if (typeof window === 'undefined') return null;

  // Don't render on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorOutlineRef}
        className={`custom-cursor cursor-outline ${isPointer ? 'is-pointer' : ''}`}
        style={{
          x: outlineX,
          y: outlineY,
          opacity: isHidden ? 0 : 1
        }}
      />

      {/* Inner dot */}
      <motion.div
        ref={cursorDotRef}
        className={`custom-cursor cursor-dot ${isPointer ? 'is-pointer' : ''}`}
        style={{
          x: dotX,
          y: dotY,
          opacity: isHidden ? 0 : 1
        }}
      />
    </>
  );
};

export default CustomCursor;

