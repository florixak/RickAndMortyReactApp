import { Link } from "react-router-dom";

export default function Card({ children, type, id }) {
  return (
    <Link
      to={(type && id) && `/${type}/${id}`}
      className="w-[350px] flex flex-col p-5 gap-3 bg-light-slate text-slate-50 rounded-3xl shadow-black shadow-md lg:hover:scale-[1.025]"
      aria-label={`Odkaz na ${type} s ID ${id}`}
    >
      {children}
    </Link>
  );
}
