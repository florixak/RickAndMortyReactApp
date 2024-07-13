export default function EpisodeAirDate({ air_date }) {
    return (
      <p>
        <span className="font-semibold">Air Data:</span> {air_date || "Loading..."}
      </p>
    );
  }
  