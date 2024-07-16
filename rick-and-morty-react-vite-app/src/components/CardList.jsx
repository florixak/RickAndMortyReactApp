import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

import PagingButton from "./PagingButton";
import CharacterCard from "./characters/CharacterCard";
import LocationCard from "./locations/LocationCard";
import EpisodeCard from "./episodes/EpisodeCard";
import CharacterCardSkeleton from "./characters/skeleton/CharacterCardSkeleton";
import LocationCardSkeleton from "./locations/skeleton/LocationCardSkeleton";
import EpisodeCardSkeleton from "./episodes/skeleton/EpisodeCardSkeleton";
import Error from "./errors/Error";
import { useFetch } from "../hooks/useFetch";

export default function CardList({ title, url, type }) {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    id: "all",
  });

  const page = searchParams.get("page");
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const { isLoading, error, data, info } = useFetch({ id, page, url }, []);

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

  const handlePageChange = (direction) => {
    setSearchParams(
      (prev) => {
        const prevPage = parseInt(prev.get("page")) || 1;
        let newPage;
        if (direction === "next") {
          newPage = prevPage === info.pages ? 1 : prevPage + 1;
        } else if (direction === "previous") {
          newPage = prevPage === 1 ? info.pages : prevPage - 1;
        } else if (direction === "first") {
          newPage = 1;
        } else if (direction === "last") {
          newPage = info.pages;
        } else {
          newPage = prevPage;
        }
        return { page: newPage, id: "all" };
      },
      { replace: true }
    );
  };

  const filteredData =
    id !== "all" ? data.filter((card) => card.id === parseInt(id)) : data;

  const cardListStyle =
    id !== "all"
      ? "flex justify-center items-center"
      : "grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4";

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
      id === "all" && (
        <div className="w-[50%] md:w-[30%] lg:w-[20%] flex justify-evenly items-center">
          <PagingButton
            type="first"
            handleClick={() => handlePageChange("first")}
            isDisabled={isLoading}
          />
          <PagingButton
            type="previous"
            handleClick={() => handlePageChange("previous")}
            isDisabled={isLoading}
          />
          <p>{`${page || "Loading..."} / ${info.pages || "Loading..."}`}</p>
          <PagingButton
            type="next"
            handleClick={() => handlePageChange("next")}
            isDisabled={isLoading}
          />
          <PagingButton
            type="last"
            handleClick={() => handlePageChange("last")}
            isDisabled={isLoading}
          />
        </div>
      )
    );
  };

  if (error) {
    return <Error>{error.message}</Error>;
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full h-full flex justify-center items-center gap-5 flex-col"
    >
      {/* Page title */}
      <h1 className="font-bold">{title}</h1>

      {/* Search form */}
      <form onSubmit={handleFormSubmit}>
        <input
          className="text-center rounded-lg p-2 text-black w-[250px]"
          type="number"
          min={1}
          max={info.count || 9999}
          placeholder={`Specify ID (1 to ${info.count || "Loading..."})`}
          value={id > 0 ? id : ""}
          onChange={handleInputValue}
        />
      </form>

      {/* Cards with paging buttons */}
      <PagingButtons />
      <div className={cardListStyle}>
        {filteredData.map((card) =>
          isLoading ? renderCardSkeleton(card) : renderCard(card)
        )}
      </div>
      <PagingButtons />
    </motion.div>
  );
}
