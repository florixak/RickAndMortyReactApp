import { motion } from "framer-motion";
import { SlideToLeft, SlideToRight } from "../../motions";

export default function AnimatedTitle({ className, children, slideDirection }) {
  const variant =
    slideDirection === "toLeft" ? SlideToLeft(0.3) : SlideToRight(0.3);
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
}
