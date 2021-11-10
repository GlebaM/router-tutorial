import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/invoices">Invoices</NavLink> |{" "}
        <NavLink to="/expenses">Expenses</NavLink>
      </nav>
      <Outlet />
    </header>
  );
};

export default NavBar;
