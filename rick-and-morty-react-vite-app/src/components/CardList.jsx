import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import PagingButton from "./PagingButton";
import CharacterCard from "./characters/CharacterCard";
import LocationCard from "./locations/LocationCard";
import EpisodeCard from "./episodes/EpisodeCard";
import CharacterCardSkeleton from "./characters/skeleton/CharacterCardSkeleton";
import LocationCardSkeleton from "./locations/LocationCardSkeleton";
import EpisodeCardSkeleton from "./episodes/EpisodeCardSkeleton";

export default function CardList({ title, url, type }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    id: "all",
  });
  const page = searchParams.get("page");
  const id = searchParams.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchParams]);

  useEffect(() => {
    if (id && parseInt(id) > 0) {
      axios
        .get(`${url}/${id}`)
        .then((response) => {
          setData([response.data]);
          setInfo({ pages: 1 });
        })
        .catch((error) => {
          setError({ message: "Failed to fetch data." });
          setData([]);
          setInfo({ pages: 1 });
        });
    } else {
      axios
        .get(`${url}?page=${page}`)
        .then((response) => {
          setData(response.data.results);
          setInfo(response.data.info);
        })
        .catch((error) => {
          setError({ message: "Failed to fetch data." });
          setData([]);
          setInfo({ pages: 1 });
        });
    }
  }, [searchParams, url]);

  const handleInputValue = (e) => {
    setSearchParams(
      { page: page, id: e.target.value ? e.target.value : "all" },
      { replace: true }
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id && parseInt(id) > 0 && parseInt(id) < info.count && id !== "all") {
      navigate(`/${type}?page=${page}&id=${id}`, { replace: true });
    } else {
      navigate(`/${type}?page=1&id=all`, { replace: true });
    }
  };

  const setNextPage = () => {
    setSearchParams(
      (prev) => {
        const prevPage = parseInt(prev.get("page"));
        const newPage = prevPage
          ? prevPage === info.pages
            ? 1
            : prevPage + 1
          : 1;
        return { page: newPage, id: "all" };
      },
      { replace: true }
    );
  };

  const setPreviousPage = () => {
    setSearchParams(
      (prev) => {
        const prevPage = parseInt(prev.get("page"));
        const newPage = prevPage
          ? prevPage === 1
            ? info.pages
            : prevPage - 1
          : 1;
        return { page: newPage, id: "all" };
      },
      { replace: true }
    );
  };

  const filteredData =
    id !== "all"
      ? data.filter((character) => character.id === parseInt(id))
      : data;

  const PagingButtons = () => {
    return id && id === "all" ? (
      <div className="w-[50%] md:w-[30%] lg:w-[20%] flex justify-evenly items-center">
        <PagingButton handleClick={setPreviousPage} isDisabled={loading}>
          <MdNavigateBefore />
        </PagingButton>
        <p>
          {page ? page : "Loading..."} /{" "}
          {info.pages ? info.pages : "Loading..."}
        </p>
        <PagingButton handleClick={setNextPage} isDisabled={loading}>
          <MdNavigateNext />
        </PagingButton>
      </div>
    ) : null;
  };

  if (error) {
    return <div>Error occured</div>;
  }

  return (
    <div className="w-[90%] h-full flex justify-center items-center gap-5 flex-col">
      <h1 className="font-bold">{title}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="text-center rounded-lg p-2 text-black w-[250px]"
          type="number"
          min={1}
          max={info.count}
          placeholder={`Specify ID (1 to ${info.count})`}
          value={id > 0 ? id : ""}
          onChange={handleInputValue}
        />
      </form>
      <PagingButtons />
      <div
        className={
          id && id !== "all"
            ? "flex justify-center items-center"
            : "grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }
      >
        {filteredData &&
          filteredData.map((card) => {
            if (type === "characters")
              return loading ? (
                <CharacterCardSkeleton key={card.id} />
              ) : (
                <CharacterCard key={card.id} data={card} />
              );
            else if (type === "locations")
              return loading ? (
                <LocationCardSkeleton key={card.id} />
              ) : (
                <LocationCard key={card.id} data={card} />
              );
            else if (type === "episodes")
              return loading ? (
                <EpisodeCardSkeleton key={card.id} />
              ) : (
                <EpisodeCard key={card.id} data={card} />
              );
          })}
      </div>
      <PagingButtons />
    </div>
  );
}
