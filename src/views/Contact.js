import { GithubLogoIcon, LinkedinLogoIcon, PaperPlaneTiltIcon, DownloadIcon } from "@phosphor-icons/react";
import groarkResume from '../assets/colingroark-resume-2026.pdf';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 680px;
  margin: 0 auto;
  padding: 36px 0 50px;
`;

const Card = styled.div`
  background-color: ${props => props.theme.offWhite};
  color: ${props => props.theme.lightBlack};
  border: solid 3px ${props => props.theme.pink};
  padding: 28px;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 6px 6px 0 ${({ theme }) => theme.teal};
  text-align: center;

  @media (max-width: 576px) {
    padding: 22px 16px;
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.lightBlack};
  background-color: transparent;
  border: solid 2px transparent;
  padding: 10px 14px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  font-size: clamp(18px, 4vw, 26px);
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.purple};
    border-color: ${props => props.theme.pink};
    color: ${props => props.theme.offWhite};
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.teal};
    outline-offset: 3px;
  }
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.lightBlack};
  text-decoration: none;
  display: inline-flex;
  padding: 8px;
  border-radius: 10px;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.purple};
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.teal};
    outline-offset: 2px;
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
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: 4px 4px 0 ${({ theme }) => theme.yellow};

  &:hover {
    background: ${({ theme }) => theme.darkPurple};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.lightBlack};
    outline-offset: 3px;
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
      <p style={{ margin: '0 0 20px', lineHeight: 1.6 }}>
        Get in touch by email, or find me on GitHub and LinkedIn.
      </p>
      <LineBreak />
      <EmailLink href="mailto:colingroark@gmail.com">
        colingroark@gmail.com
      </EmailLink>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '28px 0' }}>
        <ExternalLink href="https://github.com/cgroark" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <GithubLogoIcon size={36} />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/colin-groark/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
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
