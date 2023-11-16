import React from 'react'
import ProjectItem from './ProjectItem'
import red from '../../images/red-striped-fabric-texture-600x600.jpg'

import './Projects.css'
import { ProjectList } from '../../assests/ProjectList'
import Footer from '../Footer'

const Projects = () => {
  return (
    <div>
      <h1> My Projects</h1>
      <div className='ProjectList'>
      {ProjectList.map((item, index) => { /* */
             return <ProjectItem title={item.title} image={item.image} text={item.description} github={item.github} skills={item.skills}/>
         })}
      </div>
      <p className='spacing'></p>
      <Footer/>
    </div>
  )
}

export default Projects