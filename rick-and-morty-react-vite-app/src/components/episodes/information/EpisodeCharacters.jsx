import { useNavigate } from "react-router-dom";
import { getCharacterURL } from "../../../data.js";

export default function EpisodeCharacters({ characters }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-2 max-w-[350px]">
      <span className="font-semibold">Characters:</span>
      {characters &&
        characters.map((ch, index) => {
          const characterId = ch.match(/\/(\d+)$/)[1];
          return (
            <span
              onClick={() => navigate(getCharacterURL(characterId))}
              key={ch}
              className="hover:cursor-pointer hover:underline"
            >
              {characterId}
              {index < characters.length - 1 ? "," : ""}
            </span>
          );
        })}
    </div>
  );
}
