import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Project from './components/Projects';
import Model from './components/Models';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-me" element={<AboutMe/>}></Route>
          <Route path="/experience" element={<Experiences/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
          <Route path="/model" element={<Model/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;