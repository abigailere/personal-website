import React from 'react'
import './Experiences.css'
import WorkIcon from '@mui/icons-material/Work';
import DomainIcon from '@mui/icons-material/Domain';
import resume from '../resume/Abigail Erefah 2025.pdf'
import Footer from './Footer';

const Experiences = () => {


  return (
    <div className='experience'>
        
        <h1>Work Experience</h1>
        
        <div class="resume-timeline">
            <div class="timeline-wrap">
            
                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <WorkIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Training Coordinator</h2>
                        <p>May 2023 - Nov 2023</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Reitz Student Union
                        </h4>
                        <p> 
                            <li>Prepared and directed onboarding training sessions for 2-5 new hires per session by creating training materials and planning training exercises</li>
                            <li>Engaged with trainees by teaching the duties of the job, leading shifts, and effectively mitigating any challenges trainees encounter</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <WorkIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Event Productions Assistant </h2>
                        <p>Oct 2022 - Nov 2022</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Reitz Student Union</h4>
                        <p>
                            <li className='first-li'>Executed department policies, including installing audiovisual equipment and assisting clients during events.</li>
                            <li> Troubleshot issues during events and responded to emergencies to ensure smooth operation.</li>
                            <li> Communicated with client by understanding and responding to client’s needs and providing the best solution for their event.</li>
                        </p>
                    </div>
                </div>

            </div>
            <div className='between-spacing'></div>
        </div>

        <h1> Activities</h1>
        
        <div class="resume-timeline">
            <div class="timeline-wrap">
            
                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <DomainIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Member</h2>
                        <p>May 2022 - May 2023</p>
                    </div>
                    <div class="timeline-content">
                        <h4>UF DevlUp</h4>
                        <p> 
                            <li> Organized and lead weekly technical interview prep sessions to help students prepare for technical portions of the tech-related interviews.</li>
                            <li> Organized and hosted resume and behavioral interview workshops to prepare students for the interview process.</li>
                            <li> Taught and organized weekly React Web Development workshops to teach students how to create frontend applications and learn tools like Git/Github.</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <DomainIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Treasurer and Secretary</h2>
                        <p>June 2022 - August 2022</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Korean Language Table</h4>
                        <p>
                            <li> Designed a UAV (Unmanned Aerial Vehicle) for Search and Rescue in the event of building collapse. </li>
                            <li> Lead a team designated to create a Mission Control Software that would facilitate the communication between the user and the UAV. This would include the dimensions of the scans and the retrieval of data for visualization.</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <DomainIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Conversation Partner</h2>
                        <p>January 2022 - Present</p>
                    </div>
                    <div class="timeline-content">
                        <h4>UF English Language Institute</h4>
                        <p>
                            <li> Designed a UAV (Unmanned Aerial Vehicle) for Search and Rescue in the event of building collapse. </li>
                            <li> Lead a team designated to create a Mission Control Software that would facilitate the communication between the user and the UAV. This would include the dimensions of the scans and the retrieval of data for visualization.</li>
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <a href={resume} download="Abigail Erefah 2025" target='_blank'>
        <button class="btn btn-1" >Download Full Resume </button>
        </a>
        <p className='spacing'></p>

        
        <Footer/>
    </div>
  )
}

export default Experiences