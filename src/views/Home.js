import styled from 'styled-components';
import fernBg from '../assets/fern.jpeg';
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import HomeNavbar from '../components/HomeNavbar';

const HomeContainer = styled.div`
    background-image: url(${fernBg});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
`;

const HomeCard = styled.div`
    background-color: ${props => props.theme.lightBlack60};
    padding: 20px;
    border-radius: 10px;
    max-width: 460px;
    margin: 15% auto 10px;
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

const ExternalLink = styled.a`
  color: ${props => props.theme.offWhite};
  text-decoration: none;
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

function Home() {
    return (
        <HomeContainer>
          <HomeCard>
            <HomeTitle>Colin Groark</HomeTitle>
            <HomeSubtitle>Software Engineer</HomeSubtitle>
            <HomeNavbar />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '40px 0' }}>
              <ExternalLink href="https://github.com/cgroark" target="_blank" rel="noopener noreferrer">
                <GithubLogoIcon size={36} />
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/colin-groark/" target="_blank" rel="noopener noreferrer">
                <LinkedinLogoIcon size={36} />
              </ExternalLink>
            </div>
          </HomeCard>
        </HomeContainer>
    )
}

export default Home;