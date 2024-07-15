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
