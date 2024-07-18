import { motion } from "framer-motion";
import { SlideToLeft } from "../motions";
// import { useNavigate } from "react-router-dom";

export default function Details({ children /*, type, id, isLoading*/ }) {

  return (
    <motion.div
      variants={SlideToLeft(0.5)}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-full sm:max-w-[75%] lg:max-w-[35%] flex flex-col xl:flex-row items-center justify-evenly m-auto p-5 gap-5 bg-light-slate text-primary rounded-3xl shadow-black shadow-md"
    >
      {/* <PagingButton
        type="previous"
        id={id}
        handleClick={() => navigate(`/${type}/${prevId}`)}
        isDisabled={isLoading}
      /> */}
      {children}
      {/* <PagingButton
        type="next"
        id={id}
        handleClick={() => navigate(`/${type}/${nextId}`)}
        isDisabled={isLoading}
      /> */}
    </motion.div>
  );
}
