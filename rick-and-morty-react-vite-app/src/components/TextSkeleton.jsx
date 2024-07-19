export default function TextSkeleton({ width, height }) {
  return (
    <div
      className={`w-[${width}] h-[${height}] m-1 animate-pulse rounded-full bg-dark-slate p-2`}
    ></div>
  );
}
