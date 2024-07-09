import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import PagingButton from "./PagingButton";
import CharacterCard from "./characters/CharacterCard";
import LocationCard from "./locations/LocationCard";
import EpisodeCard from "./episodes/EpisodeCard";
import CharacterCardSkeleton from "./characters/skeleton/CharacterCardSkeleton";
import LocationCardSkeleton from "./locations/skeleton/LocationCardSkeleton";
import EpisodeCardSkeleton from "./episodes/skeleton/EpisodeCardSkeleton";
import Error from "./errors/Error";

export default function CardList({ title, url, type }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
    let timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (id && parseInt(id) > 0) {
          response = await axios.get(`${url}/${id}`);
          setData([response.data]);
          setInfo({ pages: 1 });
        } else {
          response = await axios.get(`${url}?page=${page}`);
          setData(response.data.results);
          setInfo(response.data.info);
        }
      } catch (e) {
        setError({ message: "Failed to fetch data." });
        setData([]);
        setInfo({ pages: 1 });
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [searchParams, url, id, page]);

  const handleInputValue = (e) => {
    setSearchParams(
      { page: page, id: e.target.value || "all" },
      { replace: true }
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id && id !== "all") {
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
    id && id !== "all" ? data.filter((card) => card.id === parseInt(id)) : data;

  const renderCardSkeleton = (card) => {
    switch (type) {
      case "characters":
        return <CharacterCardSkeleton key={card.id} />;
      case "locations":
        return <LocationCardSkeleton key={card.id} />;
      case "episodes":
        return <EpisodeCardSkeleton key={card.id} />;
      default:
        return null;
    }
  };

  const renderCard = (card) => {
    switch (type) {
      case "characters":
        return <CharacterCard key={card.id} data={card} />;
      case "locations":
        return <LocationCard key={card.id} data={card} />;
      case "episodes":
        return <EpisodeCard key={card.id} data={card} />;
      default:
        return null;
    }
  };

  const PagingButtons = () => {
    return (
      id &&
      id === "all" && (
        <div className="w-[50%] md:w-[30%] lg:w-[20%] flex justify-evenly items-center">
          <PagingButton
            type="previous"
            handleClick={setPreviousPage}
            isDisabled={loading}
          />
          <p>{`${page || "Loading..."} / ${info.pages || "Loading..."}`}</p>
          <PagingButton
            type="next"
            handleClick={setNextPage}
            isDisabled={loading}
          />
        </div>
      )
    );
  };

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <div className="w-full h-full flex justify-center items-center gap-5 flex-col">
      <h1 className="font-bold">{title}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="text-center rounded-lg p-2 text-black w-[250px]"
          type="number"
          min={1}
          max={info.count || ""}
          placeholder={`Specify ID (1 to ${info.count || "Loading..."})`}
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
        {filteredData.map((card) =>
          loading ? renderCardSkeleton(card) : renderCard(card)
        )}
      </div>
      <PagingButtons />
    </div>
  );
}
