import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DisplayProject from './components/DisplayProject';
import AboutMe from './components/AboutMe';



function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-me" element={<AboutMe/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experiences/>}></Route>
          <Route path="/displayProject/:id" elemtent={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;