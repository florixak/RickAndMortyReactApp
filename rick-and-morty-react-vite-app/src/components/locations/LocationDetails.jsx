import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  LOCATIONS_URL as url,
  LOCATIONS_NAV_URL as navUrl,
} from "../../utils.js";

import LocationDetailsSkeleton from "./skeleton/LocationDetailsSkeleton.jsx";
import Error from "../errors/Error.jsx";
import Details from "../Details.jsx";

export default function LocationDetails() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let timer = null;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/${id}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError({ message: "Failed to fetch data." });
      } finally {
        timer = setTimeout(() => setLoading(false), 1500);
      }
    };

    if (id) {
      fetchData();
    } else {
      navigate(navUrl, { replace: true });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [id, navigate]);

  const { name, type, dimension } = data;

  if (loading || !data) {
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
