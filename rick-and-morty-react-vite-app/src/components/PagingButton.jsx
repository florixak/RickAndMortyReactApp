import { MdNavigateNext, MdNavigateBefore, MdDoubleArrow } from "react-icons/md";

export default function PagingButton({ type, handleClick, isDisabled }) {
  const Icon = () => {
    switch (type) {
      case "next": return <MdNavigateNext />;
      case "previous": return <MdNavigateBefore />;
      case "first": return <MdDoubleArrow style = {{transform: 'rotate(180deg)' }} />;
      case "last": return <MdDoubleArrow />;
    }
    return null;
  }
  return (
    <button className="p-5" onClick={handleClick} disabled={isDisabled}>
      {Icon()}
    </button>
  );
}
