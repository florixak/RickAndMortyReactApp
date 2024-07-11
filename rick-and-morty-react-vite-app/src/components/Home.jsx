import RickAndMortyTVImage from "../assets/RickAndMortyTV.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full mt-[50px] md:h-[100%] flex flex-col justify-center items-center gap-16">
      <div className="w-full flex justify-center gap-10">
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md"
          href="/"
        >
          WATCH NOW
        </motion.a>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md"
          href="/"
        >
          READ MORE
        </motion.a>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="flex flex-col gap-5 mb-16 items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="max-w-[70vh] flex flex-col p-10 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-lg">
            <h1 className="text-[25px] font-bold">About show</h1>
            <p className="text-justify">
              "Rick and Morty" is a popular American animated series for adults
              created by Dan Harmon and Justin Roiland. The first episode aired
              on Adult Swim, the nighttime programming block of Cartoon Network,
              in December 2013. The series combines elements of sci-fi, dark
              comedy, and family drama, quickly gaining a large fan base thanks
              to its unique style of humor, complex storylines, and deep
              philosophical questions.
            </p>
          </div>
          <div className="w-[40vh] flex flex-col gap-3 text-center p-10 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-lg">
            <img
              width={240}
              className="rounded-3xl shadow-black shadow-lg m-auto"
              src={RickAndMortyTVImage}
              alt=""
            />
            <a
              className="text-[15px]"
              href="https://www.imdb.com/title/tt2861424/mediaviewer/rm209331968/?ref_=tt_ov_i"
              target="_blank"
            >
              Image from IMDb
            </a>
          </div>
        </div>
        <div className="max-w-[113vh] flex flex-col p-10 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-lg">
          <h1 className="text-[25px] font-bold">Main Characters</h1>
          
        </div>
      </motion.div>
    </main>
  );
}
