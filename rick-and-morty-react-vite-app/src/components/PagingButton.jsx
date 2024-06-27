export default function PagingButton({ children, handleClick, isDisabled }) {

  return (
    <button className="p-5" onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  );
}
