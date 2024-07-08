import { CHARACTERS_URL } from "../../utils.js";
import CardList from "../CardList";

export default function CharacterList() {
  return <CardList title="Characters" url={CHARACTERS_URL} type="characters" />;
}
