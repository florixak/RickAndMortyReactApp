import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <h1>Rick a Morty</h1>
      <Nav />
    </header>
  );
}
