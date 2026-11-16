import { Link } from "react-router-dom";
import { CodeIcon, HeadCircuitIcon, MailboxIcon } from "@phosphor-icons/react";
import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 12px 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 5px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  border: solid 2px transparent;
  padding: 10px 14px;
  border-radius: 10px;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.purple};
    border-color: ${props => props.theme.offWhite};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.yellow};
    outline-offset: 2px;
  }
`;

function Navbar() {
    return (
        <div>
          <NavList>
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
        </div>
    )
}

export default Navbar;
