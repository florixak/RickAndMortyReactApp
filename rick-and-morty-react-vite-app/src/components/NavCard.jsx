import { Link } from "react-router-dom";

export default function NavCard({ image, title, navigateTo }) {

    return (
      <Link to={navigateTo} className="flex flex-col justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md sm:hover:scale-[1.2]">
        {image}
        <h1>{title}</h1>
      </Link>
    );
  }
  