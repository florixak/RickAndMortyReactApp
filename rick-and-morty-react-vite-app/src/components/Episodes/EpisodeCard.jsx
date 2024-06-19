import Card from "../Card";

export default function Episode({ data }) {

  const { id, name, air_date, episode } = data;

  return (
    <Card>
      <h1 className="text-xl font-bold">{name}</h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {id}</p>
        <p>Air Date: {air_date}</p>
        <p>Episode: {episode}</p>
      </div>
    </Card>
  );
}
