import { motion } from "framer-motion";
import { SlideToLeft } from "../../motions";

export default function AnimatedImage({ image, alt }) {
  return (
    <motion.img
      variants={SlideToLeft(0.3)}
      initial="hidden"
      whileInView="show"
      className="rounded-3xl shadow-black shadow-lg m-auto"
      src={image}
      alt={alt}
    />
  );
}
