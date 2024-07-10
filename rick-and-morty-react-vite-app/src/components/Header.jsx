import Nav from "./Nav";

export default function Header({ mobileNavOpen, handleNavOpen }) {
  return (
    <header className="w-full h-[15vh] md:h-[25vh] flex items-cente justify-center bg-slate-700 text-slate-50">
      <Nav open={mobileNavOpen} toggleNav={handleNavOpen} />
    </header>
  );
}
