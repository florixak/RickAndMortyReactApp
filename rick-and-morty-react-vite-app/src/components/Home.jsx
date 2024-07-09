import NavCard from "./NavCard";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import {
  CHARACTERS_NAV_URL,
  LOCATIONS_NAV_URL,
  EPISODES_NAV_URL,
} from "../utils.js";

const ICON_SIZE = 200;

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className="text-[48px]">Welcome!</h1>
      <div className="w-full h-full md:h-[70vh] flex flex-col md:flex-row justify-center items-center gap-16">

        <NavCard
          title="Locations"
          icon={<FaMapLocationDot size={ICON_SIZE} />}
          navigateTo={LOCATIONS_NAV_URL}
        />

        <NavCard
          title="Characters"
          icon={<BsPersonLinesFill size={ICON_SIZE} />}
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
