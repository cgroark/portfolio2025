import { NavLink } from "react-router-dom";
import { CodeIcon, HeadCircuitIcon, MailboxIcon, WarehouseIcon } from "@phosphor-icons/react";

import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: end;
  margin-bottom: 26px;

  @media (max-width: 576px) {
    justify-content: center;
    margin: 14px 0 20px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 5px;
  border: 1px solid rgba(249, 244, 218, 0.22);
  border-radius: 12px;
  background: rgba(40, 44, 52, 0.48);
`;

const NavItem = styled.li`
  font-size: 15px;
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.offWhite};
  text-decoration: none;
  display: flex;
  gap: 7px;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 9px 11px;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &.active {
    background: rgba(123, 94, 166, 0.38);
    border-color: rgba(249, 244, 218, 0.32);
  }

  &:hover {
    background: rgba(123, 94, 166, 0.56);
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.yellow};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    gap: 5px;
    padding: 8px;
    font-size: 14px;

    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }

  @media (max-width: 380px) {
    gap: 0;
    padding: 8px 6px;
    font-size: 12px;
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
