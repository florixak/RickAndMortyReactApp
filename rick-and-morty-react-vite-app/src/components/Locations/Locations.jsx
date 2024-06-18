import { LOCATIONS_URL } from "../../data";
import CardList from "../CardList";

export default function Locations() {
  return <CardList title="Locations" url={LOCATIONS_URL} type="locations" />;
}
