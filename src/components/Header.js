import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Header.css';

const Header = () => {
    const location = useLocation();
    const isAboutPage = location.pathname !== '/home';

    const[isScroll, setIsScroll] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 10) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <header  className={`header ${isScroll? 'scrolled' : ''}`}>
      <div className={`header-content${isScroll? 'header-content-scrolled' : ''}`}>
        <div className = "links">
            <Link to="/" >Home</Link>
            <Link to="/about-me" >About Me</Link>
            <Link to="/experience" onClick={window.scrollTo(0,0)}>Resume</Link>
            <Link to="/projects" onClick={window.scrollTo(0,0)}>Projects</Link>
            <Link to="/model" onClick={window.scrollTo(0,0)}>3D Models</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;