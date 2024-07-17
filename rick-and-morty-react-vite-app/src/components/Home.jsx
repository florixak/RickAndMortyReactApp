import { motion } from "framer-motion";
import AnimatedSection from "./motion/AnimatedSection";
import { SlideToRight, SlideToLeft } from "../motions";
import AnimatedTitle from "./motion/AnimatedTitle";
import AnimatedParagraph from "./motion/AnimatedParagraph";
import { MainCharacters } from "../data";

const AdditionalButtons = [
  {
    id: 1,
    link: "https://www.adultswim.com/videos/rick-and-morty",
    text: "WATCH NOW",
    delay: 0.5,
  },
  {
    id: 2,
    link: "https://en.wikipedia.org/wiki/Rick_and_Morty",
    text: "READ MORE",
    delay: 1,
  },
];

const ButtonLink = ({ link, children, delay }) => (
  <motion.a
    variants={SlideToRight(delay)}
    initial="hidden"
    whileInView="show"
    className="p-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md"
    href={link}
    target="_blank"
  >
    {children}
  </motion.a>
);

const MainCharacterInfo = ({ id, name, image, description }) => {
  const isEven = id % 2 === 1;
  return (
    <motion.div
      variants={isEven ? SlideToLeft(0.3) : SlideToRight(0.3)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col md:flex-row gap-5 p-10 m-3 sm:m-0 items-center justify-center md:even:flex-row-reverse"
    >
      <div className="bg-dark-slate w-auto p-1 rounded-3xl">
        <img
          width={320}
          className="rounded-3xl shadow-black shadow-lg m-auto"
          src={image}
          alt={name ? `${name}'s image` : "Character's image"}
        />
      </div>

      <div className="flex flex-col w-[120%] md:w-full bg-dark-slate rounded-3xl p-4 md:p-5">
        <h2 className="text-[20px] font-bold">{name}</h2>
        <p className="text-[17px] text-secondary-text">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="w-full mt-[50px] md:h-[100%] flex flex-col justify-center items-center gap-16 text-primary">
      <section className="max-w-[950px] flex flex-col gap-5 md:gap-36 mb-16 items-center justify-center">
        {/* About Rick and Morty */}
        <AnimatedSection className="w-auto flex flex-col p-10 gap-5 bg-light-slate rounded-3xl shadow-black shadow-lg">
          <AnimatedTitle
            className="text-[25px] font-bold"
            slideDirection="toLeft"
          >
            About show
          </AnimatedTitle>
          <section className="flex flex-col gap-5">
            <AnimatedParagraph>
              Rick and Morty is a popular American animated series for adults
              created by Dan Harmon and Justin Roiland. The first episode aired
              on Adult Swim, the nighttime programming block of Cartoon Network,
              in December 2013. The series combines elements of sci-fi, dark
              comedy, and family drama, quickly gaining a large fan base thanks
              to its unique style of humor, complex storylines, and deep
              philosophical questions.
            </AnimatedParagraph>
            <AnimatedParagraph>
              Follows the adventures of Rick and Morty as they travel across
              different dimensions and timelines. The series is known for its
              intricate plots, often exploring deep philosophical questions such
              as the meaning of existence, free will, and the relativity of
              morality. The humor is often dark, sarcastic, and based on absurd
              situations and characters.
            </AnimatedParagraph>
          </section>
        </AnimatedSection>

        {/* Main Characters */}
        <AnimatedSection className="flex flex-col bg-light-slate rounded-3xl shadow-black shadow-lg">
          <AnimatedTitle
            className="text-[25px] font-bold text-right mt-10 mr-10"
            slideDirection="toRight"
          >
            Main Characters
          </AnimatedTitle>
          <section className="flex flex-wrap items-center justify-center">
            {MainCharacters.map((character) => {
              return (
                <MainCharacterInfo
                  key={character.name}
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  description={character.description}
                />
              );
            })}
          </section>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection className="flex flex-col p-10 gap-5 bg-light-slate rounded-3xl shadow-black shadow-lg">
          <AnimatedTitle
            className="text-[25px] font-bold"
            slideDirection="toLeft"
          >
            Conclusion
          </AnimatedTitle>
          <AnimatedParagraph>
            It is more than just an animated series, it is a phenomenon that
            brings viewers incredible adventures and deep thoughts, all wrapped
            in a unique mix of humor and dramatic moments. It is a series that
            makes viewers think and laugh at the same time, which is why it has
            gained such dedicated fans worldwide.
          </AnimatedParagraph>
        </AnimatedSection>

        {/* Watch now and Read more buttons */}
        <AnimatedSection className="w-full flex justify-center gap-10">
          {AdditionalButtons.map((button) => {
            return (
              <ButtonLink
                key={button.id}
                link={button.link}
                delay={button.delay}
              >
                {button.text}
              </ButtonLink>
            );
          })}
        </AnimatedSection>
      </section>
    </main>
  );
}
