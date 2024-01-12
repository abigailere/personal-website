import React from 'react';
import './Home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import InstagramIcon from '@mui/icons-material/Instagram'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

import {useNavigate} from 'react-router-dom'
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="home">
      <div className="about">
        <h2>Abigail Erefah</h2>
        <div className="prompt">
          <p>
           Digital Arts and Sciences Student at the University of Florida graduating May 2025
          </p>
          <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/abigail-erefah')}/>
          <GitHubIcon onClick={() => window.open('https://github.com/abigailere')}/>
          <EmailIcon onClick={() => window.location = 'mailto:eabigail0918@gmail.com'}/>
        </div>
      </div>
      <ExpandCircleDownIcon className='circle-down-icon' onClick={() => {navigate("/about-me")}}/>
      <p className='additional'>Learn More About Me</p>
      <br></br>
      <Footer/>
    </section>
    
  );
};

export default Home;