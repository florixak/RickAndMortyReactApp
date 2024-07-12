import { NavLink } from "react-router-dom";

export default function Link({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-light-green" : "")}
    >
      {children}
    </NavLink>
  );
}
