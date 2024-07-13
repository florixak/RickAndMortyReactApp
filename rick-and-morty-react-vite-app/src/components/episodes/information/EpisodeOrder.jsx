export default function EpisodeOrder({ episode }) {
    return (
      <p>
        <span className="font-semibold">Episode:</span> {episode || "Loading..."}
      </p>
    );
  }
  