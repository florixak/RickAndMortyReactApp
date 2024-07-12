import Nav from "./nav/Nav";
import { motion } from "framer-motion";

export default function Header() {
  
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="w-full h-[15vh] md:h-[20vh] flex justify-center bg-slate-800 border-[#97ce4c] border-b-2 rounded-b-[60px] md:rounded-b-[80px]"
    >
      <Nav />
    </motion.header>
  );
}
