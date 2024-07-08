import PageNotFoundErrorLogo from "../assets/PageNotFoundLogo.png";

export default function PageNotFoundError() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-center max-w-[300px]">
        The page you are trying to search is in different dimension!
      </h1>
      <img
        src={PageNotFoundErrorLogo}
        width={320}
        alt="Page not found error logo"
      />
    </div>
  );
}
