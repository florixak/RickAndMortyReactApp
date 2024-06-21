import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { EPISODES_URL as url, EPISODES_NAV_URL as navUrl } from "../../data";

export default function Episode(id) {
  const [data, setData] = useState({});
  id = useParams().id ? useParams().id : id;
  const navigate = useNavigate();

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

  return (
    <div
      key={id}
      className="w-[50%] flex flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md"
    >
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">{name}</h1>
        <p>
          <span className="font-semibold">ID:</span> {id}
        </p>
      </div>
    </div>
  );
}
