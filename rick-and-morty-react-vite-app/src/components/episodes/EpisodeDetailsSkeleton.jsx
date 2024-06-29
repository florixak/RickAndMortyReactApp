export default function EpisodeDetailsSkeleton() {
  const TextSkeleton = () => {
    return (
      <div className="w-[300px] h-3 bg-gray-800 rounded-full mb-3 animate-pulse"></div>
    );
  };

  return (
    <div className="w-[50%] flex flex-row justify-start p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">
          <div className="w-[300px] h-5 bg-gray-800 rounded-full mb-4 animate-pulse"></div>
        </h1>
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </div>
    </div>
  );
}
