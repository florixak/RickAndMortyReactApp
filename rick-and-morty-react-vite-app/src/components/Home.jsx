import { motion } from "framer-motion";
import RickAndMortyTVImage from "../assets/RickAndMortyTV.jpg";
import AnimatedSection from "./motion/AnimatedSection";
import { SlideFromLeft, SlideFromRight } from "../motions";
import AnimatedTitle from "./motion/AnimatedTitle";
import AnimatedParagraph from "./motion/AnimatedParagraph";
import AnimatedImage from "./motion/AnimatedImage";

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

const MainCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    description:
      "Rick is a brilliant but extremely irresponsible scientist who often drinks alcohol and has a cynical outlook on life. His behavior is impulsive and frequently puts himself and others in danger due to his experiments and adventures. Despite having a close relationship with his grandson Morty, his egocentrism and recklessness often complicate their lives.",
  },
  {
    id: 2,
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    description:
      "Morty is Rick's fourteen-year-old grandson who is often reluctantly dragged into his grandfather's crazy adventures. He is much more emotional and compassionate than Rick, which often leads to conflicts between them. Morty is also frequently the victim of Rick's experiments and dangerous missions, making him a often stressed and confused teenager.",
  },
  {
    id: 3,
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    description:
      "Summer is Morty's seventeen-year-old sister who is much more confident and assertive than her brother. She often tries to get involved in Rick's adventures and prove her worth. She has a complicated relationship with her family but is loyal and willing to help when needed.",
  },
  {
    id: 4,
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    description:
      "Beth is Rick's daughter and the mother of Morty and Summer. She works as a veterinarian and often tries to cope with Rick's presence in her household. She is very ambitious and has a complex of inferiority, partly due to her father. Her marriage to Jerry is often strained, but she tries to keep the family together.",
  },
  {
    id: 5,
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    description:
      "Jerry is Beth's husband and the father of Morty and Summer. He is unemployed and often insecure about his role in the family. He tends to be naive and easily manipulated, which often makes him the target of Rick's mockery. Despite this, he tries to be a good father and husband, even though it doesn't always work out.",
  },
];

const ButtonLink = ({ link, children, delay }) => (
  <motion.a
    variants={SlideFromLeft(0.5, delay)}
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
      variants={isEven ? SlideFromRight(1, 0.3) : SlideFromLeft(1, 0.3)}
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
      <section className="max-w-[1050px] flex flex-col gap-5 md:gap-36 mb-16 items-center justify-center">
        {/* Container of About and Image */}
        <section className="flex flex-col lg:flex-row gap-5 h-auto">
          {/* About Rick and Morty */}
          <AnimatedSection
            className="lg:max-w-[75vh] flex flex-col p-10 gap-5 bg-light-slate rounded-3xl shadow-black shadow-lg"
          >
            <AnimatedTitle
              className="text-[25px] font-bold"
              slideDirection="toLeft"
            >
              About show
            </AnimatedTitle>
            <section className="flex flex-col gap-5">
              <AnimatedParagraph>
                "Rick and Morty" is a popular American animated series for
                adults created by Dan Harmon and Justin Roiland. The first
                episode aired on Adult Swim, the nighttime programming block of
                Cartoon Network, in December 2013. The series combines elements
                of sci-fi, dark comedy, and family drama, quickly gaining a
                large fan base thanks to its unique style of humor, complex
                storylines, and deep philosophical questions.
              </AnimatedParagraph>
              <AnimatedParagraph>
                Follows the adventures of Rick and Morty as they travel across
                different dimensions and timelines. The series is known for its
                intricate plots, often exploring deep philosophical questions
                such as the meaning of existence, free will, and the relativity
                of morality. The humor is often dark, sarcastic, and based on
                absurd situations and characters.
              </AnimatedParagraph>
            </section>
          </AnimatedSection>

          {/* Image of Rick and Morty */}
          <AnimatedSection
            className="lg:w-[40vh] flex flex-col gap-3 items-center justify-center p-5 bg-light-slate rounded-3xl shadow-black shadow-lg"
          >
            <div className="w-auto bg-dark-background p-1 rounded-3xl">
              <AnimatedImage image={RickAndMortyTVImage} alt="Rick And Morty Image" />
            </div>

            <a
              className="text-[15px]"
              href="https://www.imdb.com/title/tt2861424/mediaviewer/rm209331968/?ref_=ext_shr_lnk"
              target="_blank"
            >
              Rick a Morty (2013)
            </a>
          </AnimatedSection>
        </section>

        {/* Main Characters */}
        <AnimatedSection
          className="flex flex-col bg-light-slate rounded-3xl shadow-black shadow-lg"
        >
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
