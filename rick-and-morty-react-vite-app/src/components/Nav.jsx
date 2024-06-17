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
          <NavLink to="/episodes" className={NavLinkStyle}>
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
