import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: end;
  background-color: ${props => props.theme.lightBlack};
`;

const NavList = styled.ul`
  background-color: ${props => props.theme.lightBlack};
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  padding-left: 10px;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
`;

function Navbar() {
    return (
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/recent-work">Recent Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavList>
        </Nav>
    )
}

export default Navbar;