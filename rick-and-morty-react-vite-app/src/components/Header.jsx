import { motion } from "framer-motion";
import Nav from "./nav/Nav";
import { ShowIn } from "../motions";

export default function Header() {
  return (
    <motion.header
      variants={ShowIn(0.8, 0.5)}
      initial="hidden"
      whileInView="show"
      className="w-full z-10 h-[15vh] md:h-[20vh] flex justify-center bg-dark-slate border-light-green border-b-2 rounded-b-[60px] md:rounded-b-[80px]"
    >
      <Nav />
    </motion.header>
  );
}
