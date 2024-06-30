export default function CharacterLocation({ location }) {
  if (!location) return null;
  return (
    <p>
      <span className="font-semibold">Location:</span> {location.name}
    </p>
  );
}
