import axios from "axios";
import { useEffect, useState } from "react";
import PagingButton from "./PagingButton";

const itemsPerPage = 12;

export default function CardList({ children, title, handleData, url }) {
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get(`${url}?page=${page}`).then((response) => {
      handleData(response.data.results.slice(0, itemsPerPage)); // Oříznout výsledky
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
      <h1>{title}</h1>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        {children}
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
