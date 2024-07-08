export default function TextSkeleton({ width, height }) {
  return (
    <div
      className={`w-[${width}] h-[${height}] bg-gray-800 rounded-full mb-3 animate-pulse`}
    ></div>
  );
}
