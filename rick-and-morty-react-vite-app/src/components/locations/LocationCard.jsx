import Card from "../Card";
import Detail from "../details/Detail";
import DetailTitle from "../details/DetailTitle";
import LocationCardSkeleton from "./skeleton/LocationCardSkeleton";

export default function LocationCard({ data, isLoading }) {
  const { id, name, type, dimension } = data;

  if (isLoading || !data) {
    return <LocationCardSkeleton />;
  }

  return (
    <Card type="locations" id={id || 0}>
      <DetailTitle>{name || "Loading..."}</DetailTitle>
      <div className="flex flex-col items-start justify-start text-secondary">
        <Detail label="ID" value={id} />
        <Detail label="Type" value={type} />
        <Detail label="Dimension" value={dimension} />
      </div>
    </Card>
  );
}
