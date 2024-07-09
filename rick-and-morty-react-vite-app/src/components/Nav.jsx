import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import {
  CHARACTERS_NAV_URL,
  LOCATIONS_NAV_URL,
  EPISODES_NAV_URL,
} from "../utils.js";

const links = [
  { to: "/", label: "Home" },
  { to: CHARACTERS_NAV_URL, label: "Characters" },
  { to: LOCATIONS_NAV_URL, label: "Locations" },
  { to: EPISODES_NAV_URL, label: "Episodes" },
];

const navLinkStyle = ({ isActive, isPending }) =>
  isPending ? "" : isActive ? "text-[#97ce4c]" : "";

const mobileNavButtonStyle = "absolute left-[20px] top-[20px] md:hidden z-20 cursor-pointer";

const MobileNavButton = ({ open, toggleNav }) => {
  return open ? (
    <TfiClose size={50} className={mobileNavButtonStyle} onClick={toggleNav} />
  ) : (
    <FiMenu size={50} className={mobileNavButtonStyle} onClick={toggleNav} />
  );
};

export default function Nav({ open, toggleNav }) {
  return (
    <nav>
      <MobileNavButton open={open} toggleNav={toggleNav} />
      {open && (
        <div className="w-full h-full absolute left-[0] top-[0] z-10 bg-slate-800">
          <ul className="flex flex-col justify-center items-center gap-4 mt-[30%] text-[30px]">
            {links.map(({ to, label }) => (
              <li key={label}>
                <NavLink to={to} className={navLinkStyle} onClick={toggleNav}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className="hidden w-full md:flex flex-col md:flex-row gap-4">
        {links.map(({ to, label }) => (
          <li key={label}>
            <NavLink to={to} className={navLinkStyle}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
