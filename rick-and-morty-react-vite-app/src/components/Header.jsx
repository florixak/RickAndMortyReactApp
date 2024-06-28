import Nav from "./Nav";
import Logo from "../assets/RickAndMortyLogo.png";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center gap-5 justify-center bg-slate-700 p-10 text-slate-50">
      <img className="animate-infinite-scaling" width={480} src={Logo} alt="Rick And Morty Logo" />
      <Nav />
    </header>
  );
}
