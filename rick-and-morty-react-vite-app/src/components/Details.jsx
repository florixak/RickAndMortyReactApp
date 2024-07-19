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
      className="m-auto flex h-full w-full flex-col items-center justify-evenly gap-5 rounded-3xl bg-light-slate p-5 text-primary shadow-md shadow-black tablet:max-w-[75%] desktop:max-w-[35%] desktop:flex-row"
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
