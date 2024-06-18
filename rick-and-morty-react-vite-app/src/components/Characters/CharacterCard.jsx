import Card from "../Card";

export default function CharacterCard({ data }) {

  const { image, name, id, status, species, gender, origin, location } = data;

  const statusStyle = () => {
    if (data.status === "Alive") return "text-green-400";
    else if (data.status === "Dead") return "text-red-400";
    else return "text-orange-400";
  };

  return (
    <Card>
      <img className="rounded-3xl" src={image} alt="image" />
      <h1 className="text-xl">{name}</h1>
      <div className="flex flex-col items-start justify-start">
        <p>ID: {id}</p>
        <p className={statusStyle()}>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        {origin && <p>Origin: {origin.name}</p>}
        {location && <p>Location: {location.name}</p>}
      </div>
    </Card>
  );
}
