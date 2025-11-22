  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Home from './Pages/home';
  import About from './Pages/About';
  import Contact from './Pages/Contact';
  import Navbar from './components/Navbar';
  import Project from './Pages/Projects';
  import ProjectDetail from './pages/ProjectDetail'
  function App() {

      return (
      <BrowserRouter basename='/portfolio-website/' >
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="project/:id" element={<ProjectDetail />} /> 
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App
