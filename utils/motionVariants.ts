export default {
  // Slide from left
  slideLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  // Slide from right
  slideRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
  // Slide from top
  slideUp: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  },
  // Fade In
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  // Fade In from top
  fadeUp: (y = -20) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y },
  }),

  fadeDown: (y = 20) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y },
  }),

  // Fade In from left
  fadeLeft: (x = -20) => ({
    initial: { opacity: 0, x: -x },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -x },
  }),
  // Fade In from right
  fadeRight: (x = 20) => ({
    initial: { opacity: 0, x },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x },
  }),
  // Zoom
  zoom: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0 },
  },
};

// FadeIn motion
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
