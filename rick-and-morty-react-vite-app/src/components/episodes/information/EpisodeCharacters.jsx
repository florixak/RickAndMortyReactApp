import { getCharacterURL } from "../../../data.js";
import DetailsShowMore from "../../DetailsShowMore.jsx";

export default function EpisodeCharacters({ characters }) {
  return <DetailsShowMore list={characters} listName="Characters" getURL={getCharacterURL} />;
}
