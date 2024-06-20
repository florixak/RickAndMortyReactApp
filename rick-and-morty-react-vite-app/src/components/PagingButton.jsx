export default function PagingButton({ children, handleClick }) {

  return (
    <button className="p-5" onClick={handleClick}>
      {children}
    </button>
  );
}
