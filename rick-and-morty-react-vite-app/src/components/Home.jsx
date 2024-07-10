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
    <main className="w-full mt-[50px] md:h-[50vh] flex flex-col items-center gap-16">
      <div className="w-full flex justify-center gap-10">
        <h1>WATCH NOW</h1>
        <h1>READ MORE</h1>
      </div>
      <div>
        <h1>The newest</h1>
      </div>
    </main>
  );
}
