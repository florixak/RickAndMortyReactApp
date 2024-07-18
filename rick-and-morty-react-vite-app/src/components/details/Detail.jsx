export default function Detail({ label, value }) {
  if (!value) return null;
  return (
    <p>
      <span className="font-semibold">{label}:</span> {value || "Loading..."}
    </p>
  );
}