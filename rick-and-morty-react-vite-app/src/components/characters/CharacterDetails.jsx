import { useParams } from "react-router-dom";
import { CHARACTERS_URL as url } from "../../utils.js";

import CharacterTitle from "./information/CharacterTitle";
import CharacterStatus from "./information/CharacterStatus";
import CharacterImage from "./information/CharacterImage";
import CharacterDetailsSkeleton from "./skeleton/CharacterDetailsSkeleton";
import CharacterOrigin from "./information/CharacterOrigin";
import CharacterSpecies from "./information/CharacterSpecies";
import CharacterLocation from "./information/CharacterLocation";
import CharacterID from "./information/CharacterID";
import CharacterEpisodes from "./information/CharacterEpisodes";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";
import { useFetch } from "../../hooks/useFetch.js";

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
      <div className="flex flex-col items-start justify-start">
        <CharacterTitle name={name} gender={gender} />
        <CharacterID id={id} />
        <CharacterStatus status={status} />
        <CharacterSpecies species={species} />
        <CharacterOrigin origin={origin} />
        <CharacterLocation location={location} />
        <CharacterEpisodes episode={episode} />
      </div>
    </Details>
  );
}
