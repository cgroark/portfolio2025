import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
  border-bottom: 2px solid ${props => props.theme.white};
  transition: border-bottom 0.3s ease;
  padding-bottom: 3px;

  &:hover {
    border-bottom: 4px solid ${props => props.theme.purple};
  }
`;

function Navbar() {
    return (
        <div>
          <NavList>
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
        </div>
    )
}

export default Navbar;