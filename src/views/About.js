import styled from 'styled-components';
import { DownloadIcon, ChatsCircleIcon, CodeIcon, CloudCheckIcon, FinnTheHumanIcon } from "@phosphor-icons/react";
import groark from '../assets/groark.jpeg';
import groarkResume from '../assets/Groark_Colin-resume-2025.pdf';

const AboutContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  margin-bottom: 30px;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ProfileText = styled.div`
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 25px;
  }
`;

const HeadShot = styled.img`
  border-radius: 50%;
  border: 3px solid ${props => props.theme.offWhite};
  margin-right: -60px;
  z-index: 1;
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 110px;
  }

  &:hover {
    transform: scale(1.05);
  }
`
const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'marginTop' && prop !== 'borderColor'
})`
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightBlack};
  padding: 20px;
  border-radius: 10px;
  border: solid 3px;
  border-color: ${props => props.theme[props.borderColor] || props.theme.lightBlack};
  box-shadow: 6px 6px ${props => props.theme[props.boxShadow] || props.theme.lightBlack};
  height: fit-content;
  width: calc(50% - 60px);
  margin-top: ${props => props.marginTop || '0'};
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

const DownloadLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto 0 auto;
  width: fit-content;
  padding: 10px 24px;
  background: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.offWhite};
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  transition: background ease-in-out 0.3s;
  box-shadow: 4px 4px 0 ${({ theme }) => theme.yellow};

  &:hover {
    background: ${({ theme }) => theme.darkPurple};
  }
`;

function About() {
    return (
        <AboutContainer>
          <h1 style={{ marginBottom: '20px', textAlign: 'right', display: 'block', fontWeight: '300' }}>
            About Me
          </h1>
          <ProfileContainer >
            <HeadShot src={groark} alt="Colin Groark" />
            <Card style={{ marginBottom: '0', padding: '30px 20px', width: '68%', transform: 'none' }} borderColor="teal" boxShadow="pink">
              <ProfileText>
                <h2 style={{ margin: '0 0 10px 0' }}>
                  Colin Groark
                </h2>
                <p style={{ margin: '0' }}>Full stack software engineer with a frontend focus and leadership experience who contributes across the stack to build scalable, responsive, accessible, and high-quality UI, data visualizations, and software platforms in close collaboration with product and design teams.</p>
              </ProfileText>
            </Card>
          </ProfileContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
            <Card borderColor="pink" boxShadow="teal">
              <h3 style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                Full Stack Development
                <CodeIcon size={32} />
              </h3>
              <p>
                React, Angular, TypeScript, JavaScript, ES6, JSX, RxJS, JQuery, CSS, SCSS, styled-components, HTML, Data Visualization (Chart.js, Recharts, amCharts), Ionic/Capacitor
              </p>
              <p>
                Bootstrap, Material UI, WordPress CMS, Jasmine and Karma (Angular testing framework)
              </p>
              <p>
                Node.js, SQL, PostgreSQL, Python, GraphQL
              </p>
            </Card>
            <Card borderColor="yellow" boxShadow="purple">
              <h3 style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                DevOps and Design
                <CloudCheckIcon size={32} />
              </h3>
              <p>
                Microsoft Azure, Docker, Buildbot, Git, Figma, PhotoShop, Mural, Google Analytics, Fullstory
              </p>
            </Card>
            <Card borderColor="teal" boxShadow="pink">
              <h3 style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                Recent Experience
                <FinnTheHumanIcon size={32} />
              </h3>
              <p>
                Team Lead for development of complex SaaS features from inception to launch: flagging decision points, guiding architecture, reviewing and delivering code, and aligning implementation to ensure compatibility and maintainability of new features.
              </p>
              <p>
                Partner with Product to iterate on UX, resolve ambiguity, and deliver polished, high-impact, responsive UI in line with Figma designs.
              </p>
              <p>
                Owned the re-design, user testing, implementation and delivery of critical device installation dashboard workflow that supports every technician in the field ahead of a major hardware release (acting Product Manager for feature rollout).
              </p>
              <p>
                Embrace iteration and feedback loops, quickly adapting frontend work to shifting requirements or design constraints.
              </p>
              <p>
                Manage Azure blob storage and be responsible for database redundancy and retention policies.
              </p>
              <DownloadLink href={groarkResume} target="_blank" rel="noopener noreferrer">
              <DownloadIcon size={32} />
                Resume
            </DownloadLink>
            </Card>
            <Card borderColor="purple" marginTop="-106px" boxShadow="yellow">
              <h3 style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                What Others Say
                <ChatsCircleIcon size={32} />
              </h3>
              <p>
                "<em>Colin's blend of technical excellence, rapid problem-solving, and collaborative spirit has been instrumental in delivering a wide variety of new features on time and with high quality...He's also remarkably consistent in delivering on his commitments.</em>"
              </p>
              <blockquote>
                <strong> - Lucas Howell, engineering manager (Nexleaf Analytics)</strong>
              </blockquote>
              <p>
                "<em>I could not recommend Colin more highly. He is one of my favorite people to have ever worked with. His combination of technical talent and understanding of the important work we do is nearly impossible to replicate. When hiring devs, I've found the latter to be incredibly hard to find.</em>"
              </p>
              <blockquote>
                  <strong> - Ray Outlaw (PSE), former manager at EnviroIssues</strong>
              </blockquote>
            </Card>
          </div>
        </AboutContainer>
    )
}

export default About;