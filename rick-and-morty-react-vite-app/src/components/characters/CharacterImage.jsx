import DefaultCharacterImage from "../../assets/DefaultCharacterImage.png";

export default function CharacterImage({ name, image }) {
  return (
    <img
      className="rounded-3xl shadow-black shadow-md m-auto"
      width={300}
      height={300}
      src={image ? image : DefaultCharacterImage}
      alt={name ? `${name}'s image` : "Characters image"}
    />
  );
}
