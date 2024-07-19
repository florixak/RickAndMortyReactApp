import { motion } from "framer-motion";
import { SlideToLeft } from "../../motions";

export default function AnimatedImage({ image, alt }) {
  return (
    <motion.img
      variants={SlideToLeft(0.3)}
      initial="hidden"
      whileInView="show"
      className="m-auto rounded-3xl shadow-lg shadow-black"
      src={image}
      alt={alt}
    />
  );
}
