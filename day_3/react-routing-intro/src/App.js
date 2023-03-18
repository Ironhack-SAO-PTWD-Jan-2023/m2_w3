import { Routes, Route } from 'react-router-dom';
import './App.css';

import projectsData from './projects-data.json';

import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ProjectsPage from './pages/ProjectsPage';
import QueryStringExample from './pages/QueryStringExample';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Parte que varia de acordo com a URL */}
      <Routes>
        {/* <Route path="/" element={<HomePage />}/> */}
        <Route path="/" element={<HomePageWithNavigate />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage projectsData={projectsData} />}/>
        <Route path="/projects/:projectId" element={<ProjectDetailsPage projectsData={projectsData} />} />
        <Route path="/example" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>

      <footer>Desenvolvido para a turma 97 de WebDev</footer>
    </div>
  );
}

export default App;
