import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import {
  CHARACTERS_NAV_URL,
  LOCATIONS_NAV_URL,
  EPISODES_NAV_URL,
} from "../../utils.js";
import LogoImage from "../../assets/RickAndMortyLogo.png";

const NavLinks = [
  { to: "/", label: "HOME" },
  { to: CHARACTERS_NAV_URL, label: "CHARACTERS" },
  { to: LOCATIONS_NAV_URL, label: "LOCATIONS" },
  { to: EPISODES_NAV_URL, label: "EPISODES" },
];

const Logo = () => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      src={LogoImage}
      alt="Rick And Morty Logo"
      className="animate-infinite-scaling w-[240px] md:w-[460px]"
    />
  );
};

export default function Nav({ open, toggleNav }) {
  const mobileNavButtonStyle = `absolute left-[20px] top-[20px] ${
    !open ? "lg:hidden" : null
  } z-20 cursor-pointer`;

  const MobileNavButton = ({ open, toggleNav }) => {
    return open ? (
      <TfiClose
        size={50}
        className={mobileNavButtonStyle}
        onClick={toggleNav}
      />
    ) : (
      <FiMenu size={50} className={mobileNavButtonStyle} onClick={toggleNav} />
    );
  };

  const NavLinkPackage = ({ children }) => {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex text-center flex-col xl:flex-row gap-10"
      >
        {children}
      </motion.div>
    );
  };

  const Link = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-active-text" : "")}
      >
        {children}
      </NavLink>
    );
  };

  return (
    <nav>
      <MobileNavButton open={open} toggleNav={toggleNav} />
      {open && (
        <div className="w-full h-full absolute left-[0] top-[0] z-10 bg-slate-800">
          <ul className="flex flex-col justify-center items-center gap-4 mt-[30%] text-[30px]">
            {NavLinks.map(({ to, label }) => (
              <motion.li
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                key={label}
              >
                <NavLink
                  to={to}
                  className={navLinkActiveStyle}
                  onClick={toggleNav}
                >
                  {label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      <div className="w-full h-full flex flex-row items-center justify-center gap-20">
        <NavLinkPackage>
          <Link to={NavLinks[0].to}>{NavLinks[0].label}</Link>
          <Link to={NavLinks[1].to}>{NavLinks[1].label}</Link>
        </NavLinkPackage>
        <Logo />
        <NavLinkPackage>
          <Link to={NavLinks[2].to}>{NavLinks[2].label}</Link>
          <Link to={NavLinks[3].to}>{NavLinks[3].label}</Link>
        </NavLinkPackage>
      </div>
    </nav>
  );
}
