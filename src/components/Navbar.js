import { NavLink } from "react-router-dom";
import { CodeIcon, HeadCircuitIcon, MailboxIcon, WarehouseIcon } from "@phosphor-icons/react";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: end;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding-left: 25px;

  @media (max-width: 768px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.offWhite};
  text-decoration: none;
  display: flex;
  gap: 4px;
  align-items: center;
  border-bottom: 4px solid transparent;
  transition: border-bottom 0.3s ease;
  padding-bottom: 3px;

  &.active {
    border-bottom: 4px solid ${props => props.theme.yellow};
  }

  &:hover {
    border-bottom: 4px solid ${props => props.theme.purple};
  }

  @media (max-width: 768px) {
    gap: 2px;

    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

function Navbar() {
    return (
        <Nav>
          <NavList>
            <NavItem>
              <StyledNavLink to="/" end>
                <WarehouseIcon size={24} />
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/about">
                <HeadCircuitIcon size={24} />
                About
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/projects">
                <CodeIcon size={24} />
                Projects
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/contact">
                <MailboxIcon size={24} />
                Contact
              </StyledNavLink>
            </NavItem>
          </NavList>
        </Nav>
    )
}

export default Navbar;