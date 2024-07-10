import CharacterImageSkeleton from "./CharacterImageSkeleton";
import TextSkeleton from "../../TextSkeleton";

export default function CharacterDetailsSkeleton() {
  return (
    <div className="w-[100%] md:w-[40%] flex flex-col lg:flex-row m-auto p-5 gap-3 bg-slate-700 text-slate-50 rounded-3xl shadow-black shadow-md">
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
    </div>
  );
}
