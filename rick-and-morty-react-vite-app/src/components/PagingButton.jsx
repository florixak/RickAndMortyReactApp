import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function PagingButton({ type, handleClick, isDisabled }) {
  const icon = type === "next" ? <MdNavigateNext /> : <MdNavigateBefore />;
  return (
    <button className="p-5" onClick={handleClick} disabled={isDisabled}>
      {icon}
    </button>
  );
}
