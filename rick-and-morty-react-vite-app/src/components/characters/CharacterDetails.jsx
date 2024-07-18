import { useParams } from "react-router-dom";
import { CHARACTERS_URL as url, getEpisodeURL } from "../../data.js";

import CharacterTitle from "./information/CharacterTitle";
import CharacterImage from "./information/CharacterImage";
import CharacterDetailsSkeleton from "./skeleton/CharacterDetailsSkeleton";
import CharacterSpecies from "./information/CharacterSpecies";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";
import { useFetch } from "../../hooks/useFetch.js";
import Detail from "../details/Detail.jsx";
import DetailsShowMore from "../details/DetailsShowMore.jsx";

export default function CharacterDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch({ id, url }, {});

  const { image, name, status, species, gender, origin, location, episode } =
    data[0] || {};

  if (isLoading || !data) {
    return <CharacterDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Details>
      <CharacterImage image={image} name={name} />
      <div className="flex flex-col items-start justify-start gap-1">
        <CharacterTitle name={name} gender={gender} />
        <Detail label="ID" value={id} />
        <CharacterSpecies species={species} status={status} />
        <Detail label="Origin" value={origin && origin.name} />
        <Detail label="Location" value={location && location.name} />
        <DetailsShowMore list={episode} listName="Episodes" getURL={getEpisodeURL} />
      </div>
    </Details>
  );
}
