import {
  ArrowBendUpLeftIcon, ArrowBendRightDownIcon,
  ArrowSquareOutIcon, ChartLineIcon, GithubLogoIcon,
  CodeIcon, CodeBlockIcon, BookOpenTextIcon,
  AngularLogoIcon, PersonSimpleRunIcon,
  SubtractSquareIcon,
  StorefrontIcon
} from '@phosphor-icons/react';
import styled from 'styled-components';
import bookends from '../assets/bookEnds.png';
import participate from '../assets/po-site.png';
import ctDashboard from '../assets/CTdashboard.png';
import PaceHeader from '../components/PaceHeader';


const ProjectsContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;

  @media (max-width: 940px) {
    h1 {
      text-align: center !important;
      margin-bottom: 50px !important;
    }
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 940px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightBlack};
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  width: calc(60% - 10px);
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px;
    min-height: 32px;
    max-width: 32px;
    max-height: 32px;
    flex-shrink: 0;
    flex-grow: 0;
  }
`;

const ProjectImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'borderColor'
})`
  width: 300px;
  border-radius: 20px;
  border: solid 3px;
  border-color: ${({ borderColor, theme }) => theme[borderColor] || theme.offWhite};
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }

  &:hover {
    transform: translateY(-10px);
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

const PaceSection = styled.div`
  border-radius: 20px;
  border: solid 3px ${props => props.theme.offWhite};
  width: calc(30% - 10px);
  padding: 20px 10px;
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const ArrowUp = styled.div`
  display: block;
  margin: 20px auto 0 auto;
  width: fit-content;
  padding: 10px 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ArrowDown = styled.div`
  margin: 20px auto 0 auto;
  width: fit-content;
  padding: 10px 24px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LineBreak = styled.hr`
  margin: 40px 0;
  border: 1px solid ${props => props.theme.yellow};
`;

function Projects() {
  return (
    <ProjectsContainer>
      <h1 style={{ marginBottom: '20px', textAlign: 'right', display: 'block', fontWeight: '300' }}>
        Recent Projects
      </h1>
      <ProjectWrapper style={{ flexWrap: 'wrap-reverse' }}>
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
            <AngularLogoIcon size={32} />
            <p>
              Fullstack Angular CRUD web application
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpenTextIcon size={32} />
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
              <ArrowSquareOutIcon size={32} />
            </div>
          </ExternalButton>
        </Card>
      </ProjectWrapper>
      <LineBreak />
      <ProjectWrapper>
      <Card>
          <h2 style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              ColdTrace Dashboard, Nexleaf Analytics
            </div>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AngularLogoIcon size={32} />
            <p>
              Angular Frontend, Python/Django Backend
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ChartLineIcon size={32} />
            <p>
              Built as key contributor to the Nexleaf Analytics engineering team. Tracking real-time data from remote temperature sensors, monitoring vaccine temperatures around the globe. Iterating quickly in line with Product and Design teams, and responding quickly to user needs and client feedback. Consitently updating UI, expanding test coverage, supporting devleopment of AI chatbot, and broadening use of data visualization.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CodeBlockIcon size={32} />
            <p>
              Angular, TypeScript, RxJS, amCharts (data visualization), HTML, SCSS, Bootstrap, Material UI, Ionic/Capacitor (multi-platform mobile app dev), RESTful API, Python, Django, MongoDB
            </p>
          </div>
        </Card>
        <ProjectImage borderColor="teal" src={ctDashboard} alt="ColdTrace Dashboard" />
      </ProjectWrapper>
      <LineBreak />
      <ProjectWrapper style={{ flexWrap: 'wrap-reverse' }}>
        <PaceSection>
          <PaceHeader />
        </PaceSection>
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
            <CodeIcon size={32} />
            <p>
              React web application
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PersonSimpleRunIcon size={32} />
            <p>
              Get a race pace for your next event, or a goal time based on pace.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CodeBlockIcon size={32} />
            <p>
              React, JSX, styled-components, Netlify
            </p>
          </div>
            <ArrowUp>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ArrowBendUpLeftIcon size={32} />
                Test it out!
              </div>
            </ArrowUp>
          <ExternalButton
            href="https://race-pace-yourself.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Visit Project Site
              <ArrowSquareOutIcon size={32} />
            </div>
          </ExternalButton>
          <ArrowDown>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Test it out!
                <ArrowBendRightDownIcon size={32} />
              </div>
            </ArrowDown>
        </Card>
      </ProjectWrapper>
      <LineBreak />
      <ProjectWrapper>
        <Card>
          <h2 style={{ marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              participate.online Splash Page
            </div>
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SubtractSquareIcon size={32} />
            <p>
              WordPress Custom Theme
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <StorefrontIcon size={32} />
            <p>
            Built for EnviroIssues to highlight design and feature updates to participate.online websites built to communicate updates on public infrastrucutre projects in the Pacific Northwest.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CodeBlockIcon size={32} />
            <p>
              WordPress (CMS), PHP, HTML, CSS, JavaScript, JQuery
            </p>
          </div>
          <ExternalButton
            href="https://participate.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Visit Website
              <ArrowSquareOutIcon size={32} />
            </div>
          </ExternalButton>
        </Card>
        <a href="https://participate.online/" target="_blank" rel="noopener noreferrer">
          <ProjectImage borderColor="yellow" src={participate} alt="Participate Online" />
        </a>
      </ProjectWrapper>

    </ProjectsContainer>
  );
}

export default Projects;