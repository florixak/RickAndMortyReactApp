export default function FailedToFetch({ children }) {
  return <div className="text-center">{children ? children : "Failed to fetch."}</div>;
}
