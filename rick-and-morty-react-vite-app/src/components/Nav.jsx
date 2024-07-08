import { NavLink } from "react-router-dom";
import { CHARACTERS_NAV_URL, LOCATIONS_NAV_URL, EPISODES_NAV_URL } from "../utils.js";

export default function Nav() {
  const NavLinkStyle = ({ isActive, isPending }) =>
    isPending ? null : isActive ? "text-[#97ce4c]" : "";

  return (
    <nav>
      <ul className="w-full flex gap-4">
        <li>
          <NavLink to="/" className={NavLinkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={CHARACTERS_NAV_URL} className={NavLinkStyle}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to={LOCATIONS_NAV_URL} className={NavLinkStyle}>
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to={EPISODES_NAV_URL} className={NavLinkStyle}>
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
