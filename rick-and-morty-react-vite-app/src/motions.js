export const ShowIn = (duration, delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: delay,
    },
  },
});

export const ScaleIn = (duration, delay) => ({
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration,
      delay: delay,
    },
  },
});

export const SlideFromLeft = (duration, delay) => ({
  hidden: { opacity: 0, x: "-4%" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      delay: delay,
    },
  },
});

export const SlideFromRight = (duration, delay) => ({
  hidden: { 
    opacity: 0, 
    x: "5%" 
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      delay: delay,
    },
  },
});
