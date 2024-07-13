export default function EpisodeID({ id }) {
  return (
    <p>
      <span className="font-semibold">ID:</span> {id || "Loading..."}
    </p>
  );
}
