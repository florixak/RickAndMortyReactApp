import Card from "../../Card";
import CharacterImageSkeleton from "./CharacterImageSkeleton";

export default function CharacterSkeleton() {

  const TextSkeleton = () => {
    return <div className="w-[300px] h-3 bg-gray-800 rounded-full mb-3 animate-pulse"></div>
  }

  return (
    <Card>
      <CharacterImageSkeleton />
      <h1 className="text-xl font-bold flex flex-row">
        <div className="w-[300px] h-5 bg-gray-800 rounded-full mb-4 animate-pulse"></div>
      </h1>
      <div className="flex flex-col items-start justify-start">
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </div>
    </Card>
  );
}
