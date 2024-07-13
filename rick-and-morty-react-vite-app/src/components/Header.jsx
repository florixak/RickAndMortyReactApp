import Nav from "./nav/Nav";

export default function Header() {
  
  return (
    <header
      className="w-full z-10 h-[15vh] md:h-[20vh] flex justify-center bg-dark-slate border-light-green border-b-2 rounded-b-[60px] md:rounded-b-[80px]"
    >
      <Nav />
    </header>
  );
}
