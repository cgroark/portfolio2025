import { ArrowSquareOutIcon, GithubLogoIcon, CodeIcon, CodeBlockIcon, BookOpenTextIcon, AngularLogoIcon, PersonSimpleRunIcon } from '@phosphor-icons/react';
import styled from 'styled-components';
import bookends from '../assets/bookEnds.png';
import PaceHeader from '../components/PaceHeader';


const ProjectsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightBlack};
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  width: calc(60% - 10px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 300px;
  border-radius: 20px;
  border: solid 3px ${props => props.theme.offWhite};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ExternalButton = styled.a`
  display: block;
  margin: 20px auto 0 auto;
  width: fit-content;
  padding: 10px 24px;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.offWhite};
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: background ease-in-out 0.3s;

  &:hover {
    background: ${({ theme }) => theme.darkPurple};
  }
`;

const NotificationButton = styled.div`
  display: block;
  margin: 20px auto 0 auto;
  width: fit-content;
  padding: 10px 24px;
`;

const PaceSection = styled.div`
  border-radius: 20px;
  border: solid 3px ${props => props.theme.offWhite};
  width: calc(30% - 10px);
  padding: 20px 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Projects() {
  return (
    <ProjectsContainer>
      <h1 style={{ marginBottom: '20px', textAlign: 'right', display: 'block' }}>
        Projects
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '20px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <a href="https://bookends.design" target="_blank" rel="noopener noreferrer">
          <ProjectImage src={bookends} alt="Book Ends" />
        </a>
        <Card>
          <h2 style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a style={{ color: 'inherit' }} href="https://github.com/cgroark/supa-bookends" target="_blank" rel="noopener noreferrer">
                <GithubLogoIcon size={32} />
              </a>
              Book Ends
            </div>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AngularLogoIcon size={24} />
            <p>
              Fullstack Angular CRUD web application
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpenTextIcon size={24} />
            <p>
              Track the books you're reading, find new books, see your friends' reading lists.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CodeBlockIcon size={32} />
            <p>
              Angular, TypeScript, HTML, SCSS, Bootstrap, Supabase, Netlify, Google Books API, New York Times Books API
            </p>
          </div>
          <ExternalButton
            href="https://bookends.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Visit Project Site
              <ArrowSquareOutIcon size={24} />
            </div>
          </ExternalButton>
        </Card>
      </div>
      <hr style={{ margin: '40px 0' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <Card>
          <h2 style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a style={{ color: 'inherit' }} href="https://github.com/cgroark/pace-yourself" target="_blank" rel="noopener noreferrer">
                <GithubLogoIcon size={32} />
              </a>
              Pace Yourself
            </div>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CodeIcon size={24} />
            <p>
              React web application
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PersonSimpleRunIcon size={24} />
            <p>
              Get a race pace for your next event, or a goal time based on pace.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CodeBlockIcon size={32} />
            <p>
              React, HTML, SCSS, Netlify
            </p>
          </div>
          <NotificationButton>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Play With Below
              <ArrowSquareOutIcon size={24} />
            </div>
          </NotificationButton>
          <ExternalButton
            href="https://race-pace-yourself.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Visit Project Site
              <ArrowSquareOutIcon size={24} />
            </div>
          </ExternalButton>
        </Card>
        <PaceSection>
          <PaceHeader />
        </PaceSection>
      </div>
    </ProjectsContainer>
  );
}

export default Projects;