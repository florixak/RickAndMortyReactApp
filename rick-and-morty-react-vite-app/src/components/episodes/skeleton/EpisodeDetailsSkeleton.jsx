import Details from "../../Details";
import TextSkeleton from "../../TextSkeleton";

export default function EpisodeDetailsSkeleton() {
  return (
    <Details>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">
          <TextSkeleton width={"300px"} height={"20px"} />
        </h1>
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
        <TextSkeleton width={"300px"} height={"12px"} />
      </div>
    </Details>
  );
}
