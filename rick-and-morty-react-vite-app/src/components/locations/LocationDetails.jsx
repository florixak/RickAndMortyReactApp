import { useParams } from "react-router-dom";
import { LOCATIONS_URL as url } from "../../data.js";
import { useFetch } from "../../hooks/useFetch.js";

import LocationDetailsSkeleton from "./skeleton/LocationDetailsSkeleton.jsx";
import LocationName from "./information/LocationName.jsx";
import LocationID from "./information/LocationID.jsx";
import LocationType from "./information/LocationType.jsx";
import LocationDimension from "./information/LocationDimension.jsx";
import LocationResidentsNo from "./information/LocationResidentsNo.jsx";
import LocationResidents from "./information/LocationResidents.jsx";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";

export default function LocationDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useFetch({ id, url }, {});

  const { name, type, dimension, residents } = data[0] || {};

  if (isLoading) {
    return <LocationDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <Details>
      <div className="flex flex-col">
        <LocationName name={name} />
        <LocationID id={id} />
      </div>
      <div className="flex flex-col items-start justify-start gap-1">
        <LocationDimension dimension={dimension} />
        <LocationType type={type} />
        <LocationResidentsNo residents={residents} />
        <LocationResidents residents={residents} />
      </div>
    </Details>
  );
}
