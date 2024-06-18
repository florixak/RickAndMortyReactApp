import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PagingButton from "./PagingButton";
import CharacterCard from "./Characters/CharacterCard";
import LocationCard from "./Locations/LocationCard";
import EpisodeCard from "./Episodes/EpisodeCard";

const itemsPerPage = 12;

export default function CardList({ title, url, type }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [inputValue, setInputValue] = useState(-1);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Načtení specifického charakteru podle ID
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          setData([response.data]); // Nastavení dat na pole s jediným charakterem
          setInfo({ pages: 1 }); // Nastavení info pro jednu stránku
          console.log(response.data);
        })
        .catch((error) => {
          setData([]);
        });
    } else {
      // Načtení seznamu charakterů pro danou stránku
      axios.get(`${url}?page=${page}`).then((response) => {
        setData(response.data.results.slice(0, itemsPerPage));
        setInfo(response.data.info);
        console.log(response.data.results);
        console.log(response.data.info);
      });
    }
  }, [page, url, id]); // přidání `id` do závislostí useEffect

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      navigate(`/${type}/${inputValue}`);
    } else {
      navigate(`/${type}`);
    }
  };

  const setNextPage = () => {
    setPage((prevPage) => {
      if (id) return page;
      if (prevPage === info.pages) return 1;
      return prevPage + 1;
    });
  };
  const setPreviousPage = () => {
    setPage((prevPage) => {
      if (id) return page;
      if (prevPage === 1) return info.pages;
      return prevPage - 1;
    });
  };

  const filteredData = id
    ? data.filter((character) => character.id === parseInt(id))
    : data;

  return (
    <div className="w-[90%] h-full flex justify-center items-center gap-5 flex-col">
      <h1>{title}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="text-center rounded-lg p-2 text-black w-[250px]"
          type="number"
          min={1}
          max={info.count}
          placeholder="Specify id"
          value={inputValue > 0 ? inputValue : ""}
          onChange={handleInputValue}
        />
        <button className="hidden" type="submit">
          Search
        </button>
      </form>
      <div
        className={
          id
            ? "flex justify-center items-center"
            : "grid grid-cols-2 gap-10 sm:grid-cols-4"
        }
      >
        {filteredData &&
          filteredData.map((card) => {
            if (type === "characters") return <CharacterCard key={card.id} data={card} />;
            else if (type === "locations") return <LocationCard key={card.id} data={card} />;
            else if (type === "episodes") return <EpisodeCard key={card.id} data={card} />;
          })}
      </div>
      {!id && (
        <div className="flex justify-center items-center gap-5">
          <PagingButton handleClick={setPreviousPage}>Previous</PagingButton>
          <p>
            {page} / {info.pages}
          </p>
          <PagingButton handleClick={setNextPage}>Next</PagingButton>
        </div>
      )}
    </div>
  );
}
