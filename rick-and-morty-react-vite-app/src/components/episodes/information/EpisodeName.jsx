export default function EpisodeName({ name }) {
  return <h1 className="text-2xl font-bold">{name || "Loading..."}</h1>;
}
