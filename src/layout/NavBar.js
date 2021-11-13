import { Fragment } from "react";

import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import classes from "./NavBar.module.css";
import ContainerAuto from "../components/UI/ContainerAuto";

const Link = styled(NavLink)`
  text-decoration: none;
  margin-right: 3rem;
  color: palevioletred;
  transition: all 0.2s ease-in;
  &.active,
  &:hover,
  &:active,
  &.active:hover,
  &.active:active {
    color: rgb(214, 28, 90);
    text-decoration: underline;
  }

  &:focus-within {
    text-shadow: 1px 0px 1px rgb(112, 109, 109);
  }
`;

const NavBar = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.auto}>
          <h1>Bookkeeper</h1>
          <nav className={classes.nav}>
            <Link className={classes.hovLink} to="/">
              Home
            </Link>
            <Link to="/invoices">Invoices</Link>
            <Link to="/expenses">Expenses</Link>
          </nav>
        </div>
      </header>

      <ContainerAuto>
        <Outlet />
      </ContainerAuto>
    </Fragment>
  );
};

export default NavBar;
