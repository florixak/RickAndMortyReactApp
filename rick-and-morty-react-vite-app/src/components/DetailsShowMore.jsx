import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailsShowMore({ list, listName, getURL }) {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const toggleShowMore = () => setShowMore(!showMore);

  const displayedList = showMore ? list : list && list.slice(0, 10);

  return (
    <div className="flex flex-wrap gap-2 max-w-[350px]">
      <span className="font-semibold">{listName}:</span>
      {displayedList &&
        displayedList.map((item, index) => {
          const num = item.match(/\/(\d+)$/)[1];
          return (
            <span
              onClick={() => navigate(getURL(num))}
              key={item}
              className="hover:cursor-pointer hover:underline"
            >
              {num}
              {index < displayedList.length - 1 ? "," : ""}
            </span>
          );
        })}
      {list && list.length > 10 && (
        <button
          onClick={toggleShowMore}
          className="ml-2 text-sm text-secondary"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
