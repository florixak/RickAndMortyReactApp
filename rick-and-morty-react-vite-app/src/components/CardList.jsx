import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PagingButton from "./PagingButton";
import CharacterCard from "./Characters/CharacterCard";
import LocationCard from "./Locations/LocationCard";
import EpisodeCard from "./Episodes/EpisodeCard";

export default function CardList({ title, url, type }) {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [inputValue, setInputValue] = useState(-1);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1, id: -1 });
  const page = searchParams.get("page");
  const id = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    if (id && id > 0) {
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          setData([response.data]);
          setInfo({ pages: 1 });
          console.log(response.data);
        })
        .catch((error) => {
          setData([]);
        });
    } else {
      axios.get(`${url}?page=${page}`).then((response) => {
        setData(response.data.results);
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
    if (inputValue > 0) {
      navigate(`/${type}?id=${inputValue}`, { replace: true });
    } else {
      navigate(`/${type}?page=1`, { replace: true });
    }
  };

  const setNextPage = () => {
    setSearchParams((prevSearchParams) => {
      const prevPage = parseInt(prevSearchParams.get("page"));
      const newPage = prevPage
        ? prevPage === info.pages
          ? 1
          : prevPage + 1
        : 1;
      return { page: newPage };
    });
  };

  const setPreviousPage = () => {
    setSearchParams((prevSearchParams) => {
      const prevPage = parseInt(prevSearchParams.get("page"));
      const newPage = prevPage
        ? prevPage === 1
          ? info.pages
          : prevPage - 1
        : 1;
      return { page: newPage };
    });
  };

  const filteredData =
    id && id > 0
      ? data.filter((character) => character.id === parseInt(id))
      : data;

  const PagingButtons = () => {
    return !id || id < 0 ? (
      <div className="flex justify-center items-center gap-5">
        <PagingButton handleClick={setPreviousPage}>Previous</PagingButton>
        <p>
          {page} / {info.pages}
        </p>
        <PagingButton handleClick={setNextPage}>Next</PagingButton>
      </div>
    ) : null;
  };

  return (
    <div className="w-[90%] h-full flex justify-center items-center gap-5 flex-col">
      <h1 className="font-bold">{title ? title : "Loading..."}</h1>
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
      <PagingButtons />
      <div
        className={
          id && id > 0
            ? "flex justify-center items-center"
            : "grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }
      >
        {filteredData &&
          filteredData.map((card) => {
            if (type === "characters")
              return <CharacterCard key={card.id} data={card} />;
            else if (type === "locations")
              return <LocationCard key={card.id} data={card} />;
            else if (type === "episodes")
              return <EpisodeCard key={card.id} data={card} />;
          })}
      </div>
      <PagingButtons />
    </div>
  );
}
