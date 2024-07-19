import { useParams } from "react-router-dom";
import { LOCATIONS_URL as url, getCharacterURL } from "../../data.js";
import { useFetch } from "../../hooks/useFetch.js";

import LocationDetailsSkeleton from "./skeleton/LocationDetailsSkeleton.jsx";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";
import Detail from "../details/Detail.jsx";
import DetailsShowMore from "../details/DetailsShowMore.jsx";
import DetailTitle from "../details/DetailTitle.jsx";

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
      <div className="flex flex-col text-center desktop:text-left">
        <DetailTitle>{name || "Loading..."}</DetailTitle>
        <Detail label="ID" value={id} />
      </div>
      <div className="flex flex-col items-start justify-start gap-1">
        <Detail label="Dimension" value={dimension} />
        <Detail label="Type" value={type} />
        <Detail label="No of residents" value={residents && residents.length} />
        <DetailsShowMore
          list={residents}
          listName="Residents"
          getURL={getCharacterURL}
        />
      </div>
    </Details>
  );
}
