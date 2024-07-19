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
      variants={ShowIn(0.2)}
      initial="hidden"
      whileInView="show"
      className="absolute bottom-0 flex h-[2.5rem] w-full flex-col items-center justify-center rounded-t-[60px] border-t-2 border-light-green bg-dark-slate p-10 md:flex-row md:items-start md:justify-evenly md:rounded-t-[80px] md:pt-[10px]"
    >
      {FooterList.map((item) => {
        return (
          <motion.p
            variants={ScaleIn(0.5)}
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
