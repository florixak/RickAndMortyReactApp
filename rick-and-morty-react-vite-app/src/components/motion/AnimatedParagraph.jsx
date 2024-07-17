import { motion } from "framer-motion";
import { SlideToLeft } from "../../motions";

export default function AnimatedParagraph({ children }) {
  return (
    <motion.p
      variants={SlideToLeft(0.3)}
      initial="hidden"
      whileInView="show"
      className="text-[17px] bg-dark-slate p-5 rounded-3xl"
    >
      {children}
    </motion.p>
  );
}
