export default function EpisodeCharactersNo({ characters }) {
    return (
      <p>
        <span className="font-semibold">No of characters:</span> {characters && characters.length}
      </p>
    );
  }
  