import { motion } from "framer-motion";
import Link from "./Link";

const slideRight = (delay) => ({
  hidden: {
    opacity: 0,
    translateX: "-100%",
  },
  show: {
    opacity: 1,
    translateX: 0,
    transition: {
      duration: 0.4,
      delay: delay,
    },
  },
});

export default function MobileNav({ navLinks, toggleNav }) {
  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      animate="show"
      className="absolute left-[0] top-[0] z-40 h-full w-full bg-dark-slate"
    >
      <ul className="mt-[30%] flex flex-col items-center justify-center gap-4 text-[30px]">
        {navLinks.map(({ to, label }) => (
          <motion.li
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            key={label}
            onClick={toggleNav}
          >
            <Link to={to}>{label}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
