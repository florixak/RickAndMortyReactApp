import { NavLink } from "react-router-dom";

const activeColor = "text-emerald-200";

export default function Nav() {
  return (
    <nav>
      <ul className="w-full flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? null : isActive ? activeColor : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/characters"
            className={({ isActive, isPending }) =>
              isPending ? null : isActive ? activeColor : ""
            }
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={({ isActive, isPending }) =>
              isPending ? null : isActive ? activeColor : ""
            }
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/planets"
            className={({ isActive, isPending }) =>
              isPending ? null : isActive ? activeColor : ""
            }
          >
            Planets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
