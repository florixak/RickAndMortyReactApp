import Card from "../../Card";
import TextSkeleton from "../../TextSkeleton";

export default function EpisodeCardSkeleton() {
  return (
    <Card>
      <TextSkeleton width={"300px"} height={"20px"} />
      <div className="flex flex-col items-start justify-start">
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
      </div>
    </Card>
  );
}
