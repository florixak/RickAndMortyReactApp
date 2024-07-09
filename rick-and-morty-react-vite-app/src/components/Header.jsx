import Logo from "../assets/RickAndMortyLogo.png";
export default function Header() {

  return (
    <header className="w-full h-[15vh] md:h-[25vh] flex flex-col items-center justify-center bg-slate-700 text-slate-50">
      <img
        className="animate-infinite-scaling w-[240px] md:w-[480px]"
        src={Logo}
        alt="Rick And Morty Logo"
      />
    </header>
  );
}
