import { IoMdMale, IoMdFemale } from "react-icons/io";

export default function CharacterGender({ gender }) {
  if (!gender) return null;
  const getStyle = () => (gender === "Male" ? "text-blue-500" : "text-red-500");
  const getSymbol = () => (gender === "Male" ? <IoMdMale /> : <IoMdFemale />);

  return (
    <p className="flex items-center justify-center">
      <span className={`ml-1 text-xl font-bold ${getStyle()}`}>
        {getSymbol()}
      </span>
    </p>
  );
}
