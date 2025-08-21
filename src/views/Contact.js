import { GithubLogoIcon, LinkedinLogoIcon, PaperPlaneTiltIcon, DownloadIcon } from "@phosphor-icons/react";
import groarkResume from '../assets/Groark_Colin-resume-2025.pdf';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightBlack};
  border: solid 3px ${props => props.theme.pink};
  padding: 20px;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 6px 6px 0 ${({ theme }) => theme.teal};
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.lightBlack};
  background-color: transparent;
  border: solid 2px transparent;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 30px;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.purple};
    border: solid 2px ${props => props.theme.pink};
    color: ${props => props.theme.offWhite};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.lightBlack};
  text-decoration: none;
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    transform: scale(1.1);
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

const LineBreak = styled.hr`
  margin: 20px 0;
  border: 1px solid ${props => props.theme.teal};
`;

function Contact() {
  return (
    <ContactContainer>
     <Card>
      <h1 style={{ marginBottom: '20px', textAlign: 'center', fontWeight: '300' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <PaperPlaneTiltIcon size={32} />
          Contact Me
        </div>
      </h1>
      <LineBreak />
      <EmailLink href="mailto:colingroark@gmail.com">
        colingroark@gmail.com
      </EmailLink>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', margin: '40px 0' }}>
        <ExternalLink href="https://github.com/cgroark" target="_blank" rel="noopener noreferrer">
          <GithubLogoIcon size={36} />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/colin-groark/" target="_blank" rel="noopener noreferrer">
          <LinkedinLogoIcon size={36} />
        </ExternalLink>
      </div>
      <DownloadLink href={groarkResume} target="_blank" rel="noopener noreferrer">
        <DownloadIcon size={32} />
        Resume
      </DownloadLink>
      </Card>
    </ContactContainer>
  )
}

export default Contact;