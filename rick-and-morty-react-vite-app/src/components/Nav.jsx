import { NavLink } from "react-router-dom";
import {
  CHARACTERS_NAV_URL,
  LOCATIONS_NAV_URL,
  EPISODES_NAV_URL,
} from "../utils.js";

export default function Nav({ open, toggleNav }) {
  const NavLinkStyle = ({ isActive, isPending }) =>
    isPending ? null : isActive ? "text-[#97ce4c]" : "";

  return (
    <nav>
      {open && (
        <div className="w-full h-full absolute left-[0] top-[0] z-10 bg-slate-800">
          <ul className="w-full flex flex-col justify-center items-center gap-4">
            <li>
              <NavLink to="/" className={NavLinkStyle} onClick={toggleNav}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={CHARACTERS_NAV_URL} className={NavLinkStyle} onClick={toggleNav}>
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink to={LOCATIONS_NAV_URL} className={NavLinkStyle} onClick={toggleNav}>
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink to={EPISODES_NAV_URL} className={NavLinkStyle} onClick={toggleNav}>
                Episodes
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <ul className="hidden w-full md:flex flex-col md:flex-row gap-4">
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
