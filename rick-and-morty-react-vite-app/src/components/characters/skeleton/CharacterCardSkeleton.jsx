import Card from "../../Card";
import CharacterImageSkeleton from "./CharacterImageSkeleton";
import TextSkeleton from "../../TextSkeleton";

export default function CharacterSkeleton() {
  return (
    <Card>
      <CharacterImageSkeleton />
      <h1 className="text-xl font-bold flex flex-row">
        <TextSkeleton isTitle={true} width={"300px"} />
      </h1>
      <div className="flex flex-col items-start justify-start">
        <TextSkeleton isTitle={false} width={"300px"} />
        <TextSkeleton isTitle={false} width={"300px"} />
        <TextSkeleton isTitle={false} width={"300px"} />
        <TextSkeleton isTitle={false} width={"300px"} />
        <TextSkeleton isTitle={false} width={"300px"} />
      </div>
    </Card>
  );
}
