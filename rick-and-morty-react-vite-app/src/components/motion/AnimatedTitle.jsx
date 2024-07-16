import { motion } from "framer-motion";
import { SlideFromRight, SlideFromLeft } from "../../motions";

export default function AnimatedTitle({ className, children, slideDirection }) {
    const variant =
      slideDirection === "toLeft"
        ? SlideFromRight(1, 0.3)
        : SlideFromLeft(1, 0.3);
    return (
      <motion.h1
        variants={variant}
        initial="hidden"
        whileInView="show"
        className={className}
      >
        {children}
      </motion.h1>
    );
  };