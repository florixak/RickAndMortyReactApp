export default function LocationDimension({ residents }) {
    return (
      <p>
        <span className="font-semibold">No of residents:</span> {residents && residents.length}
      </p>
    );
  }
  