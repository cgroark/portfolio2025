import styled from 'styled-components';
import fernBg from '../assets/fern.jpeg';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const HeaderContainer = styled.div`
    color: ${props => props.theme.offWhite};
    background-image: url(${fernBg});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const NavLink = styled(Link)`
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

function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <h1 style={{ margin: 0 }}>Colin Groark</h1>
            </NavLink>
            <Navbar />
        </HeaderContainer>
    )
}

export default Header;