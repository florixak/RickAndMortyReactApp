import { GoDotFill } from "react-icons/go";

export default function CharacterStatus({ status }) {
  const statusStyle = () => {
    if (status === "Alive") return "text-green-400";
    else if (status === "Dead") return "text-red-600";
    else return "text-orange-400";
  };
  if (!status) return null;
  return (
    <span className={`${statusStyle()} ml-1 font-bold text-xl`}>
      <GoDotFill />
    </span>
  );
}
