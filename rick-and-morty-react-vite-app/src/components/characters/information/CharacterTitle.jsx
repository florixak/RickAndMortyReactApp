import CharacterName from "./CharacterName";
import CharacterGender from "./CharacterGender";

export default function CharacterTitle({ name, gender }) {
  return (
    <h1 className="text-2xl font-bold flex flex-row">
      <CharacterName name={name} />
      <CharacterGender gender={gender} />
    </h1>
  );
}
