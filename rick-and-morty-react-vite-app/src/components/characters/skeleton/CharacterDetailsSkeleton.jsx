import CharacterImageSkeleton from "./CharacterImageSkeleton";
import TextSkeleton from "../../TextSkeleton";
import Details from "../../Details";

export default function CharacterDetailsSkeleton() {
  return (
    <Details>
      <CharacterImageSkeleton />
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-bold flex flex-row">
          <TextSkeleton width={"300px"} height={"20px"} />
        </h1>
        <TextSkeleton width={"300px"} height={"0.75rem"} />
        <TextSkeleton width={"300px"} height={"0.75rem"} />
        <TextSkeleton width={"300px"} height={"0.75rem"} />
        <TextSkeleton width={"300px"} height={"0.75rem"} />
        <TextSkeleton width={"300px"} height={"0.75rem"} />
      </div>
    </Details>
  );
}
