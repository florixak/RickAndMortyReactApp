import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import {
  CHARACTERS_NAV_URL,
  LOCATIONS_NAV_URL,
  EPISODES_NAV_URL,
} from "../../utils.js";
import LogoImage from "../../assets/RickAndMortyLogo.png";
import MobileNav from "./MobileNav.jsx";
import Link from "./Link.jsx";

const navLinks = [
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

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const mobileNavButtonStyle = `absolute left-[20px] top-[20px] ${
    !isOpen ? "lg:hidden" : null
  } z-20 cursor-pointer`;

  const MobileNavButton = () => {
    return isOpen ? (
      <TfiClose
        size={50}
        className={mobileNavButtonStyle}
        onClick={handleNavOpen}
      />
    ) : (
      <FiMenu
        size={50}
        className={mobileNavButtonStyle}
        onClick={handleNavOpen}
      />
    );
  };

  const NavLinkPackage = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:flex text-center flex-col xl:flex-row gap-10"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <nav>
      <MobileNavButton />
      {isOpen && <MobileNav navLinks={navLinks} toggleNav={handleNavOpen} />}
      <div className="w-full h-full flex flex-row items-center justify-center gap-20">
        <NavLinkPackage>
          <Link to={navLinks[0].to}>{navLinks[0].label}</Link>
          <Link to={navLinks[1].to}>{navLinks[1].label}</Link>
        </NavLinkPackage>
        <Logo />
        <NavLinkPackage>
          <Link to={navLinks[2].to}>{navLinks[2].label}</Link>
          <Link to={navLinks[3].to}>{navLinks[3].label}</Link>
        </NavLinkPackage>
      </div>
    </nav>
  );
}
