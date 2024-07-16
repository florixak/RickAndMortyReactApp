import { motion } from "framer-motion";
import { SlideFromRight } from "../../motions";

export default function AnimatedImage({ image, alt }) {
  return (
    <motion.img
      variants={SlideFromRight(0.5, 0)}
      initial="hidden"
      whileInView="show"
      className="rounded-3xl shadow-black shadow-lg m-auto"
      src={image}
      alt={alt}
    />
  );
}
