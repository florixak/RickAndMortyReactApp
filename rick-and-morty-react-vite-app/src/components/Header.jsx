import Nav from "./Nav";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen((prev) => !prev);
    //console.log(isOpen);
  };

  return (
    <header className="w-full md:min-w-[1220px] h-[15vh] md:h-[25vh] flex justify-center bg-slate-800 border-slate-900 border-b-8 rounded-b-[60px] md:rounded-b-[80px]">
      <Nav open={isOpen} toggleNav={handleNavOpen} />
    </header>
  );
}
