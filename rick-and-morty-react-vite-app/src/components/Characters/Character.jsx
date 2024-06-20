export default function Character({ data }) {
  const { image, name, id, status, species, gender, origin, location } = data;
  return <div>{name && name}</div>;
}
