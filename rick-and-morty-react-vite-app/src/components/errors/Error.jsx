export default function FailedToFetch({ children }) {
  return <div>{children ? children : "Failed to fetch."}</div>;
}
