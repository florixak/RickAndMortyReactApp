export default function LocationID({ id }) {
  return (
    <p>
      <span className="font-semibold">ID:</span> {id || "Loading..."}
    </p>
  );
}
