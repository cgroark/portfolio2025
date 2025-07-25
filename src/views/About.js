import styled from 'styled-components';
import groark from '../assets/groark.jpeg';

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
  height: fit-content;
  width: calc(50% - 60px);
  margin-top: ${props => props.marginTop || '0'};
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-10px);
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
            <Card style={{ marginBottom: '0', padding: '30px 20px', width: '68%', transform: 'none' }}>
              <ProfileText>
                <h2 style={{ margin: '0 0 10px 0' }}>
                  Colin Groark
                </h2>
                <p style={{ margin: '0' }}>Full stack engineer with a frontend focus and leadership experience who contributes across the stack to build scalable, responsive, accessible, and high-quality UI, data visualizations, and software platforms in close collaboration with product and design teams.</p>
              </ProfileText>
            </Card>
          </ProfileContainer>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
            <Card borderColor="pink">
              <h3 style={{ marginTop: '10px' }}>Full Stack Development</h3>
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
            <Card borderColor="yellow">
              <h3 style={{ marginTop: '10px' }}>DevOps and Design</h3>
              <p>
                Microsoft Azure, Docker, Buildbot, Git, Figma, PhotoShop, Mural, Google Analytics, Fullstory
              </p>
            </Card>
            <Card borderColor="teal">
              <h3 style={{ marginTop: '10px' }}>Recent Experience</h3>
              <p>
                Lead development of complex frontend features from inception to launch.
              </p>
              <p>
                Partner with Product to iterate on UX, resolve ambiguity, and deliver polished, high-impact, responsive UI in line with Figma designs.
              </p>
              <p>
                Team lead for new features: flagging decision points, guiding architecture, reviewing and delivering code, and aligning implementation to ensure compatibility and maintainability of new features.
              </p>
              <p>
                Embrace iteration and feedback loops, quickly adapting frontend work to shifting requirements or design constraints.
              </p>
            </Card>
            <Card borderColor="purple" marginTop="-106px">
              <h3 style={{ marginTop: '10px' }}>What Others Say</h3>
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
                  <strong> - Ray Outlaw, former manager (EnviroIssues)</strong>
              </blockquote>
            </Card>
          </div>
        </AboutContainer>
    )
}

export default About;