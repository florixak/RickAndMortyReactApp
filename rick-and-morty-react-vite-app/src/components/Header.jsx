import Nav from "./Nav";

export default function Header({ mobileNavOpen, handleNavOpen }) {
  return (
    <header className="w-full md:min-w-[1196px] h-[15vh] md:h-[25vh] flex justify-center bg-slate-800 border-slate-900 border-b-8 rounded-b-[60px] md:rounded-b-[1000px]">
      <Nav open={mobileNavOpen} toggleNav={handleNavOpen} />
    </header>
  );
}
