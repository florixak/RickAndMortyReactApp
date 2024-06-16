
export default function Character({data}) {
  return (
    <div className="flex flex-col items-center p-5 bg-zinc-100-100 rounded-xl shadow-lg">
      <img src={data.image} alt="image" />
      <h1 className="text-xl">{data.name}</h1>
      <p>ID: {data.id}</p>
    </div>
  );
}
