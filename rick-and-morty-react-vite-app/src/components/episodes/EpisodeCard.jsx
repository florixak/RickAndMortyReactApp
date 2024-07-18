import Card from "../Card";
import Detail from "../details/Detail";
import DetailTitle from "../details/DetailTitle";
import EpisodeCardSkeleton from "./skeleton/EpisodeCardSkeleton";

export default function EpisodeCard({ data, isLoading }) {
  const { id, name, air_date, episode } = data;

  if (isLoading || !data) {
    return <EpisodeCardSkeleton />;
  }

  return (
    <Card type="episodes" id={id || 0}>
      <DetailTitle>{name || "Loading..."}</DetailTitle>
      <div className="flex flex-col items-start justify-start text-secondary">
        <Detail label="ID" value={id} />
        <Detail label="Air Date" value={air_date} />
        <Detail label="Episode" value={episode} />
      </div>
    </Card>
  );
}
