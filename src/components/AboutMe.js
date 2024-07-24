import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';
import profile from '../images/profile_pic.JPG'
import petSpin from '../images/pet-spin.gif'
import broccoli from '../images/broccoli.gif'
import python from '../images/python.webp'
import corgi from '../images/corgi.gif'
import language from '../images/language.gif'
//import own images

import EastSharpIcon from '@mui/icons-material/EastSharp';
import Footer from './Footer';


const AboutMe = () => {
    let navigate = useNavigate()

  return (
    <div className='about-me'>
        { /*<div className='about-me-content'>
            <h1>About Me</h1>
        
        </div> */}
        <div className='about-me-prompt'>
            <img src={profile} alt="Avatar"/>
            <div className='text'>
                <h1>
                    Hi! I'm Abigail! <br/>I'm a Digital Arts and Sciences Student aspiring to work in the Video Game Industry!
                </h1>
                <p>
                    I am currently getting my bachelor's degree in Digital Arts and Sciences at the University of Florida
                    with a minor in the Fine Arts. By chance, I took a game development class in 8th grade and haven't lost my passion since! 
                    My dream is to create a game that everyone who grew up never seeing themselves in can play and feel connected.
                </p>
            </div>
        </div>
        <div className='line'></div>

        <div className='skills'>
            <h1>Skills</h1>
            <ul class="skill-bars">
                 <li>
                  <div class="progress percent90"><span>90%</span></div>
                  <strong>Blender</strong>
               </li>
               <li>
                  <div class="progress percent90"><span>90%</span></div>
                  <strong>C++</strong>
               </li>
               <li>
                    <div class="progress percent80"><span>80%</span></div>
                    <strong>Unity</strong>
               </li>
               <li>
                  <div class="progress percent80"><span>80%</span></div>
                  <strong>Java</strong>
               </li>
               <li>
                  <div class="progress percent75"><span>75%</span></div>
                  <strong>C#</strong>
               </li>
               <li>
                  <div class="progress percent50"><span>50%</span></div>
                  <strong>React/JS</strong>
               </li>
               
               <li>
                    <div class="progress percent50"><span>50%</span></div>
                    <strong>Unreal Engine 5</strong>
               </li>
               <li>
                    <div class="progress percent50"><span>50%</span></div>
                    <strong>UE5 Blueprints</strong>
               </li>
            
            </ul>

            <div className='skills-text'>
                Text about experiences that cna be found in resume
               { /*I have gained extensive experience in full-stack web development. I have also been exposed 
                to machine learning with Python modules such as scikit-learn and librosa. After gathering 
                an array of technical skills, I have learned that I enjoy software development, turning 
                it into my passion. You may view highlights of my technical skills above, as well as more 
  details about my carrer in the resume section.*/}&nbsp;
                <nobr className='more-here' onClick={() => {navigate("/experience"); window.scrollTo(0,0);} }>
                    <u>Learn more here</u>
                    <EastSharpIcon className='east-icons' />
                </nobr>
            </div>
            <div className='line'></div>
        </div>

        
        <div className='fun-facts'>
            <h1>Fun Facts About Me!</h1>

            <div className='fun-facts-prompt'>
                <img className="pet" src={petSpin} alt="Cute Pet" />
                <div className='bubble-left'>My favorite games to play are open world RPGs.</div>
            </div>
            <div className='fun-facts-prompt'>
                <div className='bubble-right'> I love sea turtles! </div>
                <img className="pet-right" src={broccoli} alt="Cute Pet" />
            </div>
            <div className='fun-facts-prompt'>
                <img className="pet" src={python} alt="Cute Pet" />
                <div className='bubble-left'>I've got a passion for fashion</div>
            </div>
            <div className='fun-facts-prompt'>
                <div className='bubble-right'> The first every game I made was on Scratch </div>
                <img className="pet-right" src={corgi} alt="Cute Pet" />
            </div>
            <div className='fun-facts-prompt'>
                <img className="pet" src={language} alt="Cute Pet" />
                <div className='bubble-left'> I'm learning Japanese, Korean, and Spanish.</div>
            </div>
        </div>
        
        <p className='bottom-spacing'></p>
        
        <Footer/>
    </div>
  );
};

export default AboutMe;