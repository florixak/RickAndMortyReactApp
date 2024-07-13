export default function LocationDimension({ dimension }) {
    return (
      <p>
        <span className="font-semibold">Dimension:</span> {dimension || "Loading..."}
      </p>
    );
  }
  