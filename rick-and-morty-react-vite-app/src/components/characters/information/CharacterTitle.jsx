import CharacterGender from "./CharacterGender";
import DetailTitle from "../../details/DetailTitle";

export default function CharacterTitle({ name, gender }) {
  return (
    <div className="flex flex-row">
      <DetailTitle>{name || "Loading..."}</DetailTitle>
      <CharacterGender gender={gender} />
    </div>
  );
}
