import axios from "axios";
import { useEffect, useState } from "react";
import Character from "./Character";
import PagingButton from "./PagingButton";

const baseURL = "https://rickandmortyapi.com/api/character";
const itemsPerPage = 12;

export default function Characters() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`${baseURL}?page=${page}`).then((response) => {
      setData(response.data.results.slice(0, itemsPerPage)); // Oříznout výsledky
      setInfo(response.data.info);
      console.log(response.data.results);
      console.log(response.data.info);
    });
  }, [page]);

  const setNextPage = () => {
    setPage((prevPage) => {
      if (prevPage === info.pages) return 1;
      return prevPage + 1;
    });
  };

  const setPreviousPage = () => {
    setPage((prevPage) => {
      if (prevPage === 1) return info.pages;
      return prevPage - 1;
    });
  };

  return (
    <div className="w-[90%] h-full flex justify-center items-center gap-5 flex-col">
      <h1>Characters</h1>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        {data.map((character) => (
          <Character key={character.id} data={character} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5">
        <PagingButton handleClick={setPreviousPage}>Previous</PagingButton>
        <p>
          {page} / {info.pages}
        </p>
        <PagingButton handleClick={setNextPage}>Next</PagingButton>
      </div>
    </div>
  );
}
