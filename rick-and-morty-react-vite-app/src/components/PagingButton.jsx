import { useNavigate } from "react-router-dom";

export default function PagingButton({ children, url }) {
  const navigate = useNavigate();

  return (
    <button className="border p-2" onClick={() => navigate(url)}>
      {children}
    </button>
  );
}
