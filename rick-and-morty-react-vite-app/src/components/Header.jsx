import Nav from "./Nav";
import Logo from "../assets/RickAndMortyLogo.png";
import PortalGunImage from "../assets/PortalGun.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <header className="w-full flex flex-col items-center gap-5 justify-center bg-slate-700 p-10 text-slate-50">
      <img
        className="absolute left-[0] top-[0] w-[100px] md:hidden z-20"
        onClick={toggleNav}
        src={PortalGunImage}
        alt="Portal Gun Image"
      />
      <img
        className="animate-infinite-scaling w-[240px] md:w-[480px]"
        src={Logo}
        alt="Rick And Morty Logo"
      />
      <Nav open={isOpen} toggleNav={toggleNav} />
    </header>
  );
}
