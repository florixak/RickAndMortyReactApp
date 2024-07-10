export default function Details({ children }) {
  return (
    <div className="w-full md:w-[40%] flex flex-col 2xl:flex-row m-auto p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      {children}
    </div>
  );
}
