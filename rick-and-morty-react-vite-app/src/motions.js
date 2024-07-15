export const ShowIn = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
});

export const ScaleIn = (delay) => ({
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  });
