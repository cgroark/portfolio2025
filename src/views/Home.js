import styled from 'styled-components';
import fernBg from '../assets/fern.jpeg';
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import HomeNavbar from '../components/HomeNavbar';

const HomeContainer = styled.div`
    background-image: url(${fernBg});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
`;

const HomeCard = styled.div`
    background-color: ${props => props.theme.lightBlack60};
    padding: 20px;
    border-radius: 10px;
    max-width: 460px;
    margin: 20% auto 0;
    text-align: center;

    @media (max-width: 768px) {
      max-width: 300px;
    }
`;

const HomeTitle = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 10px
`;

const HomeSubtitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 5px;
`;

function Home() {
    return (
        <HomeContainer>
          <HomeCard>
            <HomeTitle>Colin Groark</HomeTitle>
            <HomeSubtitle>Software Engineer</HomeSubtitle>
            <HomeNavbar />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '40px 0' }}>
                <GithubLogoIcon size={36} />
                <LinkedinLogoIcon size={36} />
            </div>
          </HomeCard>
        </HomeContainer>
    )
}

export default Home;