import { motion } from "framer-motion";
import { ShowIn, ScaleIn } from "../motions";

const FooterList = [
  {
    id: 1,
    text: "Created by ",
    link: "https://github.com/florixak",
    linkText: "Ondřej Pták",
  },
  {
    id: 2,
    text: "Using ",
    link: "https://rickandmortyapi.com/",
    linkText: "Rick And Morty API",
  },
  {
    id: 3,
    text: "Check out ",
    link: "https://github.com/florixak/RickAndMortyReactApp",
    linkText: "GitHub repository",
  },
];

export default function Footer() {
  return (
    <motion.footer
      variants={ShowIn(0.8, 0.3)}
      initial="hidden"
      whileInView="show"
      className="absolute w-full bottom-0 h-[2.5rem] flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start p-10 md:p-10 md:pt-[10px] bg-dark-slate border-light-green border-t-2 rounded-t-[60px] md:rounded-t-[80px]"
    >
      {FooterList.map((item) => {
        return (
          <motion.p
            variants={ScaleIn(0.8, 0.5)}
            initial="hidden"
            whileInView="show"
            key={item.id}
          >
            {item.text}
            <a className="font-semibold" href={item.link} target="_blank">
              {item.linkText}
            </a>
          </motion.p>
        );
      })}
    </motion.footer>
  );
}
