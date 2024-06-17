export default function PagingButton({ children, handleClick }) {

  return (
    <button className="border p-2" onClick={handleClick}>
      {children}
    </button>
  );
}
