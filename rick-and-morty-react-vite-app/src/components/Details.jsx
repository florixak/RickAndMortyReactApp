export default function Details({ children }) {
  return (
    <div className="w-full sm:max-w-[50%] lg:max-w-[30%] xl:max-w-[25%] flex flex-col items-center m-auto p-5 gap-5 mb-5 bg-light-slate text-primary rounded-3xl shadow-black shadow-md">
      {children}
    </div>
  );
}
