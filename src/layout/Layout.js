import NavBar from "./NavBar";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <NavBar />
      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
