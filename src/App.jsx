  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Home from './Pages/home';
  import About from './Pages/About';
  import Contact from './Pages/Contact';
  import Navbar from './components/navbar';
  import Project from './Pages/projects';
  function App() {

      return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default App
