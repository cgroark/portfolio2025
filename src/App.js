import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
// import Projects from './views/Projects';
// import Contact from './views/Contact';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: ${props => props.theme.lightBlack};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AppHeader = styled.header`
  width: 100%;
`;

function AppContent() {
  const location = useLocation();

  return (
    <AppContainer>
      <AppHeader>
      {location.pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppHeader>
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
