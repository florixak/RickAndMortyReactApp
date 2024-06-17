import { NavLink } from "react-router-dom";

const activeColor = "text-emerald-200";

export default function Nav() {
  const NavLinkStyle = ({ isActive, isPending }) =>
    isPending ? null : isActive ? activeColor : "";

  return (
    <nav>
      <ul className="w-full flex gap-4">
        <li>
          <NavLink to="/" className={NavLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" className={NavLinkStyle}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/locations" className={NavLinkStyle}>
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" className={NavLinkStyle}>
            Planets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
