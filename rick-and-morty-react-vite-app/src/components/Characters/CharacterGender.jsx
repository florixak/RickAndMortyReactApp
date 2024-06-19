import { IoMdMale, IoMdFemale } from "react-icons/io";

export default function CharacterGender({ gender }) {
  const symbol = () => {
    return gender === "Male" ? <IoMdMale /> : <IoMdFemale />;
  };

  return (
    <span className={`ml-1 font-bold text-xl`}>
      {symbol()}
    </span>
  );
}
