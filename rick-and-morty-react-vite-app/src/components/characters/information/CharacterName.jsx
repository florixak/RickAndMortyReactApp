export default function CharacterName({ name }) {
  if (!name) return null;
  return <span>{name}</span>;
}
