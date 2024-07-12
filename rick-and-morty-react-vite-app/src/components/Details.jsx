export default function Details({ children }) {
  return (
    <div className="w-full sm:max-w-[50%] lg:max-w-[30%] xl:max-w-[20%] flex flex-col items-center m-auto p-5 gap-5 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      {children}
    </div>
  );
}
