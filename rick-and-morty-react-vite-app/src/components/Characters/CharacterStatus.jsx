export default function CharacterStatus({ status }) {
  const statusStyle = () => {
    if (status === "Alive") return "text-green-400";
    else if (status === "Dead") return "text-red-400";
    else return "text-orange-400";
  };

  return <span className={`${statusStyle()} font-bold text-xl items-center justify-center`}>•</span>;
}
