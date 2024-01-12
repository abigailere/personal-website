import red from '../images/red-striped-fabric-texture-600x600.jpg'
import React from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'
import Footer from './Footer'
import { ProjectList } from '../projectLists/ProjectList'

const Projects = () => {
  return (
    <div className='project'>
      <h1> Projects </h1>
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