export default function Details({ children }) {
  return (
    <div className="w-full sm:max-w-[75%] lg:max-w-[35%] flex flex-col xl:flex-row items-center justify-evenly m-auto p-5 gap-5 bg-light-slate text-primary rounded-3xl shadow-black shadow-md">
      {children}
    </div>
  );
}
