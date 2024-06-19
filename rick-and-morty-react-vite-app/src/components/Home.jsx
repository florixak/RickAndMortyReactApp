import NavCard from "./NavCard";
import { GiCharacter } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-12">
      <h1 className="text-[48px]">
        Welcome To Website About Rick And Morty!
      </h1>
      <div className="flex flex-wrap w-full justify-center gap-20">
        <NavCard
          title="Characters"
          image={<GiCharacter size={180} />}
          navigateTo="/characters"
        />
        <NavCard
          title="Locations"
          image={<FaMapLocationDot size={180} />}
          navigateTo="/locations"
        />
        <NavCard
          title="Episodes"
          image={<MdVideoLibrary size={180} />}
          navigateTo="/episodes"
        />
      </div>
    </main>
  );
}
