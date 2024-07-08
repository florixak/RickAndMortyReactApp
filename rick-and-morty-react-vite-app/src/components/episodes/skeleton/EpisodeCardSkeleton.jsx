import Card from "../../Card";
import TextSkeleton from "../../TextSkeleton";

export default function EpisodeCardSkeleton() {
  return (
    <Card>
      <TextSkeleton isTitle={true} width={"300px"} />
      <div className="flex flex-col items-start justify-start">
        <TextSkeleton isTitle={false} width={"300px"} />
        <TextSkeleton isTitle={false} width={"300px"} />
        <TextSkeleton isTitle={false} width={"300px"} />
      </div>
    </Card>
  );
}
