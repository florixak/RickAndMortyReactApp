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
  }
})

export default function MobileNav({ navLinks, toggleNav }) {
  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      animate="show"
      className="w-full h-full absolute left-[0] top-[0] z-40 bg-dark-slate"
    >
      <ul className="flex flex-col justify-center items-center gap-4 mt-[30%] text-[30px]">
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
