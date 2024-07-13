import RickAndMortyTVImage from "../assets/RickAndMortyTV.jpg";
import { motion } from "framer-motion";
import { MainCharacters } from "../utils";

const Link = ({ href, children }) => (
  <a
    className="p-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md"
    href={href}
    target="_blank"
  >
    {children}
  </a>
);

const AnimatedSectionInView = ({ className, children, delay }) => {
  return (
    <motion.section
      initial={{ opacity: 0 /*, scale: 0*/ }}
      whileInView={{ opacity: 1 /*, scale: 1*/ }}
      transition={{ duration: 0.8, delay: delay || 0 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const MainCharacterInfo = ({ name, image, description }) => {
  return (
    <motion.section
      initial={{ opacity: 0 /*, scale: 0*/ }}
      whileInView={{ opacity: 1 /*, scale: 1*/ }}
      transition={{ duration: 1, delay: 0.3 }}
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
        <p className="text-[20px] text-secondary-text">{description}</p>
      </div>
    </motion.section>
  );
};

const Paragraph = ({ children }) => {
  return <p className="text-[17px] bg-dark-slate p-5 rounded-3xl">{children}</p>;
};

export default function Home() {
  return (
    <main className="w-full mt-[50px] md:h-[100%] flex flex-col justify-center items-center gap-16 text-primary">
      <section className="max-w-[1050px] flex flex-col gap-36 mb-16 items-center justify-center">
        <section className="flex flex-col lg:flex-row gap-5 h-auto">
          {/* About story */}
          <AnimatedSectionInView
            className="max-w-[75vh] flex flex-col p-10 gap-5 bg-light-slate rounded-3xl shadow-black shadow-lg"
            delay={0.3}
          >
            <h1 className="text-[25px] font-bold">About show</h1>
            <section className="flex flex-col gap-5">
              <Paragraph>
                "Rick and Morty" is a popular American animated series for
                adults created by Dan Harmon and Justin Roiland. The first
                episode aired on Adult Swim, the nighttime programming block of
                Cartoon Network, in December 2013. The series combines elements
                of sci-fi, dark comedy, and family drama, quickly gaining a
                large fan base thanks to its unique style of humor, complex
                storylines, and deep philosophical questions.
              </Paragraph>
              <Paragraph>
                Follows the adventures of Rick and Morty as they travel across
                different dimensions and timelines. The series is known for its
                intricate plots, often exploring deep philosophical questions
                such as the meaning of existence, free will, and the relativity
                of morality. The humor is often dark, sarcastic, and based on
                absurd situations and characters.
              </Paragraph>
            </section>
          </AnimatedSectionInView>

          {/* Image of Rick and Morty */}
          <AnimatedSectionInView
            className="lg:w-[40vh] flex flex-col gap-3 items-center justify-center p-5 bg-light-slate rounded-3xl shadow-black shadow-lg"
            delay={0.3}
          >
            <div className="w-auto bg-dark-background p-1 rounded-3xl">
              <img
                className="rounded-3xl shadow-black shadow-lg m-auto"
                src={RickAndMortyTVImage}
                alt=""
              />
            </div>

            <a
              className="text-[15px]"
              href="https://www.imdb.com/title/tt2861424/mediaviewer/rm209331968/?ref_=ext_shr_lnk"
              target="_blank"
            >
              Image from IMDb
            </a>
          </AnimatedSectionInView>
        </section>

        {/* Main Characters */}
        <AnimatedSectionInView
          className="flex flex-col bg-light-slate rounded-3xl shadow-black shadow-lg"
          delay={0.3}
        >
          <h1 className="text-[25px] font-bold text-right mt-10 mr-10">Main Characters</h1>
          <section className="flex flex-wrap items-center justify-center">
            {MainCharacters.map((character) => {
              return (
                <MainCharacterInfo
                  key={character.name}
                  name={character.name}
                  image={character.image}
                  description={character.description}
                />
              );
            })}
          </section>
        </AnimatedSectionInView>

        {/* Conclusion */}
        <AnimatedSectionInView
          className="flex flex-col p-10 gap-5 bg-light-slate rounded-3xl shadow-black shadow-lg"
          delay={0.3}
        >
          <h1 className="text-[25px] font-bold">Conclusion</h1>
          <Paragraph>
            It is more than just an animated series, it is a phenomenon that
            brings viewers incredible adventures and deep thoughts, all wrapped
            in a unique mix of humor and dramatic moments. It is a series that
            makes viewers think and laugh at the same time, which is why it has
            gained such dedicated fans worldwide.
          </Paragraph>
        </AnimatedSectionInView>

        {/* Additional Buttons */}
        <AnimatedSectionInView
          className="w-full flex justify-center gap-10"
          delay={0.3}
        >
          <Link href="/">WATCH NOW</Link>
          <Link href="https://en.wikipedia.org/wiki/Rick_and_Morty">
            READ MORE
          </Link>
        </AnimatedSectionInView>
      </section>
    </main>
  );
}
