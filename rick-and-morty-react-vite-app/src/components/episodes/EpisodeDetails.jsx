import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  EPISODES_URL as url,
  EPISODES_NAV_URL as navUrl,
} from "../../utils.js";

import EpisodeDetailsSkeleton from "./skeleton/EpisodeDetailsSkeleton";
import Error from "../errors/Error.jsx";

export default function EpisodeDetails() {
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

  const { name } = data;

  if (loading) {
    return <EpisodeDetailsSkeleton />;
  }

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <div className="w-[40%] flex flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">{name}</h1>
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
      </div>
    </div>
  );
}
