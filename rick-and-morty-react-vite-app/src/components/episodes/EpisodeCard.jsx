import Card from "../Card";
import EpisodeAirDate from "./information/EpisodeAirDate";
import EpisodeID from "./information/EpisodeID";
import EpisodeName from "./information/EpisodeName";
import EpisodeOrder from "./information/EpisodeOrder";

export default function EpisodeCard({ data }) {

  const { id, name, air_date, episode } = data;

  return (
    <Card type="episodes" id={id || 0}>
      <EpisodeName name={name} />
      <div className="flex flex-col items-start justify-start text-secondary">
        <EpisodeID id={id} />
        <EpisodeAirDate air_date={air_date} />
        <EpisodeOrder episode={episode} />
      </div>
    </Card>
  );
}