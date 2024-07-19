import { useParams } from "react-router-dom";
import { EPISODES_URL as url, getCharacterURL } from "../../data.js";
import { useFetch } from "../../hooks/useFetch.js";

import EpisodeDetailsSkeleton from "./skeleton/EpisodeDetailsSkeleton";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";
import Detail from "../details/Detail.jsx";
import DetailsShowMore from "../details/DetailsShowMore.jsx";
import DetailTitle from "../details/DetailTitle.jsx";

export default function EpisodeDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch({ id, url }, {});

  const { name, air_date, episode, characters } = data[0] || {};

  if (isLoading) {
    return <EpisodeDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Details>
      <div className="flex flex-col text-center desktop:text-left">
        <DetailTitle>{name || "Loading..."}</DetailTitle>
        <Detail label="ID" value={id} />
      </div>
      <div className="flex flex-col items-start justify-start gap-1">
        <Detail label="Episode" value={episode} />
        <Detail label="Air Date" value={air_date} />
        <Detail
          label="No of characters"
          value={characters && characters.length}
        />
        <DetailsShowMore
          list={characters}
          listName="Characters"
          getURL={getCharacterURL}
        />
      </div>
    </Details>
  );
}
