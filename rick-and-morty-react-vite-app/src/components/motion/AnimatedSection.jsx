import { motion } from "framer-motion";
import { ShowIn } from "../../motions";

export default function AnimatedSection({ className, children }) {
  return (
    <motion.section
      variants={ShowIn(0.3)}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {children}
    </motion.section>
  );
}
