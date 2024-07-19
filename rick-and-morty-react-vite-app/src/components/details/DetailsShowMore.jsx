import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const maxShowCount = 6;

export default function DetailsShowMore({ list, listName, getURL }) {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const toggleShowMore = () => setShowMore(!showMore);

  const displayedList = showMore ? list : list && list.slice(0, maxShowCount);

  return (
    <div className="flex max-w-[350px]">
      <div className="flex flex-row gap-1">
        <span className="font-semibold">{listName}:</span>
        <div className="flex flex-wrap gap-1">
          <AnimatePresence>
            {displayedList &&
              displayedList.map((item, index) => {
                const num = item.match(/\/(\d+)$/)[1];
                return (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onClick={() => navigate(getURL(num))}
                    key={item}
                    className={`hover:cursor-pointer hover:underline`}
                  >
                    {num}
                    {index < list.length - 1 ? "," : ""}
                  </motion.span>
                );
              })}
          </AnimatePresence>
          {list && list.length > maxShowCount && (
            <button
              onClick={toggleShowMore}
              className="ml-2 text-sm text-secondary"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
