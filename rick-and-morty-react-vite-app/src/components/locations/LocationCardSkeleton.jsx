import Card from "../Card";

export default function LocationCardSkeleton() {
  const TextSkeleton = () => {
    return (
      <div className="w-[300px] h-3 bg-gray-800 rounded-full mb-3 animate-pulse"></div>
    );
  };
  return (
    <Card>
      <div className="w-[300px] h-5 bg-gray-800 rounded-full mb-4 animate-pulse"></div>
      <div className="flex flex-col items-start justify-start">
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </div>
    </Card>
  );
}
