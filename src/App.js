// Import necessary components
import './App.css';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages 
import Art from './pages/Art.js';
import Contact from './pages/ContactMe.js'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'

import Header from './components/header.js'
import Navbar from './components/navigation-bar.js';
import Footer from './components/footer.js';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Header/>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
          </Routes>
        <Footer/>
      </Router>
    </AppContainer>
  );
}

export default App;
