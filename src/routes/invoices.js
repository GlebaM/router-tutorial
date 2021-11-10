import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontSize: "1.4rem",
          }}
        >
          {invoices.map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  textDecoration: "none",
                  margin: "1rem 0",
                  color: isActive ? "red" : "black",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
