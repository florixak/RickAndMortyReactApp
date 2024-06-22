import NavCard from "./NavCard";
import { GiCharacter } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import { CHARACTERS_NAV_URL, LOCATIONS_NAV_URL, EPISODES_NAV_URL } from "../data";

export default function Home() {

  return (
    <main className="w-full flex flex-col justify-center items-center gap-12">
      <h1 className="text-[48px]">
        Welcome!
      </h1>
      <div className="flex flex-wrap w-full justify-center gap-20">
        <NavCard
          title="Characters"
          image={<GiCharacter size={200} />}
          navigateTo={CHARACTERS_NAV_URL}
        />
        <NavCard
          title="Locations"
          image={<FaMapLocationDot size={200} />}
          navigateTo={LOCATIONS_NAV_URL}
        />
        <NavCard
          title="Episodes"
          image={<MdVideoLibrary size={200} />}
          navigateTo={EPISODES_NAV_URL}
        />
      </div>
    </main>
  );
}
