import DefaultCharacterImage from "../../../assets/DefaultCharacterImage.png";

export default function CharacterImage({ name, image }) {
  return (
    <img
      className="m-auto rounded-3xl shadow-md shadow-black"
      width={300}
      height={300}
      src={image ? image : DefaultCharacterImage}
      alt={name ? `${name}'s image` : "Characters image"}
    />
  );
}
