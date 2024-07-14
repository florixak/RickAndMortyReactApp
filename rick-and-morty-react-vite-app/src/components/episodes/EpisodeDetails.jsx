import { useParams } from "react-router-dom";
import { EPISODES_URL as url } from "../../utils.js";

import EpisodeDetailsSkeleton from "./skeleton/EpisodeDetailsSkeleton";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";
import { useFetch } from "../../hooks/useFetch.js";

export default function EpisodeDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch({ id, url }, {});

  const { name } = data[0] || {};

  if (isLoading) {
    return <EpisodeDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Details>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">{name}</h1>
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
      </div>
    </Details>
  );
}
