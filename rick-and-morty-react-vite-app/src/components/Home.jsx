import NavCard from "./NavCard";
import { GiCharacter } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import {
  CHARACTERS_NAV_URL,
  LOCATIONS_NAV_URL,
  EPISODES_NAV_URL,
} from "../data";

const ICON_SIZE = 200;

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-[48px]">Welcome!</h1>
      <div className="w-full h-[70vh] flex flex-row justify-center items-center gap-16">

        <NavCard
          title="Locations"
          icon={<FaMapLocationDot size={ICON_SIZE} />}
          navigateTo={LOCATIONS_NAV_URL}
        />

        <NavCard
          title="Characters"
          icon={<GiCharacter size={ICON_SIZE} />}
          navigateTo={CHARACTERS_NAV_URL}
        />

        <NavCard
          title="Episodes"
          icon={<MdVideoLibrary size={ICON_SIZE} />}
          navigateTo={EPISODES_NAV_URL}
        />
      </div>
    </main>
  );
}
