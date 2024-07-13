import Card from "../Card";
import LocationID from "./information/LocationID";
import LocationType from "./information/LocationType";
import LocationDimension from "./information/LocationDimension";
import LocationName from "./information/LocationName";

export default function LocationCard({ data }) {
  const { id, name, type, dimension } = data;
  return (
    <Card type="locations" id={id || 0}>
      <LocationName name={name} />
      <div className="flex flex-col items-start justify-start text-secondary">
        <LocationID id={id} />
        <LocationType type={type} />
        <LocationDimension dimension={dimension} />
      </div>
    </Card>
  );
}
