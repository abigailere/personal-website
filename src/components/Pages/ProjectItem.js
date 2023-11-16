import React from 'react'
import BuildIcon from '@mui/icons-material/Build';
import {useNavigate} from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectItem = ({title, image, text, github, skills, id}) => {
  const navigate = useNavigate()

  return (
    <div className='projectItem' >
      <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <div className='display-text'>
        <h3>{title}</h3>
        <p>{text} </p>
        <p className='text2'>
            <BuildIcon style={{"font-size": "2.5vh"}}/> Skills: {skills}
            <GitHubIcon className='icons' onClick={() => window.open(github)}/>
        </p>
        
        
      </div>
    </div>
  )
}

export default ProjectItem