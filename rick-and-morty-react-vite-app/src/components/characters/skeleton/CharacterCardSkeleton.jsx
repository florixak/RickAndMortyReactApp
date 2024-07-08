import Card from "../../Card";
import CharacterImageSkeleton from "./CharacterImageSkeleton";
import TextSkeleton from "../../TextSkeleton";

export default function CharacterSkeleton() {
  return (
    <Card>
      <CharacterImageSkeleton />
      <h1 className="text-xl font-bold flex flex-row">
        <TextSkeleton width={"300px"} height={"20px"} />
      </h1>
      <div className="flex flex-col items-start justify-start">
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
      </div>
    </Card>
  );
}
