export default function Character({ data }) {
  const statusStyle = () => {
    if (data.status === "Alive") return "text-green-400";
    else if (data.status === "Dead") return "text-red-400";
    else return "text-orange-400";
  };

  return (
    <div className="flex flex-col justify-center p-5 bg-slate-50 text-black rounded-3xl shadow-lg">
      <img className="rounded-3xl" src={data.image} alt="image" />
      <h1 className="text-xl">{data.name}</h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {data.id}</p>
        <p className={statusStyle()}>Status: {data.status}</p>
        <p>Species: {data.species}</p>
        <p>Gender: {data.gender}</p>
        <p>Location: {data.origin.name}</p>
      </div>
    </div>
  );
}
