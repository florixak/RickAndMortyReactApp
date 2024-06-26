import { Link } from "react-router-dom";

export default function Card({ children, type, id }) {

  return (
    <Link to={type && id && `/${type}/${id}`} className="flex flex-col justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md hover:scale-[1.025]">
      {children}
    </Link>
  );
}
