import Card from "../Card";

export default function LocationCard({ data }) {
  const { id, name, type, dimension } = data;
  return (
    <Card type="locations" id={id || 0}>
      <h1 className="text-xl font-bold">{name || "Loading..."}</h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {id || "Loading..."}</p>
        <p>Type: {type || "Loading..."}</p>
        <p>Dimension: {dimension || "Loading..."}</p>
      </div>
    </Card>
  );
}
