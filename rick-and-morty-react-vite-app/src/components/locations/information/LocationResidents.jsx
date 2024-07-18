import { getCharacterURL } from "../../../data.js";
import DetailsShowMore from "../../DetailsShowMore.jsx";

export default function LocationResidents({ residents }) {
  return <DetailsShowMore list={residents} listName="Residents" getURL={getCharacterURL} />;
}
