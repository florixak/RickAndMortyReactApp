import { Link } from "react-router-dom";

export default function Card({ children, type, id }) {
  return (
    <Link
      to={type && id && `/${type}/${id}`}
      className="flex w-[350px] flex-col gap-3 rounded-3xl bg-light-slate p-5 text-slate-50 shadow-md shadow-black lg:hover:scale-[1.025]"
      aria-label={`Odkaz na ${type} s ID ${id}`}
    >
      {children}
    </Link>
  );
}
