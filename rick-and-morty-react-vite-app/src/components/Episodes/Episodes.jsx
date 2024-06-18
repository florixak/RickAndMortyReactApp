import { EPISODES_URL } from "../../data";
import CardList from "../CardList";

export default function Episodes() {
  return <CardList title="Episodes" url={EPISODES_URL} type="episodes" />;
}
