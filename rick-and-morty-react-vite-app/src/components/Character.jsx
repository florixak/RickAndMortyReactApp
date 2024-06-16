
export default function Character({data}) {
  return (
    <div>
      <img src={data.image} alt="image" />
      <h1>{data.name}</h1>
      <p>ID: {data.id}</p>
    </div>
  );
}
