import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Projects from './views/Projects';
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightBlack};
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AppContent() {
  const location = useLocation();

  return (
    <AppContainer>
      {location.pathname !== "/" && <Header />}
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
