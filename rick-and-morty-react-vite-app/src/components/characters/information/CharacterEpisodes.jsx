import { getEpisodeURL } from "../../../data.js";
import DetailsShowMore from "../../DetailsShowMore.jsx";

export default function CharacterEpisodes({ episode }) {
  return <DetailsShowMore list={episode} listName="Episodes" getURL={getEpisodeURL} />;
}
