export default function CharacterLocation({ location }) {
  if (!location) return null;
  return (
    <p>
      <span className="font-semibold">Last Known Location:</span> {location.name}
    </p>
  );
}
