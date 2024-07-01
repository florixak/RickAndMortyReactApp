import { IoMdMale, IoMdFemale } from "react-icons/io";

export default function CharacterGender({ gender }) {
  const getStyle = () => gender === "Male" ? "text-blue-500" : "text-red-500";

  const getSymbol = () => (gender === "Male" ? <IoMdMale /> : <IoMdFemale />);

  if (!gender) return null;
  return (
    <p className="flex justify-center items-center">
      <span className={`ml-1 font-bold text-xl ${getStyle()}`}>{getSymbol()}</span>
    </p>
  );
}
