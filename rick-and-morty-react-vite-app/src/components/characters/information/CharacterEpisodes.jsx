import { useNavigate } from "react-router-dom";
import { getEpisodeURL } from "../../../utils.js";

export default function CharacterEpisodes({ episode }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-2 max-w-[300px]">
      <span className="font-semibold">Episodes:</span>
      {episode &&
        episode.map((ep) => {
          const episodeNum = ep.match(/\/(\d+)$/)[1];
          return (
            <span
              onClick={() => navigate(getEpisodeURL(episodeNum))}
              key={ep}
              className="hover:cursor-pointer hover:underline"
            >
              {episodeNum}{episodeNum === episode.length ? "" : ","}
            </span>
          );
        })}
    </div>
  );
}
