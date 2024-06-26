import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { EPISODES_URL as url, EPISODES_NAV_URL as navUrl } from "../../data";
import EpisodeDetailsSkeleton from "./EpisodeDetailsSkeleton";

export default function EpisodeDetails(id) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  id = useParams().id ? useParams().id : id;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          setData({});
          navigate(navUrl, { replace: true });
        });
    } else {
      navigate(navUrl, { replace: true });
    }
  }, [id]);

  const { name } = data;

  if (loading) {
    return <EpisodeDetailsSkeleton />;
  }

  return (
    <div className="w-[50%] flex flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">{name}</h1>
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
      </div>
    </div>
  );
}
