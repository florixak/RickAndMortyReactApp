export default function Footer() {
  return (
    <footer className="absolute w-full bottom-0 h-[2.5rem] flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start p-10 md:p-10 md:pt-[10px] border-slate-900 bg-slate-800 border-t-8 rounded-t-[60px] md:rounded-t-[1000px]">
      <p>
        Created by{" "}
        <a
          className="font-semibold"
          href="https://github.com/florixak"
          target="_blank"
        >
          Ondřej Pták
        </a>
      </p>
      <p>
        Using{" "}
        <a
          className="font-semibold"
          href="https://rickandmortyapi.com/"
          target="_blank"
        >
          Rick And Morty API
        </a>
      </p>
      <p>
        Check{" "}
        <a
          className="font-semibold"
          href="https://github.com/florixak/RickAndMortyReactApp"
          target="_blank"
        >
          GitHub repository
        </a>
      </p>
    </footer>
  );
}
