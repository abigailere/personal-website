import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <h4>Connect With Me!</h4>
        <div className="socialMedia">
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/abigail-erefah')}/>
            <GitHubIcon onClick={() => window.open('https://github.com/abigailere')}/>
            <EmailIcon onClick={() => window.location = 'mailto:eabigail0918@gmail.com'}/>
    
        </div>
        <p> &copy; 2023 abigailerefah.com</p>
    </div>
  )
}

export default Footer