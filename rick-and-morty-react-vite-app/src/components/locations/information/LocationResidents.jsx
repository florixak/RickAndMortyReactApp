import { useNavigate } from "react-router-dom";
import { getCharacterURL } from "../../../data.js";

export default function LocationResidents({ residents }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-2 max-w-[350px]">
      <span className="font-semibold">Residents:</span>
      {residents &&
        residents.map((res, index) => {
          const residentNum = res.match(/\/(\d+)$/)[1];
          return (
            <span
              onClick={() => navigate(getCharacterURL(residentNum))}
              key={res}
              className="hover:cursor-pointer hover:underline"
            >
              {residentNum}
              {index < residents.length - 1 ? "," : ""}
            </span>
          );
        })}
    </div>
  );
}
