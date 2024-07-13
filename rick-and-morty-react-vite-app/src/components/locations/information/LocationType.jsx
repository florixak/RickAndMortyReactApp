export default function LocationType({ type }) {
    return (
      <p>
        <span className="font-semibold">Type:</span> {type || "Loading..."}
      </p>
    );
  }
  