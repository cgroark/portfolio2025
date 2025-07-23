import { Link } from "react-router-dom";
import { CodeIcon, HeadCircuitIcon, MailboxIcon, WarehouseIcon } from "@phosphor-icons/react";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: end;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  padding-left: 25px;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.offWhite};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.3s ease;
  padding-bottom: 3px;

  &:hover {
    border-bottom: 3px solid ${props => props.theme.purple};
  }
`;

function Navbar() {
    return (
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/">
                <WarehouseIcon size={24} />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">
                <HeadCircuitIcon size={24} />
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">
                <CodeIcon size={24} />
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">
                <MailboxIcon size={24} />
                Contact
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>
    )
}

export default Navbar;