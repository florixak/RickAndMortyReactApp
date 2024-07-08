export default function TextSkeleton({ width, height }) {
  return (
    <div
      className={`w-[${width}] h-[${height}] bg-gray-800 rounded-full p-2 m-1 animate-pulse`}
    ></div>
  );
}
