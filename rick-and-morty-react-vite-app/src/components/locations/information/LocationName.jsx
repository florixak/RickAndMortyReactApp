export default function LocationName({ name }) {
  return (
    <h1 className="text-2xl font-bold text-light-green">
      {name || "Loading..."}
    </h1>
  );
}
