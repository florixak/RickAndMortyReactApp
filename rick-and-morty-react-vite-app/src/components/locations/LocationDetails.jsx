import { useParams } from "react-router-dom";
import { LOCATIONS_URL as url } from "../../utils.js";

import LocationDetailsSkeleton from "./skeleton/LocationDetailsSkeleton.jsx";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";
import { useFetch } from "../../hooks/useFetch.js";

export default function LocationDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch({ id, url }, {});

  const { name, type, dimension } = data[0] || {};

  if (isLoading) {
    return <LocationDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Details>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{name || "Loading..."}</h1>
        <div className="flex flex-col items-start justify-start">
          <p>ID: {id || "Loading..."}</p>
          <p>Type: {type || "Loading..."}</p>
          <p>Dimension: {dimension || "Loading..."}</p>
        </div>
      </div>
    </Details>
  );
}
