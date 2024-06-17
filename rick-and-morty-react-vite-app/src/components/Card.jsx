export default function Card({ children }) {

  return (
    <div className="flex flex-col justify-center p-5 bg-slate-50 text-black rounded-3xl shadow-lg">
      {children}
    </div>
  );
}
