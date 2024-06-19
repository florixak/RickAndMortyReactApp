import PageNotFoundErrorLogo from "../assets/PageNotFoundLogo.png"

export default function PageNotFoundError() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <h1 className="text-red-500">Page not found error</h1>
      <img src={PageNotFoundErrorLogo} width={320} alt="Page not found error logo" />
    </div>
  );
}
