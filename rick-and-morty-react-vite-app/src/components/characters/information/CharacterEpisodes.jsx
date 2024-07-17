import { useNavigate } from "react-router-dom";
import { getEpisodeURL } from "../../../data.js";

export default function CharacterEpisodes({ episode }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-2 max-w-[350px]">
      <span className="font-semibold">Episodes:</span>
      {episode &&
        episode.map((ep, index) => {
          const episodeNum = ep.match(/\/(\d+)$/)[1];
          return (
            <span
              onClick={() => navigate(getEpisodeURL(episodeNum))}
              key={ep}
              className="hover:cursor-pointer hover:underline"
            >
              {episodeNum}{index < episode.length - 1 ? "," : ""}
            </span>
          );
        })}
    </div>
  );
}
