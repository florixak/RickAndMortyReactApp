import Nav from "./nav/Nav";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen((prev) => !prev);
    //console.log(isOpen);
  };

  return (
    <header className="w-full h-[15vh] md:h-[20vh] flex justify-center bg-slate-800 border-[#97ce4c] border-b-2 rounded-b-[60px] md:rounded-b-[80px]">
      <Nav open={isOpen} toggleNav={handleNavOpen} />
    </header>
  );
}
