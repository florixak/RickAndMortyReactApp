import { NavLink } from "react-router-dom";

const activeColor = "text-[#97ce4c]";

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
          <NavLink to="/characters?page=1" className={NavLinkStyle}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/locations?page=1" className={NavLinkStyle}>
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/episodes?page=1" className={NavLinkStyle}>
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
