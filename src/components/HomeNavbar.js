import { Link } from "react-router-dom";
import { CodeIcon, HeadCircuitIcon, MailboxIcon } from "@phosphor-icons/react";
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
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  border: solid 2px transparent;
  padding: 10px 14px;
  border-radius: 10px;
  transition: background-color 0.3s ease, border 0.5s ease;

  &:hover {
    background-color: ${props => props.theme.purple};
    border: solid 2px ${props => props.theme.offWhite};
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