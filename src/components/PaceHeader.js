import styled from 'styled-components';
import PaceYourself from './PaceYourself'
import runnerImage from '../assets/runner-image.png'

const Header = styled.header`
  text-align: center;
  font-size: 2rem;
  color: white;
  margin: 5rem 0 4.5rem 0;
  font-family: "Permanent Marker", cursive;
  position: relative;
  z-index: 2;
`;

const Image = styled.img`
  width: 210px;
  position: absolute;
  margin-top: -208px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 50px;
  }
`

function PaceHeader() {
  return (
    <div className="App">
      <Header>
        Pace Yourself
      </Header>
      <Image src={runnerImage} alt='neon runner' ></Image>
      <PaceYourself />
    </div>
  );
}

export default PaceHeader;