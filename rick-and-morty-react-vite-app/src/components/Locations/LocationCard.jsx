import Card from "../Card";

export default function Location({ data }) {
    const { id, name, type, dimension } = data;
  return (
    <Card>
      <h1 className="text-xl font-bold">{name}</h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {id}</p>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </div>
    </Card>
  );
}
