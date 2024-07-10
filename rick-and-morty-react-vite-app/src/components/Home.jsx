import RickAndMortyTVImage from "../assets/RickAndMortyTV.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full mt-[50px] md:h-[100%] flex flex-col items-center gap-16">
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
        className="max-w-[100vh] flex flex-col sm:flex-row p-10 gap-3 mb-16 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-lg"
      >
        <div className="flex flex-col">
          <h1 className="text-[25px] font-bold">About show</h1>
          <p>
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's
            nighttime programming block Adult Swim. The series follows the
            misadventures of Rick Sanchez, a cynical mad scientist, and his
            good-hearted but fretful grandson Morty Smith, who split their time
            between domestic life and interdimensional adventures that take
            place across an infinite number of realities, often traveling to
            other planets and dimensions through portals and on Rick's flying
            saucer. The general concept of Rick and Morty relies on two
            conflicting scenarios: domestic family drama and a misanthropic
            grandfather dragging his grandson into hijinks.
          </p>
        </div>
        <img
          width={240}
          className="rounded-3xl shadow-black shadow-lg m-auto"
          src={RickAndMortyTVImage}
          alt=""
        />
      </motion.div>
    </main>
  );
}
