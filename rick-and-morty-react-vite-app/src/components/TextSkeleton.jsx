export default function TextSkeleton({ isTitle, width }) {
  return (
    <div className={`w-[${width}] ${isTitle ? "h-5" : "h-3"} bg-gray-800 rounded-full mb-3 animate-pulse`}></div>
  );
}
