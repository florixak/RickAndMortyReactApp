import { useParams } from "react-router-dom";
import { EPISODES_URL as url } from "../../utils.js";
import { useFetch } from "../../hooks/useFetch.js";

import EpisodeDetailsSkeleton from "./skeleton/EpisodeDetailsSkeleton";
import EpisodeAirDate from "./information/EpisodeAirDate";
import EpisodeID from "./information/EpisodeID";
import EpisodeName from "./information/EpisodeName";
import EpisodeOrder from "./information/EpisodeOrder";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";

export default function EpisodeDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch({ id, url }, {});

  const { name, air_date, episode } = data[0] || {};

  if (isLoading) {
    return <EpisodeDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Details>
      <div className="flex flex-col">
        <EpisodeName name={name} />
        <div className="flex flex-col items-start justify-start">
          <EpisodeID id={id} />
          <EpisodeAirDate air_date={air_date} />
          <EpisodeOrder episode={episode} />
        </div>
      </div>
    </Details>
  );
}
