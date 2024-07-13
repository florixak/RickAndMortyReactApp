import Card from "../Card";

export default function EpisodeCard({ data }) {

  const { id, name, air_date, episode } = data;

  return (
    <Card type={"episodes"} id={id || 0}>
      <h1 className="text-2xl font-bold">{name || "Loading..."}</h1>
      <div className="flex flex-col items-start justify-start text-secondary">
        <p>ID: {id || "Loading..."}</p>
        <p>Air Date: {air_date || "Loading..."}</p>
        <p>Episode: {episode || "Loading..."}</p>
      </div>
    </Card>
  );
}
