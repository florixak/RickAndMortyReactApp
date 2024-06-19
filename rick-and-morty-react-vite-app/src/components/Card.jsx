export default function Card({ children }) {

  return (
    <div className="flex flex-col justify-start p-5 gap-3 bg-slate-50 text-black rounded-3xl shadow-black shadow-md">
      {children}
    </div>
  );
}
