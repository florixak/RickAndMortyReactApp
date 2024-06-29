import { EPISODES_URL } from "../../data";
import CardList from "../CardList";

export default function EpisodeList() {
  return <CardList title="Episodes" url={EPISODES_URL} type="episodes" />;
}
