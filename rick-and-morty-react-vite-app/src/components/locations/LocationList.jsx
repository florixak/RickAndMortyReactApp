import { LOCATIONS_URL } from "../../data.js";
import CardList from "../CardList";

export default function LocationList() {
  return <CardList title="Locations" url={LOCATIONS_URL} type="locations" />;
}
