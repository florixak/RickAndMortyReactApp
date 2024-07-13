export default function Details({ children }) {
  return (
    <div className="w-full sm:max-w-[50%] lg:max-w-[30%] xl:max-w-[20%] flex flex-col items-center m-auto p-5 gap-5 bg-middle-slate text-primary rounded-3xl shadow-black shadow-md">
      {children}
    </div>
  );
}
