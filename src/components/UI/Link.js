import { NavLink, useLocation } from "react-router-dom";

import styled from "styled-components";

function QueryNavLink({ path, ...props }) {
  let location = useLocation();
  return <NavLink to={path + location.search} {...props} />;
}

const Link = styled(QueryNavLink)`
  background: palevioletred;
  color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  padding: 0.25em 1em;
  text-decoration: none;
  box-shadow: 0 1px 3px grey;
`;

export default Link;
