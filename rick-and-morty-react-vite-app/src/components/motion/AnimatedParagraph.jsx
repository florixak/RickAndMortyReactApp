import { motion } from "framer-motion";
import { SlideToLeft } from "../../motions";

export default function AnimatedParagraph({ children }) {
  return (
    <motion.p
      variants={SlideToLeft(0.3)}
      initial="hidden"
      whileInView="show"
      className="rounded-3xl bg-dark-slate p-5 text-[17px]"
    >
      {children}
    </motion.p>
  );
}
